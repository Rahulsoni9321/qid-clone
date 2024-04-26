
const BasicCard = ({classname,number,label,description}:{classname:string,number:string,label:string,description:string}) => {
  return (
    <div className={classname}>
       <div className='font-semibold text-5xl font-serif text-white/20'>{number}</div>
       <div className="text-4xl font-bold font-abc text-gray-100">{label}</div>
       <div className="text-md font-abc  font-normal leading-tight text-[#7a7773]">{description}</div>
    </div>
  )
}

export default BasicCard
