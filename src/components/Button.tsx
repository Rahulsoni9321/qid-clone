import {  useNavigate } from "react-router-dom"

const Button = ({children}:{children:string}) => {
  const navigate=useNavigate();

  return (
    <button onClick={()=>{navigate("/app")}} className="text-lg px-12 py-4 font-bold font-abc bg-white rounded-full text-black"> {children}</button>

  )
}

export default Button
