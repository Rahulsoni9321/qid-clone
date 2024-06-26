import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Downloadapp = () => {
  return (
    <div className="min-w-screen  flex flex-col items-center">
      <div className="w-full pb-8 px-3 pt-32 md:pt-28 md:px-4 max-w-6xl flex flex-col gap-x-3 md:grid md:grid-cols-2 md:place-items-center items-center justify-center">
        <div className=" flex-grow flex flex-col gap-8">
          <div className="text-4xl  md:text-6xl font-abc font-extrabold text-black tracking-tight">
            Get the qid App
          </div>
          <div className="flex md:flex-row flex-col items-center justify-between gap-2">
            <div className="w-full md:w-3/5 flex flex-col gap-3 py-4 md:px-3">
              {DownloadButton.map((button,index)=>{
                return <DownloadButtonComponent key={index} src={button.src} to={button.to} classname={button.classname}></DownloadButtonComponent>
              })}
            </div>
            <div className="w-full md:w-2/5">
              <img src="\qr-code-5-2.png"></img>
            </div>
          </div>
        </div>
        <div className="w-full flex-grow ">
          <img className="w-full h-full" src="\Asset-16.png"></img>
        </div>
      </div>
      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};

const DownloadButton=[{
  to:"https://apps.apple.com/us/app/qid-quick-id/id1629041779",
  src:"/apple-download-2-1024x312.png",
  classname:"w-full mb-1 hover:cursor-pointer"
},
{
  to:"https://play.google.com/store/apps/details?id=com.quickids.digilocker.qid",
  src:"/gplay-diwn-2-1024x312.png",
  classname:"w-full mb-1 hover:cursor-pointer"
}]

export function DownloadButtonComponent({classname,to,src}:{classname:string,to:string,src:string}) {
  return   <Link
  to={to}
>
  {" "}
  <img
    className={classname}
    src={src}
  ></img>{" "}
</Link>
}

export default Downloadapp;
