import React from "react";
import Time from "./date&time/Time";
import MiniAbout from "./miniAboutCard/MiniAbout";

export default function Homepage({ colorCollection }) {
  return (
    <div>
      <div className={`px-[10px]`}>
        <div className={`rounded p-[10px]`}>
          <Time />
        </div>
        <div className={`flex md:flex-row flex-col gap-2 w-full`}>
          <MiniAbout colorCollection={colorCollection} />
          <MiniAbout colorCollection={colorCollection} />
        </div>
      </div>
    </div>
  );
}
