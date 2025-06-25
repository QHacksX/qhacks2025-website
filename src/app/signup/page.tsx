// "use client";
// import React from "react";
// import signUp from "../../firebase/auth/signup";
// import { useRouter } from "next/navigation";
// import EmailInput from "@/src/components/application-form/emailInput";
// import Styles from "@/src/css/style.module.css";
// import { getAuthErrorMessage } from "@/src/firebase/utils";
// import Link from "next/link";
// import { IoIosClose } from "react-icons/io";
// import { BiHide } from "react-icons/bi";
// import { BiShowAlt } from "react-icons/bi";
// import Waves from "@/src/components/waves";

// function Page() {
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [errorMessage, setErrorMessage] = React.useState<any>();
//   const [showPassword, setShowPassword] = React.useState(false);
//   const [successMessage, setSuccessMessage] = React.useState("");

//   const router = useRouter();

//   const handleForm = async () => {
//     // Reset messages so that they don't show previous form submission messages
//     setErrorMessage("");
//     setSuccessMessage("");

//     const { result, error } = await signUp({ email, password });

//     if (error) {
//       setErrorMessage(getAuthErrorMessage(error));
//     } else {
//       setSuccessMessage(result);
//     }
//   };

//   return (
//     <div className='flex h-screen w-screen justify-center'>
//       <Link href='/' className='p-5 absolute left-0 z-10'>
//         <IoIosClose size={50} />
//       </Link>

//       <div className='w-screen absolute'>
//         <Waves />
//       </div>

//       <main className='p-4 pb-8  place-content-center flex justify-center md:w-1/2 align-middle items-center'>
//         <div className='m-10 p-10 w-full rounded-lg sm:p-8 grow justify-center'>
//           <div
//             className={`flex justify-center  text-white pb-2 text-4xl font-thin ${Styles["text-shadow"]}`}
//           >
//             Sign Up
//           </div>
//           <div className={`flex justify-center text-center font-normal text-lg text-gray-500 mb-10  ${Styles["text-shadow"]}`}>
//               A QHacks account is required in order to apply for the event.
//             </div>

//           <EmailInput
//             title='Email'
//             email={email}
//             setEmail={setEmail}
//             placeholder='your@example.com'
//           />

//           <div className='mt-10'>
//             <label
//               htmlFor='password'
//               className='block mb-2 text-xl font-thin text-gray-300'
//             >
//               Password
//             </label>
//             <div className=''>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id='wordInput'
//                 className='bg-gray-50 border-b border-gray-300 text-gray-300 text-sm font-thin w-full p-2.5  bg-transparent focus:ring-0 focus:outline-none'
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder='******'
//               />
//               <button
//                 onClick={() => {
//                   setShowPassword(!showPassword);
//                 }}
//                 className='absolute m-auto'
//               >
//                 {showPassword ? <BiHide size={30} /> : <BiShowAlt size={30} />}
//               </button>
//             </div>
//           </div>

//           <button
//             className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center mt-10'
//             onClick={handleForm}
//           >
//             Sign Up
//           </button>

//           {errorMessage && (
//             <p className='text-white bg-red-500 font-medium rounded-lg text-sm sm:w-auto px-5 py-3 mt-3 text-center '>
//               {errorMessage}
//             </p>
//           )}
//           {successMessage && (
//             <p className='text-white bg-green-500 font-medium rounded-lg text-sm sm:w-auto px-5 py-3 mt-3 text-center'>
//               {successMessage}
//             </p>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Page;
