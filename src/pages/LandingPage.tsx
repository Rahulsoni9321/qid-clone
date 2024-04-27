import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import HeroSection from "../components/HeroSection";
import BasicCard from "../components/BasicCard";
import BusinessCard from "../components/BusinessCard";
import AnalyticsCard from "../components/AnalyticsCard";
import {Slick1} from "../components/Slick";
import {Slick2 }from "../components/Slick";
import Section3 from "../components/Section3";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeroSection></HeroSection>
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
              classname="md:rounded-[28px] rounded-[18px] flex flex-col  md:text-start text-center gap-5 p-4  md:py-6 md:-mt-16 -mt-10 h-fit w-1/2 md:w-3/5   border-[1px] border-[#3a4239] bg-[#121e13]"
            ></BasicCard>
            <BasicCard
              label={cardcontent[1].label}
              number={cardcontent[1].number}
              description={cardcontent[1].description}
              classname="md:rounded-[28px] rounded-[18px] flex flex-col md:text-start text-center gap-6 p-4 h-fit md:pb-7 md:py-6 md:-mt-8 -mt-6  w-1/2 md:w-3/5 border-[1px] border-[#3a4239] bg-[#1a1407]/60  "
            ></BasicCard>
          </div>
        </div>
      
      </MaxWidthWrapper>
      <Section3></Section3>
      <div className="min-w-screen bg-[url(http://oneqid.com/wp-content/uploads/2023/05/qd-ffvc-2-sdf.png)] flex flex-col items-center h-screen   bg-cover md:bg-cover bg-center gap-3 pt-2 md:pt-8">
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
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row gap-4 w-full md:justify-center max-w-7xl lg:mx-auto md:px-6 py-6 md:py-3 ">
          <div className="w-full md:w-1/4 grid grid-row-2 gap-y-4">
            <BusinessCard
              imagelink="\qr-code-12.png"
              heading={Businesscardcontent[0].heading}
              description={Businesscardcontent[0].description}
            ></BusinessCard>
            <BusinessCard
              heading={Businesscardcontent[1].heading}
              description={Businesscardcontent[1].description}
            ></BusinessCard>
          </div>
          <div className="w-full md:w-3/4 grid  grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-y-8  ">
            <div className="w-full col-span-1 md:col-span-2">
              <AnalyticsCard
                imagelink="\Asset-7.png"
                heading={AnalyticsCardContent[0].heading}
                description={AnalyticsCardContent[0].description}
              ></AnalyticsCard>
            </div>
            <div className="col-sapn-1 ">
              <AnalyticsCard
                heading={AnalyticsCardContent[1].heading}
                description={AnalyticsCardContent[1].description}
              ></AnalyticsCard>
            </div>
            <div className="col-sapn-1 ">
              <AnalyticsCard
                heading={AnalyticsCardContent[2].heading}
                description={AnalyticsCardContent[2].description}
              ></AnalyticsCard>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-5 pb-16">
          <button
            onClick={() => {
              navigate("/app");
            }}
            className="text-lg px-7 md:px-10 py-4  font-bold font-abc bg-white rounded-full text-black flex items-center gap-3 md:gap-2"
          >
            Create Business account{" "}
            <IoIosArrowDroprightCircle></IoIosArrowDroprightCircle>
          </button>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="w-full md:px-16 max-w-7xl lg:mx-auto">
          <div className="pt-16 text-6xl text-center font-abc font-bold text-white ">
            <span className="bg-clip-text z-10 text-transparent bg-gradient-to-r from-[#ffb055] to-[#ff7e03]">
              Identified
            </span>{" "}
            by <span className="italic font-extrabold font-poppins">qid</span>
          </div>
          <div className="text-xl font-semibold tracking-wide md:text-2xl py-4 leading-normal md:py-3 font-abc text-gray-100 md:font-semibold text-center">
            Let’s dive into the real stories of how our service has touched the
            lives of our customers.
          </div>
          <div className="pt-8 hidden lg:block  h-full pb-16">
            <Slick1></Slick1>
          </div>
          <div className="pt-8  block lg:hidden h-full pb-16">
            <Slick2></Slick2>
          </div>
        </div>
      </MaxWidthWrapper>
      <Footer></Footer>
    </>
  );
};

const cardcontent = [
  {
    label: "Manage",
    number: "1",
    description:
      "Consolidate all your IDs securely in one place with qid, making them easily accessible whenever you need them",
  },
  {
    label: "Sharing",
    number: "2",
    description:
      "Experience lightening-fast and trackable ID sharing with qid, ensuring seamless and efficient communication",
  },
];

const AnalyticsCardContent = [
  {
    heading: "Business Analytics",
    description:
      "Unlock the power of data with qid – your ultimate tool for comprehensive business analytics.",
  },
  {
    heading: "Developer APIs",
    description:
      "Supercharge your applications with qid’s robust developer APIs, enabling you to effortlessly leverage the full potential of our platform and create unique, personalized experiences for your users.",
  },
  {
    heading: "One-Click C-Form",
    description:
      "Simplify C-Form filling with qid’s 1-Click solution, automating the process and saving you time while ensuring compliance.",
  },
];

const Businesscardcontent = [
  {
    heading: "Collect IDs with QR",
    description: "Easy to setup QR code stand",
  },
  {
    heading: "Customized Interface",
    description:
      "Tailor qid’s interface to perfectly align with your brand, creating a seamless and personalized user experience.",
  },
];
export default LandingPage;
