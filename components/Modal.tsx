import { useStateContext } from "@/contexts/ContextProvider";
import { github as Icon } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { IconType } from "react-icons";
import { BsPlayCircle } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  id: string;
  title: string;
  skills: Array<IconType>;
  description: string;
  details: Array<string>;
  image: string;
  link: string;
  demo?: string;
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

const Modal = ({
  id,
  title,
  skills,
  description,
  details,
  image,
  link,
  demo,
  handleClose,
}: ModalProps) => {
  const { currentColor } = useStateContext();

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
      className="z-[9000] fixed top-0 left-0 w-full h-full flex justify-center items-center  bg-neutral-900/90 backdrop-blur-sm "
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div
          style={{ boxShadow: `0 0 10px ${currentColor}` }}
          className="z-[9000] fixed drop-shadow-md border border-neutral-700 top-[50%]
              left-[50%] h-[90vh] w-[90vw]  sm:h-auto md:max-h-[90vh] sm:w-[90vw]
              sm:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800
              p-[25px] focus:outline-none overflow-y-auto no-scrollbar"
        >
          <img className="w-full h-[30vh]" src={image} alt={title} />
          <div className="flex mt-4 mb-6 flex-row gap-3">
            {skills.map((Skill: any) => (
              <Skill className="text-gray-400" size={30} />
            ))}
          </div>
          <div className="flex flex-col">
            <h1 className="text-left font-bold">{title}</h1>
            <p
              className="text-basic-white sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px]
              leading-[18px] tracking-[1px]"
            >
              {description}
            </p>
            <ul className="ml-8 my-4 capitalize font-extralight text-gray-300">
              {details.map((detail) => (
                <li className="mb-1">
                  <span style={{ color: currentColor }} className="font-bold">
                    {"<"}
                  </span>
                  {detail}
                  <span style={{ color: currentColor }} className="font-bold">
                    {" />"}
                  </span>
                </li>
              ))}
            </ul>
            {demo ? (
              <div className="flex justify-between  items-center sm:mt-[22px] mt-[16px]">
                <Link href={demo} target="_blank" className="">
                  <button
                    style={{ backgroundColor: currentColor }}
                    className="flex justify-between sm:text-[16px] text-[14px] text-basic-white font-bold
                          items-center py-5 pl-2 pr-3 whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] w-[125px] h-[46px]
                          rounded-[10px]  hover:opacity-70 hover:uppercase hover:scale-110 transition duration-300
                          ease-in shadow-custom"
                  >
                    <BsPlayCircle
                      className="sm:w-[34px] sm:h-[34px]
                              w-[30px] h-[30px] animate-ping-slow object-contain"
                    />
                    <h1>Live Demo</h1>
                  </button>
                </Link>
                <div className="">
                  <div
                    className="bg-dark sm:w-11 sm:h-11 w-10 h-10 rounded-full flex justify-center items-center
                  cursor-pointer hover:scale-110 sm:opacity-[0.9] opacity-[0.8] transition duration-300
                  ease-in shadow-custom"
                  >
                    <Link className="w-4/5 h-4/5" href={link} target="_blank">
                      <Icon size={35} />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <button
                style={{ backgroundColor: currentColor }}
                className="flex justify-between sm:text-[16px] text-[14px] text-basic-white font-bold
                        items-center py-5 pl-2 pr-3 whitespace-nowrap gap-1 sm:w-[160px] sm:h-[50px] w-[150px] h-[46px]
                        rounded-[10px] sm:mt-[22px] mt-[16px] hover:opacity-70 hover:uppercase hover:scale-110 transition duration-300
                        ease-in shadow-custom"
              >
                <Icon
                  className="sm:w-[34px] sm:h-[34px]
                            w-[30px] h-[30px] object-contain"
                />
                <Link href={link} target="_blank" className="">
                  Source code
                </Link>
              </button>
            )}
          </div>
          <button
            onClick={handleClose}
            className="text-neutral-400 hover:text-white absolute
          top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center
          justify-center rounded-full focus:outline-none"
          >
            <IoMdClose />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
