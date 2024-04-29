import { FaChrome } from "react-icons/fa6";

const Section1 = () => {
  return (
    <>
      <div className="pt-36 px-7 md:pl-16 max-w-7xl lg:mx-auto">
        <div className="text-[#e9e7e7] font-bold text-6xl md:text-7xl ">
          <span className="bg-clip-text z-10 text-transparent bg-gradient-to-r from-[#ffaf06] to-[#ff8129]">
            C-Form{" "}
          </span>{" "}
          Automation
        </div>
        <div className="text-[#cacaca] w-10/12 md:w-full font-semibold text-3xl tracking-tight mt-4">
          Say Goodbye to Manual C-Forms
        </div>
        <div className="md:flex md:flex-row  gap-6 mt-8">
          <button
            onClick={() => {}}
            className="text-lg px-10 py-4 font-bold font-abc bg-white rounded-full text-black flex items-center gap-2"
          >
            Book a Demo
          </button>
          <button
            onClick={() => {}}
            className="text-lg px-6 my-6 md:my-0 md:px-10 py-4 font-bold font-abc bg-black/80 rounded-full text-white  border-[1px] border-gray-400 flex items-center gap-2"
          >
            <FaChrome></FaChrome> Get Chrome Extension
          </button>
        </div>
      </div>
      <div className=" md:-mt-16 pl-6 md:pl-16 2xl:w-screen">
        <img
          className="hidden md:block object-contain w-full"
          src="/Asset-4-2048x1082.png"
        ></img>
        <img className="block md:hidden" src="/c-form-long-1222x2048.png"></img>
      </div>
    </>
  );
};

export default Section1;
