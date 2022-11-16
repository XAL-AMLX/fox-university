import React from 'react'

const Hero = () => {
  return (
    // <div className=" bg-bgorange bg-opacity-70">
    //   <div className="w-full bg-bgblue bg-bg-2 h-screen  bg-no-repeat">
    //     <div className="flex flex-row text-sm md:text-xl lg:text-6xl font-bold ">
    //       Education needs,
    //       <span className="">complete solution</span>
    //     </div>
    //   </div>
    // </div>

    <div className="relative mx-auto w-full h-screen overflow-hidden z-0">
      <img
        src="https://preview.colorlib.com/theme/fox/images/bg_1.jpg.webp"
        alt="student-img"
      />
      <div className="absolute inset-0 bg-bgorange bg-opacity-30 mt-0">
        <div className="z-10 text-[#ffffff] text-4xl">
          <div className='justify-items-center m-40 text-6xl font-bold'>
            <div className='text-start'>Education needs</div>
            <div className='text-start'>complete solution</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero