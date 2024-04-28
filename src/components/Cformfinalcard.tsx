import React from "react";

const Cformfinalcard = () => {
  return (
    <div className="px-4 md:px-6 py-8 lg:mx-auto max-w-7xl font-abc flex justify-center">
      <div className="rounded-[28px] w-11/12 text-white bg-gradient-to-br from-black/90 via-black/70 to-black/40 p-8 border-[1px] border-gray-500 flex flex-col gap-8">
        <div className="font-semibold text-5xl text-[#e0e0e0]">What is C-Form?</div>
        <div className="font-medium text-[22px] flex flex-col gap-5 text-[#cccccc]">
          <div>
            In India, a <span className="underline underline-offset-1 font-extrabold">C-Form</span> is a mandatory document required under the
            Foreigners’ Registration Act, 1946.
          </div>

          <div>
            It serves as a record of the stay of foreign nationals within the
            country.
          </div>
          <div>
            Hotels, guesthouses, and other accommodation providers are legally
            obligated to submit C-Forms to local authorities for every foreign
            guest’s stay.
          </div>
        </div>
        <div> <button
                onClick={() => {}}
                className="text-lg px-7 py-4 font-bold font-abc bg-black rounded-full text-white  border-[1px] border-gray-400 flex items-center gap-2"
              >
                Read More 
              </button></div>
      </div>
    </div>
  );
};

export default Cformfinalcard;
