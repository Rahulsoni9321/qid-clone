import { useNavigate } from 'react-router-dom';
import MaxWidthWrapper from '../MaxWidthWrapper';
import BusinessCard from './BusinessCard';
import AnalyticsCard from './AnalyticsCard';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { AnalyticsCardContent, Businesscardcontent } from '../../config';


const Section5 = () => {
    const navigate = useNavigate();
  return (
    
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
  )
}

export default Section5
