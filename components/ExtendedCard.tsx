import { useStateContext } from "@/contexts/ContextProvider";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

interface ExtendedCardProps {
  id: string;
  title: string;
  skills: Array<string>;
  description: string;
  details: Array<string>;
  image: string;
  link: string;
  handleClose: () => void;
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const ExtendedCard = ({
  id,
  title,
  skills,
  description,
  details,
  image,
  link,
  handleClose,
}: ExtendedCardProps) => {
  const { currentMode, currentColor } = useStateContext();
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Dialog.Root open={id} defaultOpen={id}>
        <Dialog.Portal>
          <Dialog.Overlay className="z-50 bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />
          <Dialog.Content
            style={{ boxShadow: `0 0 10px ${currentColor}` }}
            className="z-[9000] fixed drop-shadow-md border border-neutral-700 top-[50%]
      left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw]
      md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800
      p-[25px] focus:outline-none"
          >
            <Dialog.Title className="text-xl text-basic-white text-center font-bold mb-4">
              {title}
            </Dialog.Title>
            <Dialog.Description className="mb-5 text-basic-white text-sm leading-normal text-center">
              {description}
            </Dialog.Description>
            <div className="text-basic-white">THIS IS MODAL</div>
            <Dialog.Close asChild>
              <button
                onClick={handleClose}
                className="text-neutral-400 hover:text-white absolute
          top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center
          justify-center rounded-full focus:outline-none"
              >
                <IoMdClose />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </motion.div>
  );
};

export default ExtendedCard;
