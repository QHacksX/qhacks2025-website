"use client";
import React, { useEffect, useState } from "react";
import "./signin.css";
import signIn from "../../firebase/auth/signin";
import { useRouter } from "next/navigation";
import EmailInput from "@/src/components/application-form/emailInput";
import Styles from "@/src/css/style.module.css";
import { getAuthErrorMessage } from "@/src/firebase/utils";
import { auth } from "@/src/firebase/config";
import Link from "next/link";
import { IoIosClose } from "react-icons/io";
import { BiHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";
import { passwordReset } from "@/src/firebase/auth/passwordReset";
import Waves from "@/src/components/waves";
import { usePreviousRoute } from "../context/RouteContext";
import FormHeader from "@/src/components/application-form/header";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const [errorMessage, setErrorMessage] = React.useState<any>();
  const [successMessage, setSuccessMessage] = React.useState<
    string | undefined
  >();

  const [showPassword, setShowPassword] = useState(false);

  const { prevRoute } = usePreviousRoute();

  useEffect(() => {
    if (auth.currentUser && auth.currentUser.emailVerified) {
      router.back();
    }
  }, [router]);

  const handleForm = async () => {
    const { result, error } = await signIn({ email, password });
    if (error) {
      setErrorMessage(getAuthErrorMessage(error));
    } else {
      if (prevRoute == "/application-form") {
        router.push("/application-form");
      } else {
        router.push("/");
      }
    }
  };

  const handlePasswordReset = async () => {
    const { result, error } = await passwordReset({ email });
    setErrorMessage(error);
    setSuccessMessage(result);
  };

  return (
    <div className='flex h-screen w-screen justify-center'>
      <Link href='/' className='p-5 absolute left-0 z-10'>
        <IoIosClose size={50} />
      </Link>

      <div className='w-screen absolute'>
        <Waves />
      </div>

      <main className='p-4 pb-8  place-content-center flex justify-center md:w-1/2 h-screen align-middle items-center'>
        <div className='m-10 p-10 w-full rounded-lg sm:p-8 grow justify-center z-50'>
          <div
            className={`flex justify-center text-white pb-2 mt-20 text-4xl font-thin ${Styles["text-shadow"]}`}
          >
            Sign In
          </div>
            <div className={`flex justify-center text-center font-normal text-lg text-gray-500 mb-10  ${Styles["text-shadow"]}`}>
              A QHacks account is required in order to apply for the event.
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
              className='block mb-2 text-xl font-thin text-gray-300 '
            >
              Password
            </label>
            <div className=''>
              <input
                type={showPassword ? "text" : "password"}
                id='wordInput'
                className='bg-gray-50 border-b border-gray-300 text-gray-300 text-sm font-thin w-full p-2.5 bg-transparent focus:ring-0 focus:outline-none'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='******'
              />
              <button
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className='absolute'
              >
                {showPassword ? <BiHide size={30} /> : <BiShowAlt size={30} />}
              </button>
            </div>
          </div>

          <button
            className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center mt-10'
            onClick={handleForm}
          >
            Sign In
          </button>

          <button
            className='text-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center hover:text-[#ffd24d]'
            onClick={handlePasswordReset}
          >
            Forgot Password
          </button>

          <div
            className={`flex justify-center  text-white pb-2 text-sm font-thin mb-10 ${Styles["text-shadow"]}`}
          >
            <a className='mx-1 underline mt-10 text-center' href='/signup'>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Don't have an account? Click here to sign up!
            </a>
          </div>

          {errorMessage && (
            <p className='text-white bg-red-500 font-medium rounded-lg text-sm sm:w-auto px-5 py-3 mt-3 text-center'>
              {errorMessage}
            </p>
          )}
          {successMessage && (
            <p className='text-white bg-green-600 font-medium rounded-lg text-sm sm:w-auto px-5 py-3 mt-3 text-center'>
              {successMessage}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Page;
