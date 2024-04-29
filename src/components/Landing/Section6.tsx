import MaxWidthWrapper from "../MaxWidthWrapper"
import { Slick1, Slick2 } from "./Slick"

const Section6 = () => {
  return (
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
  )
}

export default Section6
