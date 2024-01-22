import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Card() {
  return (
    <div>
      <img src="../public/images/logo.svg" />
      <div>
        <div className="flex justify-center items-center gap-4">
        <div className="w-[21.48031rem] h-[15rem] bg-[url(../public/images/illustration-mockups.svg)] bg-no-repeat bg-cover lg:w-[42rem] lg:h-[28rem]"></div>
        <div className="w-[50%]">
          <h1>Build The Community<br/> Your Fans Will Love</h1>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
          <button>Register</button>
        </div>
        </div>
        <div className="flex gap-8">
          <span><FaFacebookF /></span>
          <span><FaTwitter /></span>
          <span><FaInstagram /></span>
        </div>
      </div>
    </div>
  );
}
