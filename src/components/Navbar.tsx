import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [dropdown, setdropdown] = useState({
    appdropdown: false,
    cformdropdown: false,
    supportdropdown: false,
  });
  const [open, setopen] = useState(false);
  const [normal, setnormal] = useState({
    appactive: false,
    support: false,
    cform: false,
  });

  const dropdownstyle =
    "hover:cursor-pointer transform duration-150 bg-[#202020] border-b-[1px] border-black px-4 py-3";
  const dropdownstyleactive =
    "hover:cursor-pointer transform duration-150 bg-[#3f444b] border-b-[1px] border-black px-4 py-3";

  const handleclick = (name: string) => {
    if (name == "app") {
      setnormal({
        appactive: true,
        cform: false,
        support: false,
      });
    } else if (name == "support") {
      setnormal({
        appactive: false,
        cform: false,
        support: true,
      });
    } else if (name == "C-Form Pro") {
      setnormal({
        appactive: false,
        cform: true,
        support: false,
      });
    } else {
      setnormal({
        appactive: false,
        cform: false,
        support: false,
      });
      setdropdown({
        appdropdown: false,
        cformdropdown: false,
        supportdropdown: false,
      });
      if (open == true) setopen(!open);
    }
  };
  const dropdownhandleclick = (name: string) => {
    if (name == "app") {
      setdropdown({
        appdropdown: true,
        cformdropdown: false,
        supportdropdown: false,
      });
      setopen(!open);
    } else if (name == "support") {
      setdropdown({
        supportdropdown: true,
        appdropdown: false,
        cformdropdown: false,
      });
      setopen(!open);
    } else if (name == "C-Form Pro") {
      setdropdown({
        cformdropdown: true,
        appdropdown: false,
        supportdropdown: false,
      });
      setopen(!open);
    }
  };
  return (
    <div className="fixed  top-0 flex flex-col w-screen bg-black z-10 ">
      <div className=" flex md:max-w-7xl lg:mx-auto justify-between px-6 md:px-16 items-center border-b-[0.5px] border-stone-800 py-4 md:py-6 w-full ">
        <Link
          onClick={() => {
            handleclick("qid");
          }}
          to={"/"}
          className="text-gray-300 italic text-4xl font-semibold font-poppins"
        >
          qid
        </Link>
        <div className="text-stone-500 hidden  font-semibold text-md font-abc md:flex items-center justify-around px-8 gap-10">
          <Link
            to={"/app"}
            onClick={() => handleclick("app")}
            className={
              normal.appactive
                ? "text-gray-100"
                : "hover:cursor-pointer transform duration-150 hover:text-gray-100 "
            }
          >
            App
          </Link>
          <Link
            to={"/home/c-form-automation-for-hotels"}
            onClick={() => handleclick("C-Form Pro")}
            className={
              normal.cform
                ? "text-gray-100"
                : "hover:cursor-pointer transform duration-150 hover:text-gray-100 "
            }
          >
            C-Form Pro
          </Link>
          <Link
            to={"/support"}
            onClick={() => handleclick("support")}
            className={
              normal.support
                ? "text-gray-100"
                : "hover:cursor-pointer transform duration-150 hover:text-gray-100 "
            }
          >
            Contact
          </Link>
        </div>
        <div className="block md:hidden ">
          <div className="relative inline-block text-left ">
            <button
              onClick={() => setopen(!open)}
              className="w-full   text-gray-700  rounded inline-flex justify-between items-center "
            >
              {open ? (
                <ImCross className="w-8 h-6" />
              ) : (
                <RxHamburgerMenu className="w-12 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          open
            ? "fixed top-16  md:hidden  flex flex-col text-gray-100 font-abc font-bold text-md w-screen transform ease-in duration-110"
            : "hidden"
        }
      >
        <Link
          to={"/app"}
          onClick={() => {
            dropdownhandleclick("app");
          }}
          className={dropdown.appdropdown ? dropdownstyleactive : dropdownstyle}
        >
          App
        </Link>
        <Link
          to={"/home/c-form-automation-for-hotels"}
          onClick={() => dropdownhandleclick("C-Form Pro")}
          className={
            dropdown.cformdropdown ? dropdownstyleactive : dropdownstyle
          }
        >
          C-Form Pro
        </Link>
        <Link
          to={"/support"}
          onClick={() => dropdownhandleclick("support")}
          className={
            dropdown.supportdropdown ? dropdownstyleactive : dropdownstyle
          }
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
