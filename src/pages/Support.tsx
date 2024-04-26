import  { ReactNode } from "react";
import Footer from "../components/Footer";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Support = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="min-h-screen min-w-screen grid grid-cols-1 md:grid-cols-2 place-items-center md:gap-x-8   md:px-16 font-abc text-white">
          <div className="col-span-1 flex flex-col gap-6 pt-32 w-11/12">
            <div className="text-5xl md:text-7xl text-white font-semibold">Contact Us</div>
            <div className="text-2xl text-stone-300/90 leading-tight font-semibold">
              Discover Qid – Your Partner in Secure Identity Management
            </div>
            <div className="font-semibold text-gray-100 text-lg flex gap-2 items-center ">
              <MdOutlineMail className="w-7 h-7" />
              contact@oneqid.com
            </div>
            <div className="font-semibold text-gray-100 flex gap-2 text-lg items-center font-abc">
              <FaPhoneAlt className="w-5 h-6" />
              <div className="font-abc">+91 960 950 849 0</div>
            </div>
            <hr className="md:px-44 my-2 w-3/4"></hr>
            <div className="text-blue-400 font-semibold  tracking-wide text-3xl md:text-3xl">
              Trusted by 25,000+ Users
            </div>
          </div>
          <div className="col-span-1 w-full px-1 py-6 md:pt-24">
            <div className="rounded-[24px] w-full md:w-11/12 bg-black/60 p-6 md:p-10 border-[1px] border-stone-500  gap-3 ">
              <InputBox
                classname="border-b-[1px] border-stone-500 bg-transparent w-full   py-2 outline-none"
              >Name <span className="text-red-500">*</span></InputBox>
              <div className="flex flex-col md:flex-row gap-3 w-full">
                <InputBox
                  classname="border-b-[1px] border-stone-500 bg-transparent w-full md:w-11/12 outline-none p-3"
                >Phone Number </InputBox>
                <InputBox
                 
                  classname="border-b-[1px] border-stone-500 bg-transparent w-full outline-none   p-3"
                >Email <span className="text-red-500">*</span></InputBox>
              </div>
              <InputBox
                classname="border-b-[1px] border-stone-500 bg-transparent w-full  outline-none  p-3"
              >Message <span className="text-red-500">*</span></InputBox>
              <div className="flex md:flex-row flex-col  md:justify-end">

              <button className="bg-white px-10 py-4  text-black font-semibold rounded-full my-4 hover:bg-blue-400 hover:text-white">submit</button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <Footer></Footer>
    </>
  );
};

function InputBox({ classname, children }: { classname: string; children: ReactNode }) {
  return (
    <div className="my-2.5">
      <label className="font-abc text-white/70">{children}</label>
      <input className={classname}></input>
    </div>
  );
}
export default Support;
