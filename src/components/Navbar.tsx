import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [appactive, setappactive] = useState(false);
  const [support, setsupport] = useState(false);
  const [cform, setcform] = useState(false);

  const handleclick = (name: string) => {
    if (name == "app") {
      setappactive(true);
      setcform(false);
      setsupport(false);
    } else if (name == "support") {
      setappactive(false);
      setcform(false);
      setsupport(true);
    } else if (name=="C-Form Pro") {
      setappactive(false);
      setcform(true);
      setsupport(false);
    }
    else {
      setappactive(false);
      setcform(false);
      setsupport(false);
    }
  };

  return (
    <div className="fixed top-0 flex justify-between px-6 md:px-16 items-center bg-black  border-b-[0.5px] border-stone-800 py-2 md:py-6 w-full shadow-lg shadow-black/50">
      <Link
        onClick={()=>{handleclick("qid")}}
        to={"/"}
        className="text-gray-300 italic text-4xl font-semibold font-poppins"
      >
        qid
      </Link>
      <div className="text-stone-500 font-semibold text-md font-abc flex items-center justify-around px-8 gap-10">
        <Link
          to={"/app"}
          onClick={() => handleclick("app")}
          className={appactive ? "text-gray-100":"hover:cursor-pointer transform duration-150 hover:text-gray-100 "}
        >
          App
        </Link>
        <Link
          to={"/home/c-form-automation-for-hotels"}
          onClick={() => handleclick("C-Form Pro")}
          className={cform ? "text-gray-100":"hover:cursor-pointer transform duration-150 hover:text-gray-100 "}
        >
          C-Form Pro
        </Link>
        <Link
          to={"/support"}
          onClick={() => handleclick("support")}
          className={support ? "text-gray-100":"hover:cursor-pointer transform duration-150 hover:text-gray-100 "}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};



export default Navbar;
