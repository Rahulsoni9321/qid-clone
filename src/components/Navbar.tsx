import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [open,setopen]=useState(false)
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
    <div className="fixed z-10 top-0 flex justify-between px-6 md:px-16 items-center bg-black  border-b-[0.5px] border-stone-800 py-4 md:py-6 w-full shadow-lg shadow-black/50">
      <Link
        onClick={()=>{handleclick("qid")}}
        to={"/"}
        className="text-gray-300 italic text-4xl font-semibold font-poppins"
      >
        qid
      </Link>
      <div className="text-stone-500 hidden  font-semibold text-md font-abc md:flex items-center justify-around px-8 gap-10">
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
      <div className="block md:hidden">
      
<script src="//unpkg.com/alpinejs" defer></script>


<div onClick={()=>setopen(!open)} className="relative inline-block text-left " x-data="{ open: false }">
  <button  className="w-full bg-white border border-gray-200 text-gray-700  rounded inline-flex justify-between items-center dark:bg-[#20293A] dark:border-slate-700 dark:text-gray-400">
    <RxHamburgerMenu/>
    
  </button>

  {/* {open ? <div x-show="open" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100" x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95" className="absolute z-50 mt-2 w-screen rounded-md   shadow-lg bg-white border border-gray-200 dark:bg-[#20293A] dark:border-slate-700">
    <div className="py-1 text-gray-700 dark:text-gray-400 text-sm w-sreen" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <a href="#" className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-[#161d2a]" role="menuitem">Option 1</a>
      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#161d2a]" role="menuitem">Option 2</a>
      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#161d2a]" role="menuitem">Option 3</a>
    </div>
  </div>:<></>} */}
  </div>
  </div>
  </div>
  );
};



export default Navbar;
