import { useStateContext } from "@/contexts/ContextProvider";
import { skills } from "@/constants";

const Skills = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className=" my-10 grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
        {skills.map(({ id, name, source }) => (
          <div
            key={id}
            style={{ boxShadow: `0 0 10px ${currentColor}` }}
            className="col-span-1 p-4 gap-5 mx-2 sm:mx-6 my-2 flex flex-col items-center
             rounded-md dark:bg-dark bg-[#f7f7f7] hover:scale-125 ease-out duration-300
             hover:z-10"
          >
            <div>
              <img src={source} alt={name} className="w-16 sm:w-20" />
            </div>
            <h2 className="text-sm sm:text-base text-gray-400 font-medium uppercase">
              {name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
