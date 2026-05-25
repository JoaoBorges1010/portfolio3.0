import { describe, expect, it, vi, beforeEach } from "vitest";
import {
  EmailConfigError,
  EmailNetworkError,
  sendContactEmail,
} from "@/lib/email";

vi.mock("@emailjs/browser", () => ({
  default: {
    send: vi.fn(),
  },
}));

import emailjs from "@emailjs/browser";

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
      },
      "user"
    );
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
