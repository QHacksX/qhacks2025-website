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
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        {title}
      </label>
      <input
        type='phone'
        id='phone'
        pattern='([0-9]{3}) [0-9]{3}-[0-9]{4}'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder={placeholder}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </div>
  );
}
