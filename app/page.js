"use client";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import { Project_list } from "@/components/db/DB";
import Homepage from "@/components/homePage/Homepage";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import { useState } from "react";

const colorCollection = {
  1: "bg-[#F8F8FF] text-[#070F2B]",
  2: "bg-green-500 text-white",
  3: "bg-yellow-500 text-white",
  4: "bg-red-500 text-white",

  text0: "#535C91",
  time: "text-gray-400",

  icon0: "text-gray-400 hover:text-[#535C91]",
};

export const SocialIcon = ({ Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${colorCollection["icon0"]} socialIcon`}
  >
    <Icon className="h-5 w-5" />
  </a>
);

export default function Home() {
  const [route, setRoute] = useState(1);
  return (
    <div className=" max-h-[100svh] md:h-full bg-[#d6d6fa70] overflow-y-hidden ">
      <Navbar
        route={route}
        setRoute={setRoute}
        colorCollection={colorCollection}
      />
      <div className="md:min-h-screen h-[100svh] block overflow-x-hidden overflow-y-scroll scroll-smooth pt-[70px] pb-[10px]">
        {route == 1 && (
          <Homepage
            colorCollection={colorCollection}
            setRoute={setRoute}
            Project_list={Project_list}
          />
        )}
        {route == 2 && <About colorCollection={colorCollection} />}
        {route == 3 && (
          <Projects
            colorCollection={colorCollection}
            Project_list={Project_list}
          />
        )}
        {route == 4 && <Contact />}
      </div>
    </div>
  );
}
