import React from "react";
import { Dispatch, SetStateAction } from "react";

export default function PhoneInput({
  title,
  phoneNumber,
  setPhoneNumber,
  placeholder,
}: {
  title: string;
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  placeholder: string;
}) {
  function phoneFormat(input: any) {
    //returns (###) ###-####
    console.log(input);
    input = input.replace(/\D/g, "");
    var size = input.length;
    if (size > 0) {
      input = "(" + input;
    }
    if (size > 3) {
      input = input.slice(0, 4) + ") " + input.slice(4, 11);
    }
    if (size > 6) {
      input = input.slice(0, 9) + "-" + input.slice(9);
    }
    return input;
  }

  return (
    <div>
      <label
        htmlFor='phone'
        className='block mb-2 text-xl font-thin text-gray-900 dark:text-gray-300'
      >
        {title}
      </label>
      <input
        type='tel'
        id='phone'
        className='bg-gray-50 border-b border-gray-300 text-gray-900 text-sm font-thin  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  bg-transparent focus:ring-0 focus:outline-none'        placeholder={placeholder}
        value={phoneFormat(phoneNumber)}
        onChange={(e) => setPhoneNumber(e.target.value)}
        autoComplete="off"
      />
    </div>
  );
}
