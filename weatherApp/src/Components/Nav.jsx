import React from "react";

const Nav = () => {
  return (
    <>
      <div className="bg-[#EEE4B1] w-full py-5 px-20 flex  items-center justify-between border-b-[1px] border-solid border-black">
        <div className="text-3xl  cursor-pointer hover:text-red-400 duration-200">theWeatherApp</div>
        <div className="md:flex hidden gap-6">
          <h2 className="text-2xl text-[#895121] cursor-pointer hover:text-red-400 duration-200">GitHub</h2>
          <h2 className="text-2xl text-[#895121] cursor-pointer hover:text-red-400 duration-200">Linkden</h2>
          <h2 className="text-2xl text-[#895121] cursor-pointer hover:text-red-400 duration-200">Twitter(X)</h2>
        </div>
        <button className="bg-[#895221a0] px-8 py-2 rounded-3xl text-xl hover:bg-red-400 duration-300">
            Get in touch
        </button>
      </div>
    </>
  );
};

export default Nav;
