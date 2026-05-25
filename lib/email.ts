import emailjs from "@emailjs/browser";

export interface ContactEmailPayload {
  name: string;
  subject: string;
  email: string;
  message: string;
}

export class EmailConfigError extends Error {
  constructor() {
    super(
      "Email service is not configured. Set NEXT_PUBLIC_EMAILJS_* environment variables."
    );
    this.name = "EmailConfigError";
  }
}

export class EmailNetworkError extends Error {
  constructor() {
    super(
      "Unable to reach the email service. Check your connection and try again."
    );
    this.name = "EmailNetworkError";
  }
}

function getEmailConfig() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  if (!serviceId || !templateId || !userId) {
    throw new EmailConfigError();
  }

  return { serviceId, templateId, userId };
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const { serviceId, templateId, userId } = getEmailConfig();

  try {
    return await emailjs.send(serviceId, templateId, { ...payload }, userId);
  } catch (error) {
    if (error instanceof TypeError) {
      throw new EmailNetworkError();
    }
    throw error;
  }
}
