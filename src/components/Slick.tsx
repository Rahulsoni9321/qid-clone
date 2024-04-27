
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewCardDetails } from "../config";
import ReviewCard from "./ReviewCard";

export const Slick1 = () => {
  

  var settings:Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:6000,
    
  };
  return (
    <Slider {...settings} className="cursor-grab">
      
      {ReviewCardDetails.map((details)=>{
          if (details.place)
           return <ReviewCard imagelink={details.imagelink} name={details.name} review={details.review} designation={details.designation} place={details.place}></ReviewCard>
           else
           return <ReviewCard imagelink={details.imagelink} name={details.name} review={details.review} designation={details.designation} ></ReviewCard>
      })}
   
    </Slider>
  );
}




export const Slick2 = () => {
  

  var settings:Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:6000,
    
  };
  return (
    <Slider {...settings} className="cursor-grab focus:cursor-grabbing">
      
      {ReviewCardDetails.map((details)=>{
          if (details.place)
           return <ReviewCard imagelink={details.imagelink} name={details.name} review={details.review} designation={details.designation} place={details.place}></ReviewCard>
           else
           return <ReviewCard imagelink={details.imagelink} name={details.name} review={details.review} designation={details.designation} ></ReviewCard>
      })}
   
    </Slider>
  );
}


