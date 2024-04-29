
const AnalyticsCard = ({heading,description,imagelink}:{
    heading:string,
    description:string,
    imagelink?:string
}) => {
  return (
    <div className="w-full rounded-[36px] p-4 px-7 bg-gradient-to-r h-full  from-[#1b1b1b] via-[#101010] to-black/20 font-abc border-[1px] border-gray-500/50 ">
      <div className="flex flex-col gap-3 p-1 px-2">
        <div className="text-white font-bold text-2xl">{heading}</div>
        <img className="rounded-[28px]" src={imagelink}></img>
        <div className="text-md text-gray-400 font-medium">
         {description}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
