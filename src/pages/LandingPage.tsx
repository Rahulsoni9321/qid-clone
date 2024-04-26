import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import HeroSection from "../components/HeroSection";
import BasicCard from "../components/BasicCard";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeroSection></HeroSection>
      <MaxWidthWrapper>
        <div className="flex md:flex-row flex-col justify-around items-center font-abc pt-24 px-4 md:px-12">
          <div className="flex flex-col gap-8 justify-between text-start">
            <div className="text-5xl text-start  md:text-7xl tracking-wide  max-w-lg md:font-bold font-bold text-white">
              <span className="bg-clip-text z-10 text-transparent bg-gradient-to-r from-[#ffb055] to-[#ff7e03]">
                Secure
              </span>
              , easy, and always with you.
            </div>
            <div className="text-left">
              <button
                onClick={() => {
                  navigate("/app");
                }}
                className="text-lg px-10 py-4 font-bold font-abc bg-white rounded-full text-black flex items-center gap-2"
              >
                Create free account{" "}
                <IoIosArrowDroprightCircle></IoIosArrowDroprightCircle>
              </button>
            </div>
          </div>
          <img
            className="w-full md:w-1/2 pt-16"
            src="\fsgdh43_2-e1684067541108.png"
          ></img>
        </div>
        <div className="flex md:flex-row flex-col justify-between  md:px-10 gap-8">
          <div className="font-abc font-bold text-3xl md:text-6xl text-gray-200 md:max-w-md">Two Base elements of Identity ecosystem</div>
          <div className="flex order-first md:-order-first  justify-center text-center md:justify-end gap-12 md:gap-12 w-full  ">

          <BasicCard label={cardcontent[0].label} number={cardcontent[0].number} description={cardcontent[0].description} classname='md:rounded-[28px] rounded-[18px] flex flex-col  md:text-start text-center gap-5 p-4  md:py-6 md:-mt-16 -mt-10 h-fit w-1/2 md:w-3/5   border-[1px] border-[#3a4239] bg-[#121e13]'></BasicCard>
          <BasicCard label={cardcontent[1].label} number={cardcontent[1].number} description={cardcontent[1].description}  classname='md:rounded-[28px] rounded-[18px] flex flex-col md:text-start text-center gap-6 p-4 h-fit md:pb-7 md:py-6 md:-mt-8 -mt-6  w-1/2 md:w-3/5 border-[1px] border-[#3a4239] bg-[#1a1407]/60  '></BasicCard>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="min-w-screen bg-[url(http://oneqid.com/wp-content/uploads/2023/05/qd-ffvc-2-sdf.png)] flex flex-col items-center h-screen   bg-cover md:bg-cover bg-center gap-3 pt-8 md:pt-28">
        <div className="text-[41px]  md:text-7xl tracking-wide font-bold md:font-bold text-white font-abc">
          <span className="italic font-extrabold font-poppins">qid</span> for{" "}
          <span className="bg-clip-text z-10 text-transparent bg-gradient-to-r from-neutral-400  to-white">
            business
          </span>
        </div>
        <div className="text-white font-bold text-2xl  w-9/12 text-center md:text-3xl font-abc ">
          manage all your IDs with one QR
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};


const cardcontent=[{
  label:"Manage",
  number:"1",
  description:"Consolidate all your IDs securely in one place with qid, making them easily accessible whenever you need them"
},{
  label:"Sharing",
  number:"2",
  description:"Experience lightening-fast and trackable ID sharing with qid, ensuring seamless and efficient communication"
},]

export default LandingPage;
