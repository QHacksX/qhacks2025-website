"use client";
import React, { useEffect } from "react";
import "./signin.css";
import signIn from "../../firebase/auth/signin";
import { useRouter } from "next/navigation";
import EmailInput from "@/src/components/interest-form/emailInput";
import Styles from "@/src/css/style.module.css";
import { getAuthErrorMessage } from "@/src/firebase/utils";
import { auth } from "@/src/firebase/config";
import Link from "next/link";
import { IoIosClose } from "react-icons/io";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const [errorMessage, setErrorMessage] = React.useState<any>();

  useEffect(() => {
    if (auth.currentUser) {
      router.back();
    }
  }, [router]);

  const handleForm = async () => {
    const { result, error } = await signIn({ email, password });

    if (error.code !== null) {
      setErrorMessage(getAuthErrorMessage(error.code));
    } else {
      // else successful
      console.log(result);
      return router.back();
    }
  };

  return (
    <div className='flex h-screen w-screen justify-center'>
      <Link href='/' className='p-5 absolute left-0'>
        <IoIosClose size={50} />
      </Link>
      <main className='p-4 pb-8  place-content-center flex justify-center md:w-1/2'>
        <div className='m-10 p-10 w-full rounded-lg sm:p-8 grow justify-center'>
          <div
            className={`flex justify-center  text-white pb-2 text-4xl font-thin mb-10 ${Styles["text-shadow"]}`}
          >
            Sign In
          </div>
          <EmailInput
            title='Email'
            email={email}
            setEmail={setEmail}
            placeholder='your@example.com'
          />

          <div className='mt-10'>
            <label
              htmlFor='password'
              className='block mb-2 text-xl font-thin text-gray-900 dark:text-gray-300'
            >
              Password
            </label>
            <input
              type='text'
              id='wordInput'
              className='bg-gray-50 border-b border-gray-300 text-gray-900 text-sm font-thin  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  bg-transparent focus:ring-0 focus:outline-none'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='******'
            />
          </div>

          <button
            className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-10'
            onClick={handleForm}
          >
            Sign In
          </button>

          {/* TODO: Style this, fix error/warning */}
          <div
            className={`flex justify-center  text-white pb-2 text-sm font-thin mb-10 ${Styles["text-shadow"]}`}
          >
            <a className='mx-1 underline' href='/signup'>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Don't have an account? Click here to sign up!
            </a>
          </div>

          {errorMessage && (
            <p className='text-white bg-red-500 font-medium rounded-lg text-sm sm:w-auto px-5 py-3 mt-3 text-center dark:bg-red-500 dark:focus:ring-red-800'>
              {errorMessage}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Page;
