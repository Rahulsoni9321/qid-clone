
const BusinessCard = ({imagelink,heading,description}:{
    imagelink?:string,
    heading:string,
    description:string
}) => {
  return (
    <div className="w-full rounded-[24px] p-6 px-7 bg-gradient-to-r from-[#1b1b1b] via-[#101010] to-[#070707]/60 font-abc border-[1px] border-gray-500/50 ">
        <div className="flex flex-col  ">
        <img className=" rounded-[20px]" src={imagelink}></img>
        <div className="text-2xl font-semibold leading-tight  text-white">{heading}</div>
        <div className="font-medium text-md tracking-wide text-gray-400/80 mt-3 ">{description}</div>
        </div>

    </div>
  )
}

export default BusinessCard
