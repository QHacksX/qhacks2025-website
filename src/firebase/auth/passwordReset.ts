// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// import { auth } from "../config";

// export async function passwordReset({ email }: { email?: string }) {
//   let result: string | undefined;
//   let error: string | undefined;
//   if (!email) {
//     error = "Enter the email linked to your account";
//   } else {
//     try {
//       await sendPasswordResetEmail(auth, email);
//       result = "Check your email for instructions to change your password";
//     } catch (e) {
//       result = undefined;
//       error = "Something went wrong please try again";
//     }
//   }

//   return { result, error };
// }
