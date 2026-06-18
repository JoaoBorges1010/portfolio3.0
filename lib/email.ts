import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { site } from "@/constants/site";

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

export class EmailSendError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EmailSendError";
  }
}

function getEmailSendErrorMessage(text: string): string {
  if (/invalid grant|reconnect your gmail/i.test(text)) {
    return "The Gmail connection in EmailJS has expired. Reconnect Gmail under Email Services in the EmailJS dashboard, then try again.";
  }

  return "Your message could not be sent. Please try again later.";
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

function buildTemplateParams(payload: ContactEmailPayload) {
  return {
    ...payload,
    to_name: site.name,
  };
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const { serviceId, templateId, userId } = getEmailConfig();

  try {
    return await emailjs.send(
      serviceId,
      templateId,
      buildTemplateParams(payload),
      userId
    );
  } catch (error) {
    if (error instanceof TypeError) {
      throw new EmailNetworkError();
    }
    if (error instanceof EmailJSResponseStatus) {
      throw new EmailSendError(getEmailSendErrorMessage(error.text));
    }
    throw error;
  }
}
