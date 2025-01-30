import { SocialIcon } from "@/app/page";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";



export default function MiniAbout({ colorCollection ,setRoute }) {

  const handleClick = () => {
    setRoute(2);
  };
  return (
    <div
      className={`${colorCollection["1"]} shadow rounded p-[10px] flex justify-start items-center flex-row gap-[20px] w-full h-[150px]`}
    >
      <div
        className={`rounded-full w-[100px] h-[100px] min-w-[100px] shadow-xl overflow-hidden border`}
      >
        <img src="/p.jpg" alt="" />
      </div>
      <div className={`py-2 flex flex-col justify-between h-full`}>
        <h2 className="">Hasitha Sandakelum</h2>
        <p className={` font-thin`}>
          Tech enthusiast building magical web experiences with Next.js,
          Three.js, and NativeScript.
        </p>
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
          <div
            className={`w-auto h-[30px] rounded border flex justify-center items-center`}
            onClick={() => setRoute(2)}
          >
            <Button className={ `shadow-none`} >
                <p className={`${colorCollection["icon0"]}`}>about more {`>>`}</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
