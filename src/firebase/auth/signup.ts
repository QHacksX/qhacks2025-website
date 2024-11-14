import { auth } from "../config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";

export default async function signUp({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  let result = '';
  let error: string | undefined;

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCred.user, {url: `${window.location.origin}/signin`});
    result = "Verification email sent. Please check your inbox."
  } catch (e) {
    if (e instanceof Object) {
      if ("code" in e) {
        error = e.code as string;
      }
    }
  }

  return { result, error };
}
