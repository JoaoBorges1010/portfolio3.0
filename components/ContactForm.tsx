import { useStateContext } from "@/contexts/ContextProvider";
import Button from "./Button";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

const ContactForm = () => {
  const { currentColor } = useStateContext();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameInput = e.currentTarget.querySelector(
      '[name="name"]'
    ) as HTMLInputElement;
    const subjectInput = e.currentTarget.querySelector(
      '[name="subject"]'
    ) as HTMLInputElement;
    const emailInput = e.currentTarget.querySelector(
      '[name="email"]'
    ) as HTMLInputElement;
    const messageInput = e.currentTarget.querySelector(
      '[name="message"]'
    ) as HTMLTextAreaElement;

    emailjs
      .send(
        SERVICE_ID as string,
        TEMPLATE_ID as string,
        {
          name: nameInput.value,
          subject: subjectInput.value,
          email: emailInput.value,
          message: messageInput.value,
        },
        USER_ID
      )
      .then((response) => {
        console.log("Email sent successfully", response);
        const form = document.getElementById("contactForm");
        if (form) {
          (form as HTMLFormElement).reset();
        } else {
          console.error("Form element not found!");
        }
      })
      .catch((error) => {
        console.error("Email could not be sent", error);
      });
  };

  return (
    <form onSubmit={sendEmail} id="contactForm" className="mt-[10px] md:mt-0">
      <div className="grid grid-cols-12 mx-[-15px]">
        <div className="col-span-12 md:col-span-4 px-[15px]">
          <input
            style={{ outlineColor: currentColor }}
            className="border-[1px] dark:border-dark border-lighter-gray focus:outline transition-all dark:dark:bg-light-gray bg-lighter-gray w-full py-3 px-7 mb-[30px]"
            type="text"
            name="name"
            placeholder="YOUR NAME"
          />
        </div>
        <div className="col-span-12 md:col-span-4 px-[15px]">
          <input
            style={{ outlineColor: currentColor }}
            className="border-[1px] dark:border-dark border-lighter-gray focus:outline transition-all dark:bg-light-gray bg-lighter-gray w-full py-3 px-7 mb-[30px]"
            type="text"
            name="subject"
            placeholder="SUBJECT"
          />
        </div>
        <div className="col-span-12 md:col-span-4 px-[15px]">
          <input
            style={{ outlineColor: currentColor }}
            className="border-[1px] dark:border-dark border-lighter-gray focus:outline transition-all dark:bg-light-gray bg-lighter-gray w-full py-3 px-7 mb-[30px]"
            type="text"
            name="email"
            placeholder="YOUR EMAIL"
          />
        </div>
        <div className="col-span-12 px-[15px]">
          <textarea
            style={{ outlineColor: currentColor }}
            className="mb-[30px] h-[150px] w-full overflow-hidden focus:outline transition-all border-[1px] dark:border-dark border-lighter-gray
         dark:bg-light-gray bg-lighter-gray resize-y py-3 px-7"
            name="message"
            placeholder="YOUR MESSAGE"
          ></textarea>
        </div>

        <div className="col-span-12 px-[15px]">
          <Button
            type="submit"
            style={{ backgroundColor: currentColor }}
            className="rounded-none px-10 py-3 shadow-custom text-basic-white uppercase font-semibold"
          >
            Send Message
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
