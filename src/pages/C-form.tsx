import Cformcard from "../components/Cform/Cformcard";
import Cformfinalcard from "../components/Cform/Cformfinalcard";
import Footer from "../components/Footer";
import { CFormcontent } from "../config";
import Section1 from "../components/Cform/Section1";
import Section3 from "../components/Cform/Section3";

const Cform = () => {
  return (
    <>
      <div className="min-w-screen font-abc  bg-[url(https://oneqid.com/wp-content/uploads/2023/09/grid-for-video.png)] bg-contain bg-center">
        <div className="w-full  bg-black/80 ">
          <Section1></Section1>
          <div className="text-white/80 max-w-7xl lg:mx-auto font-bold text-5xl md:text-7xl md:w-11/12 py-12 px-8 md:px-8  ">
            Trust us, it's truly a matter of just <span className="bg-clip-text z-10 text-transparent bg-gradient-to-r from-[#ffaf07] to-[#ff8526]">one click.</span>
          </div>
          <div className="px-6 md:px-16 max-w-7xl lg:mx-auto font-abc font-semibold   text-white text-[32px] leading-tight pb-12  md:py-20 grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-0 md:gap-x-4 ">
            {CFormcontent.map((content, index) => {
              return <Cformcard key={index} content={content}></Cformcard>;
            })}
          </div>
          <Section3></Section3>
          <Cformfinalcard></Cformfinalcard>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Cform;
