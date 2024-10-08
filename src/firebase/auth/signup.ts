import { FirebaseError } from "firebase/app";
import { auth, firebase_app } from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default async function signUp({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  let result = null;
  let error: string | undefined;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    if (e instanceof Object) {
      if ("code" in e) {
        error = e.code as string;
      }
    }
  }

  return { result, error };
}
