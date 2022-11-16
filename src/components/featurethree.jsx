import React from "react";


const FeatureThree = () => {

    let courseArr = [
      {
        num: 18,
        string: "Certified Teachers",
      },
      {
        num: 401,
        string: "students",
      },
      {
        num: 50,
        string: "courses",
      },
      {
        num: 30,
        string: "awards won",
      },
    ];

    let valuesDisplayed = courseArr.map(each => {
        return (
          <ul className="z-0">
            <li className="font-extrabold text-4xl">{each.num}</li>
            <li>{each.string}</li>
          </ul>
        );
    })

  return (
    // <div className="relative h-screen w-screen">
    //   <div className="grid grid-rows-2">
    //     <img
    //       src="https://preview.colorlib.com/theme/fox/images/image_4.jpg.webp"
    //       alt="students background"
    //       className=" h-screen w-screen overflow-hidden"
    //     />
    //     <div className="absolute h-full w-screen bg-bgorange opacity-40 contrast-75"></div>
    //   </div>
    // </div>

    <div className="relative mx-auto w-full h-screen overflow-hidden z-0">
      <img
        src="https://preview.colorlib.com/theme/fox/images/image_4.jpg.webp"
        alt="student-img"
        className="w-screen"
      />
      <div className="absolute inset-0 bg-bgorange bg-opacity-30 mt-0">
        <div className="z-10 text-[#ffffff] text-4xl">
          <div className="grid grid-rows-2">
            <div className="row-span-3 ">
              <div className="grid grid-cols-2 gap-8 mt-24">
                <div>
                  <img
                    src="https://preview.colorlib.com/theme/fox/images/about-2.jpg.webp"
                    alt="youtube-video"
                    className="flex justify-center items-center mx-24 mb-32 w-4/5"
                  />
                </div>

                <div className="space-x-5 z-1 text-xl text-start">
                  <h1 className="mb-5  text-bold text-3xl ml-4">
                    Fox University
                  </h1>
                  <p>
                    Separated they live in. A small river named Duden flows by
                    their place and supplies it with the necessary regelialia.
                    It is a paradisematic country. A small river named Duden
                    flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted
                    parts of sentences fly into your mouth.
                  </p>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4">
            {valuesDisplayed}
          </div>


        </div>
      </div>
    </div>
  );
};

export default FeatureThree;





