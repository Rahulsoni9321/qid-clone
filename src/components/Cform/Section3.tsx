import { Link } from 'react-router-dom'
import { FaChrome } from "react-icons/fa6";


const Section3 = () => {
  return (
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
  )
}

export default Section3
