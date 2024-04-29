import MaxWidthWrapper from "../MaxWidthWrapper";

const Section3 = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex gap-5 py-4  md:gap-6 max-w-7xl lg:mx-auto  md:px-4 font-abc">
        <div className="w-[192px] fit-content flex flex-col items-center">

            
          <div className="w-[5px] h-1/4 bg-gradient-to-b from-[#162012] to-[#93fb70]"></div>
          <div className="w-full">
          <img className="w-full" src="/line-support.png"></img>
          </div>
          <div className="w-[5px] h-1/2 bg-gradient-to-b from-[#91f76c] via-[#52800b] to-[#c65b22]"></div>
          <div className="w-full">
          <img className="w-full" src="/line-support.png"></img>
          </div>
          <div className="w-[5px] h-1/2 bg-gradient-to-b from-[#c55522] to-[#1d100a]"></div>

            
        </div>
        <div className="flex font-abc flex-col gap-32 py-8 md:py-20 ">
          <div className=" flex flex-col gap-4 leading-tight">
            <div className="first text-4xl md:text-[40px] w-10/12 md:w-2/5 text-[#b5b5b5] font-bold">
              Your true identity,
              <span className="bg-clip-text z-10 text-transparent bg-gradient-to-r from-[#9cff9f] to-[#5af84a]">
                {" "}
                managed{" "}
              </span>
              with ease.
            </div>
            <div className="text-[#747373] font-semibold tracking-wide md:tracking-tight md:leading-tight text-lg md:text-2xl">
              With qid, managing your IDs has never been easier. You can store
              and access all your IDs in one place, share them securely with
              others, and even get them verified with just a few clicks. Say
              goodbye to the hassle of carrying physical IDs or struggling with
              tedious verification processes, and hello to the convenience and
              simplicity of qid.
            </div>
          </div>

          <div className="flex font-abc flex-col gap-3 md:gap-6">
            <div className="second text-4xl md:text-[40px] w-11/12 md:w-1/2 tracking-tight text-[#b5b5b5] font-bold">
              <span className="bg-clip-text  text-transparent bg-gradient-to-r from-[#eb6b15] to-[#c08257]">
                {" "}
                Share{" "}
              </span>{" "}
              your identity with ease, qid has got you covered!
            </div>
            <div className="text-[#747373] font-semibold tracking-wide md:tracking-tight md:leading-tight text-lg md:text-2xl">
              Sharing IDs with qid is simple and convenient. Just add the ID to
              your qid profile and share it with anyone, anytime, anywhere. No
              need to carry physical IDs or worry about losing them.
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Section3;
