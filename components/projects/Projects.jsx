import React from "react";
import ProjectTemp from "./project/ProjectTemp";

export default function Projects({colorCollection}) {
  return (
    <div className="px-2 grid md:grid-cols-2 gap-2">
      <ProjectTemp colorCollection={colorCollection}  p_title={"Chat-app"}  p_description={" JS , google-api"}/>
    </div>
  );
}
