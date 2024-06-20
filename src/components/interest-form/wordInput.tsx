import React from "react";
import { Dispatch, SetStateAction } from "react";

export default function WordInput({
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
      <input
        type='text'
        id='wordInput'
        className='bg-gray-50 border-b border-gray-300 text-gray-900 text-base font-medium  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  bg-transparent focus:ring-0 focus:outline-none'
        onChange={(e) => setInput(e.target.value)}
        value={input}
        autoComplete="off"
        // placeholder={placeholder}
      />
    </div>
  );
}
