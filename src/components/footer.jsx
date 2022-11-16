import React from 'react'
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {

  let linksArr = ['Home', 'Link', 'About', 'Services', 'Contacts']
  let questionArr = [
    "203 Fake St. Mountain View, San Francisco, California, USA",
    "+2 392 3929 210",
    "info@yourdomain.com",
  ];


  const questionList = questionArr.map(each => {
      return (
        <li>
          <a href="#">{each}</a>
        </li>
      );
  })

  const linksList = linksArr.map(each => {
    return (
      <div>
        <a href="#">{each}</a>
      </div>
    );
  })

  return (
    <div className="bg-[#3c312e] h-96 w-full p-10 text-[#ffffff] ">
      <div className="grid grid-cols-4">
        <div>
          <h1 className="text-bold text-center text-3xl mb-5 ">
            Have a question ?
          </h1>
          <ul className="space-y-7 text-start ml-10">{questionList}</ul>
        </div>
        <div>
          <h1 className="text-bold text-start text-3xl mb-5 ">Recent blog</h1>
          <ul className="space-y-7">
            <li>
              <span className="inline-block">
                <FaLocationArrow />
              </span>
              203 Fake St. Mountain View, San Francisco, California, USA
            </li>

            <li>
              <span className="inline-block">
                <FaLocationArrow />
              </span>
              203 Fake St. Mountain View, San Francisco, California, USA
            </li>

            <li>
              <span className="inline-block">
                <FaLocationArrow />
              </span>
              203 Fake St. Mountain View, San Francisco, California, USA
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-bold text-center text-3xl mb-5 ">Links</h1>
          <div className="flex flex-col justify-items-center text-start  ml-36">
            {linksList}
          </div>
        </div>
        <div>
          <h1 className="text-bold text-center text-3xl mb-5  ">
            Subscribe Us!
          </h1>
          <div className="space-y-2">
            <input className="w-48 ml-20 bg-[#1e1d1d] p-2 " />
            <button className="block ml-20 w-48 pr-32 indent-14  bg-[#4747d1] p-2 rounded-sm  ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer