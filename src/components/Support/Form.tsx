import { ReactNode } from "react";

const Form = () => {
  return (<div className="col-span-1 w-full px-1 py-6 md:pt-24">
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
  
  )
}

function InputBox({ classname, children }: { classname: string; children: ReactNode }) {
    return (
      <div className="my-2.5">
        <label className="font-abc text-white/70">{children}</label>
        <input className={classname}></input>
      </div>
    );
  }


export default Form
