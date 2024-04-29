import Footer from "../components/Footer";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

import Form from "../components/Support/Form";
import Pitch from "../components/Support/Pitch";

const Support = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="min-h-screen lg:mx-auto max-w-7xl  grid grid-cols-1 md:grid-cols-2 place-items-center md:gap-x-8   md:px-16 font-abc text-white">
           <Pitch></Pitch>
          <Form></Form>
        </div>
      </MaxWidthWrapper>
      <Footer></Footer>
    </>
  );
};


export default Support;
