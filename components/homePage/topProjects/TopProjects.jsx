import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaFile } from "react-icons/fa";

const ProjectMiniCard = ({ text, colorCollection }) => {
  const link = "/preview/" + text;
  return (
    <div
      className={`${colorCollection["icon0"]} flex flex-row items-center gap-1 p-1 border h-[40px]`}
    >
      <Link href={link} className="flex flex-row items-center gap-1 p-1">
        <FaFile />
        <p>{text}</p>
      </Link>
    </div>
  );
};

export default function TopProjects({
  colorCollection,
  Project_list,
  setRoute,
}) {
  const Project_list_var = Project_list;
  return (
    <div
      className={`${colorCollection["1"]} border shadow rounded p-[10px] flex justify-start items-start flex-col  w-full md:h-[250px] h-auto`}
    >
      <h1>Recent Projects</h1>
      <div className="mx-2 grid grid-cols-2 gap-2 w-full h-auto pr-2">
        {Project_list_var.map((p, index) => {
          if (p["setTop"]) {
            return (
              <ProjectMiniCard
                key={index + "main"}
                text={p["p_title"]}
                colorCollection={colorCollection}
              />
            );
          }
        })}
        {/* <ProjectMiniCard text={'example'} colorCollection={colorCollection}/> */}
      </div>
      <div
        onClick={() => {
          setRoute(3);
        }}
        className={`${colorCollection["icon0"]} flex md:hidden flex-row items-center gap-1 p-1 border w-auto h-[30px] mx-2 my-1`}
      >
        <Button className="flex flex-row items-center gap-1 p-1 shadow-none ">
          <p>View More {">>"}</p>
        </Button>
      </div>
    </div>
  );
}
