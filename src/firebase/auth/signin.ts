import { auth } from "../config";
import { signInWithEmailAndPassword } from "firebase/auth";
import type { FirebaseError } from "firebase-admin";

export default async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  let result = null;
  let error: string | undefined;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e: unknown) {
    if (e instanceof Object) {
      if ("code" in e) {
        error = e.code as string;
      }
    }
  }

  return { result, error };
}
