import React from "react";
import ProjectTemp from "./project/ProjectTemp";

export default function Projects({ colorCollection, Project_list }) {
  return (
    <div className="px-2 grid md:grid-cols-2 gap-2">
      {Project_list.map((p,index) => {
        return (
          <ProjectTemp
            key={index + 'project'}
            colorCollection={colorCollection}
            p_title={p["p_title"]}
            p_description={p["p_description"]}
          />
        );
      })}
    </div>
  );
}
