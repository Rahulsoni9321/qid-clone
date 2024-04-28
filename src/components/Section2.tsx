import { useNavigate } from "react-router-dom";
import BasicCard from "./BasicCard";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { cardcontent } from "../config";


const Section2 = () => {
    const navigate = useNavigate();
    
  return (
    <MaxWidthWrapper>
    <div className="flex md:flex-row flex-col max-w-7xl lg:mx-auto justify-around items-center font-abc pt-20 px-4 md:px-12">
      <div className="flex flex-col gap-8 md:-mt-24 justify-between text-start">
        <div className="text-5xl text-start  md:text-7xl tracking-wide  max-w-lg md:font-bold font-bold text-white">
          <span className="bg-clip-text z-10 text-transparent bg-gradient-to-r from-[#ffb057] to-[#ff820e]">
            Secure
          </span>
          , easy, and always with you.
        </div>
        <div className="text-left">
          <button
            onClick={() => {
              navigate("/app");
            }}
            className="text-lg px-6 md:px-10 py-4 font-bold font-abc bg-white rounded-full text-black flex items-center gap-2"
          >
            Create free account{" "}
            <IoIosArrowDroprightCircle></IoIosArrowDroprightCircle>
          </button>
        </div>
      </div>
      <img
        className="w-full md:w-1/2 pt-8 md:pt-4"
        src="\fsgdh43_2-e1684067541108.png"
      ></img>
    </div>
    <div className="flex md:flex-row max-w-7xl lg:mx-auto flex-col justify-between  md:px-10 gap-8">
      <div className="font-abc font-bold text-3xl md:text-5xl lg:text-6xl text-gray-200 md:max-w-md">
        Two Base elements of Identity ecosystem
      </div>
      <div className="flex order-first md:-order-first  justify-center text-center md:justify-end gap-10 md:gap-10 w-full  ">
        
        <BasicCard
        
          label={cardcontent[0].label}
          number={cardcontent[0].number}
          description={cardcontent[0].description}
          classname="boxshadowlanding1 md:rounded-[28px] rounded-[18px] flex flex-col  md:text-start text-center gap-5 p-4  md:py-6 md:-mt-16 -mt-10 h-fit w-1/2 md:w-3/5   border-[1px] border-[#3a4239] bg-[#121e13]"
        ></BasicCard>
        <BasicCard
          label={cardcontent[1].label}
          number={cardcontent[1].number}
          description={cardcontent[1].description}
          classname="boxshadowlanding2 md:rounded-[28px] rounded-[18px]  flex flex-col md:text-start text-center gap-6 p-4 h-fit md:pb-7 md:py-6 md:-mt-8 -mt-6  w-1/2 md:w-3/5 border-[1px] border-[#3a4239] bg-[#1a1407]/60  "
        ></BasicCard>
      </div>
    </div>
  
  </MaxWidthWrapper>
  )
}

export default Section2
