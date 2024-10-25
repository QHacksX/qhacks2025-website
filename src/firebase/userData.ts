import { auth, db, firebase_app } from "./config";
import { getAuth } from "firebase/auth";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

export enum ShirtSize {
  na = "not chosen",
  xSmall = "xs",
  small = "s",
  medium = "m",
  large = "l",
  xLarge = "xl",
  xxLarge = "xxl",
}

export type ApplicationFormData = {
  firstName: string;
  lastName: string;

  teammate1: string;
  teammate2: string;
  teammate3: string;
  applicationQuestion1: string;
  applicationQuestion2: string;
  travellingFromCity: string;
  needsBussingFrom: string;

  age: number;
  phoneNumber: string;
  email: string;
  school: string;
  levelOfStudy: string;
  country: string;
  dietaryRestrictions?: string;
  underrepresented?: boolean | null;
  gender?: string;
  pronouns?: string;
  ethnicity?: string;
  sexualIdentity?: string;
  highestEducationCompleted?: string;
  shirtSize?: ShirtSize;
  studyMajor?: string;
  acceptMLHCodeOfConduct: boolean;
  acceptMLHPrivacyPolicy: boolean;
  acceptMLHEmails: boolean;
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
  underrepresented?: boolean | null;
  gender?: string;
  pronouns?: string;
  ethnicity?: string;
  sexualIdentity?: string;
  highestEducationCompleted?: string;
  shirtSize?: ShirtSize;
  studyMajor?: string;
  acceptMLHCodeOfConduct: boolean;
  acceptMLHPrivacyPolicy: boolean;
  acceptMLHEmails: boolean;
};

export async function getUserData({}: {}) {
  const userId = auth.currentUser?.uid;
  if (!userId) {
    // TODO: if not found, undefined should be fine, just add check where this is called
    return;
  }
}

/**
 * Updates or inserts a document for the user in the 'users' collection.
 * @param userData - the data to store in the user's document
 * @returns
 */
export async function updateUserData({
  userData,
}: {
  userData: InterestFormData;
}) {
  const userId = auth.currentUser?.uid;
  if (!userId) {
    return "User not found. Sign in and try again.";
  }

  try {
    await setDoc(doc(db, "users", userId), userData);
  } catch (e) {
    console.log(e);
    return "Something went wrong. Please try again";
  }
}
