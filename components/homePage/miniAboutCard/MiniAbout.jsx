import { SocialIcon } from "@/app/page";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function MiniAbout({colorCollection}) {
  return (
    <div
      className={`${colorCollection["1"]} shadow rounded p-[10px] flex justify-start flex-row gap-[20px] md:w-1/2 w-full`}
    >
      <div
        className={`rounded-full w-[100px] h-[100px] shadow-xl overflow-hidden border`}
      >
        <img src="/p.jpg" alt="" />
      </div>
      <div className={`py-2 flex flex-col justify-between`}>
        <h2>Hasitha Sandakelum</h2>
        <div className="flex flex-row gap-2">
          <div
            className={`w-[40px] h-[30px] rounded border flex justify-center items-center`}
          >
            <SocialIcon
              Icon={FaGithub}
              href="https://github.com/yourusername"
            />
          </div>
          <div
            className={`w-[40px] h-[30px] rounded border flex justify-center items-center`}
          >
            <SocialIcon
              Icon={FaLinkedin}
              href="https://linkedin.com/in/yourusername"
            />
          </div>
          <div
            className={`w-[40px] h-[30px] rounded border flex justify-center items-center`}
          >
            {" "}
            <SocialIcon
              Icon={FaTwitter}
              href="https://twitter.com/yourusername"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
