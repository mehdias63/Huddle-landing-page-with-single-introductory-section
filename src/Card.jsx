import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Card() {
  return (
    <div>
      <img
        src="/images/logo.svg"
        className="self-start w-32 lg:w-40"
        alt="logo"
      />

      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-4 lg:mt-6">
        <div className="mt-4  ">
          <img
            src="/images/illustration-mockups.svg"
            className="max-w-sm md:max-w-md lg:max-w-lg"
            alt="huddle"
          />
        </div>
        <div className="lg:w-[50%] flex flex-col items-center lg:items-start justify-center mt-8 md:mt-[5rem] ml-4 lg:mt-[0.5rem]">
          <h1 className="font-pop font-semibold text-2xl md:text-[2.5rem] leading-9 md:leading-[3.75rem]">
            Build The Community
            <br /> Your Fans Will Love
          </h1>
          <p className="font-open font-normal leading-6 md:leading-[1.6875rem] text-base md:text-lg text-start md:px-12 mt-4 lg:px-2">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.{" "}
          </p>

          <button className="font-pop font-normal leading-[1.125rem] md:leading-[1.6875rem] text-xs md:text-lg mt-6 cursor-pointer rounded-full bg-white px-16 py-3 text-purple mb-4 shadow-[1px_3px_5px_0px_rgba(0,0,0,0.27)] hover:text-white hover:bg-pink">
            Register
          </button>
        </div>
      </div>
      <div className="flex gap-4 justify-center lg:justify-end mt-8 ">
        <span
          className="border-2 border-white border-solid rounded-full p-2 cursor-pointer
           hover:text-deeppink hover:border-deeppink"
        >
          <FaFacebookF />
        </span>
        <span className="border-2 border-white border-solid rounded-full p-2 cursor-pointer hover:text-deeppink hover:border-deeppink">
          <FaTwitter />
        </span>
        <span className="border-2 border-white border-solid rounded-full p-2 cursor-pointer hover:text-deeppink hover:border-deeppink">
          <FaInstagram />
        </span>
      </div>
    </div>
  );
}
