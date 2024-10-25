import React from "react";
import { Dispatch, SetStateAction } from "react";

export default function ParagraphInput({
  title,
  input,
  setInput,
  placeholder,
}: {
  title: string;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={input}
        className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300'
      >
        {title}
      </label>
      <textarea
        id='paragraphInput'
        className='w-full h-1/8 !pt-[0.75rem] rounded px-4 py-1 mt-[2px] text-sm border border-white bg-[#2D2D2D]'
        onChange={(e) => setInput(e.target.value)}
        value={input}
        autoComplete="off"
        placeholder={placeholder}
      />
    </div>
  );
}
