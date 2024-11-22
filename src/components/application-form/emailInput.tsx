import React, { Dispatch, SetStateAction } from "react";

export default function EmailInput({
  title,
  email,
  setEmail,
  placeholder
}: {
  title: string;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor='emailInput'
        className='block mb-2 text-xl font-medium text-gray-300'
      >
        {title}
      </label>
      <input
        type='text'
        id='emailInput'
        className='bg-gray-50 border-b border-gray-300 text-gray-300 text-base font-medium block w-full p-2.5    bg-transparent focus:ring-0 focus:outline-none'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder={placeholder}
      />
    </div>
  );
}
