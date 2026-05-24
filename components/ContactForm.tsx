"use client";

import { useStateContext } from "@/contexts/ContextProvider";
import Button from "./Button";
import { useContactForm } from "@/hooks/useContactForm";
import { cn } from "@/lib/cn";

const inputClassName =
  "border-[1px] dark:border-dark border-lighter-gray focus:outline transition-all dark:bg-light-gray bg-lighter-gray w-full py-3 px-7 mb-[30px]";

const ContactForm = () => {
  const { currentColor } = useStateContext();
  const { values, updateField, handleSubmit, isSubmitting, error, success } =
    useContactForm();

  return (
    <form onSubmit={handleSubmit} id="contactForm" className="mt-[10px] md:mt-0">
      <div className="grid grid-cols-12 mx-[-15px]">
        <div className="col-span-12 md:col-span-4 px-[15px]">
          <input
            style={{ outlineColor: currentColor }}
            className={inputClassName}
            type="text"
            name="name"
            placeholder="YOUR NAME"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="col-span-12 md:col-span-4 px-[15px]">
          <input
            style={{ outlineColor: currentColor }}
            className={inputClassName}
            type="text"
            name="subject"
            placeholder="SUBJECT"
            value={values.subject}
            onChange={(e) => updateField("subject", e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="col-span-12 md:col-span-4 px-[15px]">
          <input
            style={{ outlineColor: currentColor }}
            className={inputClassName}
            type="email"
            name="email"
            placeholder="YOUR EMAIL"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="col-span-12 px-[15px]">
          <textarea
            style={{ outlineColor: currentColor }}
            className={cn(
              inputClassName,
              "mb-[30px] h-[150px] overflow-hidden resize-y"
            )}
            name="message"
            placeholder="YOUR MESSAGE"
            value={values.message}
            onChange={(e) => updateField("message", e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="col-span-12 px-[15px]">
          <Button
            type="submit"
            variant="primary"
            style={{ backgroundColor: currentColor }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>

        <div className="col-span-12 px-[15px] mt-4" aria-live="polite">
          {error && (
            <p className="text-red-500 text-sm" role="alert">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-600 dark:text-green-400 text-sm" role="status">
              Message sent successfully. Thank you!
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
