import { auth, firebase_app } from "../config";
import { getAuth, signOut } from "firebase/auth";

export default async function signOutUser() {
  let result = null;
  let error = null;
  try {
    result = await signOut(auth);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
