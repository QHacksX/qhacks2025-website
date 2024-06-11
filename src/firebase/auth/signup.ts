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
  let error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
