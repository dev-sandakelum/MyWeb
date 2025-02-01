import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function ProjectTemp({ colorCollection , p_title ,p_description}) {
  return (
    <div
      className={`w-full h-[100px] ${colorCollection["1"]} border shadow p-2 px-4`}
    >
      <div className="flex">
        <h1>Project Name : </h1>
        <p>{p_title}</p>
      </div>
      <div className="flex">
        <h1>Technologies : </h1>
        <p>{p_description}</p>
      </div>
      <div className="flex">
        <Button
          className={`shadow-none w-auto h-[30px] rounded border flex justify-center items-center `}
        >
          <Link href={"/preview/1"}>
            <p>try {">>"}</p>
          </Link>
        </Button>
      </div>
    </div>
  );
}
