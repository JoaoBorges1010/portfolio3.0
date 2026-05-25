import { describe, expect, it, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useContactForm } from "@/hooks/useContactForm";
import { sendContactEmail } from "@/lib/email";

vi.mock("@/lib/email", () => ({
  EmailConfigError: class EmailConfigError extends Error {},
  EmailNetworkError: class EmailNetworkError extends Error {},
  sendContactEmail: vi.fn(),
}));

describe("useContactForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("validates required fields", async () => {
    const { result } = renderHook(() => useContactForm());

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: vi.fn(),
      } as unknown as React.FormEvent<HTMLFormElement>);
    });

    expect(result.current.error).toBe("Name is required.");
    expect(sendContactEmail).not.toHaveBeenCalled();
  });

  it("validates email format", async () => {
    const { result } = renderHook(() => useContactForm());

    act(() => {
      result.current.updateField("name", "João");
      result.current.updateField("subject", "Hello");
      result.current.updateField("email", "invalid-email");
      result.current.updateField("message", "Test message");
    });

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: vi.fn(),
      } as unknown as React.FormEvent<HTMLFormElement>);
    });

    expect(result.current.error).toBe("Please enter a valid email address.");
  });

  it("submits successfully and resets form", async () => {
    vi.mocked(sendContactEmail).mockResolvedValue({ status: 200, text: "OK" });

    const { result } = renderHook(() => useContactForm());

    act(() => {
      result.current.updateField("name", "João");
      result.current.updateField("subject", "Hello");
      result.current.updateField("email", "test@example.com");
      result.current.updateField("message", "Test message");
    });

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: vi.fn(),
      } as unknown as React.FormEvent<HTMLFormElement>);
    });

    expect(sendContactEmail).toHaveBeenCalled();
    expect(result.current.success).toBe(true);
    expect(result.current.values.name).toBe("");
  });
});
