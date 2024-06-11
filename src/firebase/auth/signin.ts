import { auth } from "../config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  let result = null;
  let error: { code?: string; message?: string } | unknown = {};
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
