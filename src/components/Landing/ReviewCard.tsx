const ReviewCard = ({
  imagelink,
  review,
  name,
  designation,
  place
}: {
  imagelink: string;
  review: string;
  name: string;
  designation: string;
  place?:string 
}) => {

        return (
            <div className="bg-[#050505] rounded-[24px] border-[1px]  p-4 px-2 mx-1 border-gray-600/20 text-white font-abc">
              <div className=" p-5 flex flex-col  gap-8">
                <img className="object-cover w-24 h-24 md:w-24 md:h-24 rounded-full" src={imagelink}></img>
        
                <div className="text-[#eeeeee] font-semibold leading-normal text-xl w-11/12  ">{review}</div>
                <div className="flex flex-col ">
                <div className="text-[#707070] font-bold text-xl">{name}</div>
                <div className="text-[#636363] text-lg font-medium">{designation}</div>
              <div className="text-[#636363] text-md font-medium flex-grow">{place}</div>
                </div>
              </div>
            </div>
          );
    
  
};

export default ReviewCard;
