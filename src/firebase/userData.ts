import { db, firebase_app } from "./config";
import { getAuth } from "firebase/auth";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

const auth = getAuth(firebase_app);

export enum ShirtSize {
  xSmall = "xs",
  small = "s",
  medium = "m",
  large = "l",
  xLarge = "xl",
  xxLarge = "xxl",
}

export type InterestFormData = {
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: string;
  email: string;
  school: string;
  levelOfStudy: string;
  country: string;
  dietaryRestrictions?: string;
  underrepresented?: boolean;
  gender?: string;
  pronouns?: string;
  ethnicity?: string;
  sexualIdentity?: string;
  highestEducationCompleted?: string;
  shirtSize?: ShirtSize;
  studyMajor?: string;
};

export async function getUserData({}: {}) {
  const userId = auth.currentUser?.uid;
  if (!userId) {
    // TODO: if not found, undefined should be fine, just add check where this is called
    return;
  }
}

export async function updateUserData({
  userData,
}: {
  userData: InterestFormData;
}) {
  const userId = auth.currentUser?.uid;
  if (!userId) {
    console.log("no id");
    // TODO: Return {error, data}. If error, display error message on FE on sign up.
    // Eg. {error: "User not found", data: undefined}
    return;
  }

  try {
    console.log(await setDoc(doc(db, "users", userId), userData));
    console.log("success");
  } catch (e) {
    console.log("error");
    console.log(e);
  }
}
