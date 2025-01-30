import { Button } from "@/components/ui/button";
import React from "react";

export default function ProjectTemp({ colorCollection }) {
  return (
    <div
      className={`w-full h-[100px] ${colorCollection["1"]} border shadow p-2 px-4`}
    >
      <div className="flex">
        <h1>Project Name : </h1>
        <p>This is the project page.</p>
      </div>
      <div className="flex">
        <h1>Technologies : </h1>
        <p>.</p>
      </div>
      <div className="flex">
        <Button
          className={`shadow-none w-auto h-[30px] rounded border flex justify-center items-center `}
        >
          <p>try {">>"}</p>
        </Button>
      </div>
    </div>
  );
}
