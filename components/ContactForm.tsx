import { useStateContext } from "@/contexts/ContextProvider";

const ContactForm = () => {
  const { currentColor } = useStateContext();
  return (
    <form className="mt-[10px] md:mt-0">
      <div className="grid grid-cols-12 mx-[-15px]">
        <div className="col-span-12 md:col-span-4 px-[15px]">
          <input
            style={{ outlineColor: currentColor }}
            className="border-[1px] border-dark focus:outline transition-all bg-light-gray w-full py-3 px-7 mb-[30px]"
            type="text"
            name="name"
            placeholder="YOUR NAME"
          />
        </div>
        <div className="col-span-12 md:col-span-4 px-[15px]">
          <input
            style={{ outlineColor: currentColor }}
            className="border-[1px] border-dark focus:outline transition-all bg-light-gray w-full py-3 px-7 mb-[30px]"
            type="text"
            name="name"
            placeholder="SUBJECT"
          />
        </div>
        <div className="col-span-12 md:col-span-4 px-[15px]">
          <input
            style={{ outlineColor: currentColor }}
            className="border-[1px] border-dark focus:outline transition-all bg-light-gray w-full py-3 px-7 mb-[30px]"
            type="text"
            name="name"
            placeholder="YOUR EMAIL"
          />
        </div>
        <div className="col-span-12 px-[15px]">
          <textarea
            style={{ outlineColor: currentColor }}
            className="mb-[30px] h-[150px] w-full overflow-hidden focus:outline transition-all border-[1px] border-dark
         bg-light-gray resize-y py-3 px-7"
            name="message"
            placeholder="YOUR MESSAGE"
          ></textarea>
        </div>

        <div className="col-span-12 px-[15px]"></div>
      </div>
    </form>
  );
};

export default ContactForm;
