import React from "react";

export default function EmailInput(props: any) {
  return (
    <div>
      <label
        htmlFor='wordInput'
        className='block mb-2 text-xl font-thin text-gray-900 dark:text-gray-300'
      >
        {props.title}
      </label>
      <input
        type='text'
        id='wordInput'
        className='bg-gray-50 border-b border-gray-300 text-gray-900 text-sm font-thin  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  bg-transparent focus:ring-0 focus:outline-none'
        onChange={(e) => props.setEmail(e.target.value)}
        placeholder={props.placeholder}
      />
    </div>
  );
}
