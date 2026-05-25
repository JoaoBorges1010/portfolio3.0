"use client";

import { useState, type FormEvent } from "react";
import {
  EmailConfigError,
  EmailNetworkError,
  sendContactEmail,
  type ContactEmailPayload,
} from "@/lib/email";

const initialValues: ContactEmailPayload = {
  name: "",
  subject: "",
  email: "",
  message: "",
};

export function useContactForm() {
  const [values, setValues] = useState<ContactEmailPayload>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const updateField = (field: keyof ContactEmailPayload, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setError(null);
    setSuccess(false);
  };

  const validate = (): string | null => {
    if (!values.name.trim()) return "Name is required.";
    if (!values.subject.trim()) return "Subject is required.";
    if (!values.email.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      return "Please enter a valid email address.";
    }
    if (!values.message.trim()) return "Message is required.";
    return null;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactEmail(values);
      setSuccess(true);
      setValues(initialValues);
    } catch (err) {
      if (err instanceof EmailConfigError) {
        setError(err.message);
      } else if (err instanceof EmailNetworkError) {
        setError(err.message);
      } else {
        setError("Your message could not be sent. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    updateField,
    handleSubmit,
    isSubmitting,
    error,
    success,
  };
}
