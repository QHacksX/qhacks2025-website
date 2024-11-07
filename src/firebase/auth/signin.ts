import { auth } from "../config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  let result = "";
  let error: string | undefined;
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    if (user.emailVerified) {
      result = "Login successful!";
    } else {
      error = "not-verified";
    }
  } catch (e: unknown) {
    if (e instanceof Object) {
      if ("code" in e) {
        error = e.code as string;
      }
    }
  }

  return { result, error };
}
