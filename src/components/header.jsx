import React from 'react'

const Header = () => {
  return (
    <div className="bg-[#ffffff] w-screen">
      <nav className="bg-[#10081c]  h-20 ml-44 mr-48 ">
        <div className="text-[#ffffff] flex flex-row flex-initial pt-3 pb-0  px-7 justify-start items-center space-x-11 ">
          <div className="hover:text-bgorange text-bgorange">Home</div>
          <div className="hover:text-bgorange">About</div>
          <div className="hover:text-bgorange">Staff</div>
          <div className="hover:text-bgorange">Courses</div>
          <div className="hover:text-bgorange">Blog</div>
          <div className="hover:text-bgorange">Contact</div>
          <div>
            <input type="search" placeholder='search...' className='row-reverse  indent-4 h-14 bg-bgblue rounded-full ml-80 ' />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header