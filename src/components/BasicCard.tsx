
const BasicCard = ({classname,number,label,description}:{classname:string,number:string,label:string,description:string}) => {
  return (
    <div className={classname}>
       <div className='hidden md:block font-semibold text-5xl font-serif text-white/20'>{number}</div>
       <div className=" text-xl md:text-4xl font-bold font-abc text-gray-100">{label}</div>
       <div className="hidden md:block text-md font-abc  font-normal leading-tight text-[#7a7773]">{description}</div>
    </div>
  )
}

export default BasicCard
