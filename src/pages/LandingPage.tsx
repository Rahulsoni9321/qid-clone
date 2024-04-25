import Button from "../components/Button";
import Footer from "../components/Footer";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <>
      <div className="min-w-screen bg-[url(https://oneqid.com/wp-content/uploads/2023/09/fgh-bg-1.png)] bg-cover bg-center flex flex-col justify-around px-8 text-center py-28  h-screen items-center">
        <Navbar></Navbar>
        <div className="max-w-6xl text-7xl font-bold text-white/90 font-abc">
          every person deserves to know and be known by their true identity
        </div>
        <Button>Download qid</Button>
      </div>
      <MaxWidthWrapper>
        <div className="flex justify-around items-center  px-12">
          <div className="flex flex-col gap-8 justify-between text-start">
            <div className="text-7xl max-w-lg font-bold text-white">
             <span className="bg-clip-text z-10 text-transparent bg-gradient-to-r from-orange-200 via-orange-500 to-orange-600">Secure</span>, easy, and always with you.
            </div>
            <Button>Create free account</Button>
          </div>
          <img
            className="w-2/5 py-16"
            src="\fsgdh43_2-e1684067541108.png"
          ></img>
        </div>
      </MaxWidthWrapper>
      <div className="min-w-screen bg-[url(http://oneqid.com/wp-content/uploads/2023/05/qd-ffvc-2-sdf.png)] flex flex-col items-center h-screen bg-cover bg-center gap-3 pt-28">
        
        <div className="text-7xl tracking-wide font-bold text-white font-abc"><span className="italic font-poppins">qid</span> for <span className="bg-clip-text z-10 text-transparent bg-gradient-to-r from-neutral-400  to-white">business</span></div>
        <div className="text-white font-bold text-3xl font-abc ">manage all your IDs with one QR</div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
