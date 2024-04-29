import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const Pitch = () => {
  return (
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
  )
}

export default Pitch
