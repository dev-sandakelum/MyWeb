import React from "react";
import Time from "./date&time/Time";
import MiniAbout from "./miniAboutCard/MiniAbout";
import TopProjects from "./topProjects/TopProjects";

export default function Homepage({ colorCollection ,setRoute }) {
  return (
    <div>
      <div className={`px-[10px] w-full `}>
        <div className={`flex md:flex-row flex-col w-full gap-2`}>
          <div className={`w-full flex flex-col gap-2 md:w-1/2 `}>
            <div className={`w-full border ${colorCollection["1"]} p-1 ${colorCollection["time"]}`}>
              <Time />
            </div>
            <MiniAbout colorCollection={colorCollection} setRoute={setRoute} />
          </div>
          <div className="w-full flex flex-col gap-2 md:w-1/2 ">
            <TopProjects colorCollection={colorCollection} />
          </div>
        </div>
      </div>
    </div>
  );
}
