import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='min-w-screen min-h-screen bg-black flex flex-col gap-12 py-12 px-8 md:px-16 font-abc border-t-[1px] border-gray-500'>
      <div className='flex flex-col md:flex-row  md:justify-between items-start md:items-center gap-16 px-6  '>
        <div className='flex-grow font-bold italic font-poppins text-white/70 text-6xl '>qid</div>
        <Functionalites label='Download App' features={DownloadApp}></Functionalites>
        <Functionalites label='Legal' features={Legal}></Functionalites>
      </div>
      <div className='flex md:flex-row flex-col  items-center gap-4 md:justify-between border-t-[0.5px] border-gray-300 py-8'>
        <div className='text-white font-bold text-sm md:text-xl md:order-first'>Oneqid Technologies Private Limited</div>
        <Link to={"https://www.linkedin.com/company/oneqid/"} target='_blank' className='order-first md:-order-first w-8 h-8 bg-white rounded-full flex items-center justify-center'><FaLinkedin></FaLinkedin></Link>
      </div>
    </div>
  )
}

const DownloadApp=["Android","iOS","C-Form Pro Plugin","Book a Demo"]
const Legal=["Privacy Policy","Terms of Use","Cancellation and Refund Policy","Shipping and Return Policy"]


function Functionalites({features,label}:{features:string[],label:string}) {
    return  <div className='flex flex-col gap-6  md:pt-[76px]'>
    <div className='text-2xl text-white font-semibold mb-2'>{label}</div>
    {features.map((feature)=>{
            return <div className='text-md font-medium text-gray-300/80 hover:cursor-pointer transform duration-150 hover:text-gray-100'>{feature}</div>
        })
    }
</div>
}
export default Footer
