import React from 'react'
// import { FaLocationArrow } from "react-icons/fa";

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
      <li>
        <a href="#" >{each}</a>
      </li>
    );
  })

  return (
    <div className="bg-[#3c312e] h-fit w-full">
      <div className="grid grid-cols-4">
        <div>
          <h1 className="">Have a question</h1>
          <ul>{questionList}</ul>
        </div>
        <div>
          <h1>Have a question</h1>
          <ul>
            <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
          </ul>
        </div>
        <div>
          <h1>Links</h1>
          <ul>{linksList}</ul>
        </div>
        <div>
          <h1>Subscribe Us!</h1>
          <ul>
            <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li>
              <button
                type="button"
                className="w-full bg-spanGreen text-[#F7F7FA] py-5 text-center font-bold text-md"
              >
                Subscribe
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer