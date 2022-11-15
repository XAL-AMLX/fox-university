import React from 'react'


const Blogs = () => {
  return (
    <div>
      <div grid grid-rows-2>
        <div className="text-center text-textslate gap-3">
          <h1 className="text-[#000000] font-bold text-3xl">Recent Blog</h1>
          <div>
            <p>
              Separated they live in. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It
            </p>
            <p>is a paradisematic country</p>
          </div>
        </div>

        <div className="grid grid-cols-3 m-24 gap-4">
          <div>
            <img src="https://preview.colorlib.com/theme/fox/images/image_1.jpg.webp" />
            <h1>Skills to develop your child memory</h1>
            <p className="text-textslate">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="bg-bgorange text-[#ffffff] rounded-lg p-2 ">
              Read More
            </button>
          </div>

          <div>
            <img src="https://preview.colorlib.com/theme/fox/images/image_2.jpg.webp" />
            <h1>Skills to develop your child memory</h1>
            <p className="text-textslate">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="bg-bgorange text-[#ffffff] rounded-lg p-2 ">
              Read More
            </button>
          </div>

          <div>
            <img src="https://preview.colorlib.com/theme/fox/images/image_3.jpg.webp" />
            <h1>Skills to develop your child memory</h1>
            <p className="text-textslate">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="bg-bgorange text-[#ffffff] rounded-lg p-2 ">
              Read More
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Blogs