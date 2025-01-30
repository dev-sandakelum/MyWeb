
import React from "react";
import { FaFile } from "react-icons/fa";

const ProjectMiniCard = ({text ,colorCollection}) => {
  return (
    <div
      className={`${colorCollection["icon0"]} flex flex-row items-center gap-1 p-1 border h-[40px]`}
    >
      <FaFile />
      <p>{text}</p>
    </div>
  );
};

export default function TopProjects({ colorCollection }) {
  return (
    <div
      className={`${colorCollection["1"]} shadow rounded p-[10px] flex justify-start items-start flex-col  w-full md:h-[250px] h-auto`}
    >
      <h1>Recent Projects</h1>
      <div className="mx-2 grid grid-cols-2 gap-2 w-full h-auto pr-2">
        <ProjectMiniCard text={'example'} colorCollection={colorCollection}/>
        <ProjectMiniCard text={'example'} colorCollection={colorCollection}/>
        <ProjectMiniCard text={'example'} colorCollection={colorCollection}/>
        <ProjectMiniCard text={'example'} colorCollection={colorCollection}/>
      </div>
    </div>
  );
}
