import React from "react";
import Styles from "@/src/css/style.module.css";

export default function FormHeader({
  title,
  subheader,
}: {
  title: string;
  subheader: string;
}) {
  return (
    <div className={`${Styles["text-shadow"]}`}>
      <div className='flex justify-center  text-white pb-2 text-4xl font-thin'>
        {title}
      </div>
      <div className='flex justify-center font-thin text-md text-gray-500'>
        {subheader}
      </div>
    </div>
  );
}
