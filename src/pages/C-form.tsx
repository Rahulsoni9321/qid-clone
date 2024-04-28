import { Link } from "react-router-dom";
import Cformcard from "../components/Cformcard";
import Cformfinalcard from "../components/Cformfinalcard";
import Footer from "../components/Footer";
import { CFormcontent } from "../config";
import { FaChrome } from "react-icons/fa6";

const Cform = () => {
  return (
    <>
      <div className="min-w-screen font-abc  bg-[url(https://oneqid.com/wp-content/uploads/2023/09/grid-for-video.png)] bg-contain bg-center">
        <div className="w-full  bg-black/80 ">
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
            <img className="hidden md:block object-contain w-full" src="/Asset-4-2048x1082.png"></img>
            <img className="block md:hidden" src="/c-form-long-1222x2048.png"></img>
          </div>
          <div className="text-white/80 max-w-7xl lg:mx-auto font-bold text-5xl md:text-7xl md:w-11/12 py-12 px-8 md:px-8  ">
            Trust us, it's truly a matter of just <span className="bg-clip-text z-10 text-transparent bg-gradient-to-r from-[#ffaf07] to-[#ff8526]">one click.</span>
          </div>
          <div></div>
          <div className="px-6 md:px-16 max-w-7xl lg:mx-auto font-abc font-semibold   text-white text-[32px] leading-tight pb-12  md:py-20 grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-0 md:gap-x-4 ">
            {CFormcontent.map((content, index) => {
              return <Cformcard key={index} content={content}></Cformcard>;
            })}
          </div>
          <div className="md:h-screen overflow-y-hidden font-abc lg:mx-auto max-w-7xl flex md:flex-row flex-col items-center md:justify-between md:pl-16  gap-12 text-white">
            <div className="md:w-3/5 px-4 md:pl-2">
              <div className="font-semibold text-4xl md:text-5xl text-[#ffffff]  ">
                Elevate C-Form Processing with qid's State-of-the-Art Chrome
                Extension
              </div>
              <div className="font-medium leading-tight text-[22px] my-6 w-11/12 text-[#bdbcbc]">
                Simplify C-Form management like never before with qid’s
                revolutionary Chrome extension.
              </div>
             <Link to={ "https://chromewebstore.google.com/detail/qid-c-form-pro/afghjacdcfhoikcccemlchhmokfgobpj"}> <button
                onClick={() => {}}
                className="text-lg px-7 py-4 font-bold font-abc bg-white rounded-full text-black  border-[1px] border-gray-400 flex items-center gap-2"
              >
                <FaChrome></FaChrome> Get Chrome Extension 
              </button></Link>
            </div>
            <div className="order-first px-4 md:-order-first md:w-2/5">
              <img
                className=" rounded-[24px] transform skew-y-6 md:scale-110 translate-y-4 -skew-x-6 w-11/12 md:w-9/12 "
                src="/Screenshot-2023-07-27-at-12.23.51-PM.png"
              ></img>
            </div>
          </div>
          <Cformfinalcard></Cformfinalcard>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Cform;
