import { describe, expect, it, vi, beforeEach } from "vitest";
import {
  EmailConfigError,
  EmailNetworkError,
  EmailSendError,
  sendContactEmail,
} from "@/lib/email";

vi.mock("@emailjs/browser", () => {
  class EmailJSResponseStatus extends Error {
    status: number;
    text: string;

    constructor(status: number, text: string) {
      super(text);
      this.status = status;
      this.text = text;
      this.name = "EmailJSResponseStatus";
    }
  }

  return {
    EmailJSResponseStatus,
    default: {
      send: vi.fn(),
    },
  };
});

import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

describe("sendContactEmail", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    delete process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    delete process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    delete process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  });

  it("throws EmailConfigError when env vars are missing", async () => {
    await expect(
      sendContactEmail({
        name: "Test",
        subject: "Hi",
        email: "test@example.com",
        message: "Hello",
      })
    ).rejects.toBeInstanceOf(EmailConfigError);
  });

  it("sends email when config is present", async () => {
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID = "service";
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = "template";
    process.env.NEXT_PUBLIC_EMAILJS_USER_ID = "user";

    vi.mocked(emailjs.send).mockResolvedValue({ status: 200, text: "OK" });

    await sendContactEmail({
      name: "Test",
      subject: "Hi",
      email: "test@example.com",
      message: "Hello",
    });

    expect(emailjs.send).toHaveBeenCalledWith(
      "service",
      "template",
      {
        name: "Test",
        subject: "Hi",
        email: "test@example.com",
        message: "Hello",
        to_name: "João Borges",
      },
      "user"
    );
  });

  it("throws EmailSendError on EmailJS API failure", async () => {
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID = "service";
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = "template";
    process.env.NEXT_PUBLIC_EMAILJS_USER_ID = "user";

    vi.mocked(emailjs.send).mockRejectedValue(
      new EmailJSResponseStatus(
        412,
        "Gmail_API: Invalid grant. Please reconnect your Gmail account"
      )
    );

    await expect(
      sendContactEmail({
        name: "Test",
        subject: "Hi",
        email: "test@example.com",
        message: "Hello",
      })
    ).rejects.toMatchObject({
      name: "EmailSendError",
      message: expect.stringContaining("Reconnect Gmail"),
    });
  });

  it("throws EmailNetworkError on TypeError", async () => {
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID = "service";
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = "template";
    process.env.NEXT_PUBLIC_EMAILJS_USER_ID = "user";

    vi.mocked(emailjs.send).mockRejectedValue(new TypeError("fetch failed"));

    await expect(
      sendContactEmail({
        name: "Test",
        subject: "Hi",
        email: "test@example.com",
        message: "Hello",
      })
    ).rejects.toBeInstanceOf(EmailNetworkError);
  });
});
