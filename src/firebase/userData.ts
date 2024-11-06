import { auth, db } from "./config";

import { doc, setDoc, getDoc } from "firebase/firestore";

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
  needsBussing: string;

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

export async function getInterestFormData() {
  const userId = auth.currentUser?.uid;
  if (!userId) {
    console.log("No is");
    return;
  }

  try {
    const fetchedCollectionDoc = await getDoc(doc(db, "users", userId));
    if (fetchedCollectionDoc.exists()) {
      const interestFormData = fetchedCollectionDoc.data() as InterestFormData;
      return interestFormData;
    }

    return; // just return undefined otherwise
  } catch (e) {
    return;
  }
}

export async function checkApplicationStatus() {
  const userId = auth.currentUser?.uid;
  if (!userId) {
    return;
  }

  try {
    const fetchedApplication = await getDoc(
      doc(db, "qhacks_applications", userId)
    );
    console.log(fetchedApplication.exists());
    return fetchedApplication.exists();
  } catch (e) {
    return false;
  }
}

/**
 * Updates or inserts a document for the user in the 'qhacks_application' collection.
 * @param userData - the data to store in the user's document
 * @returns
 */
export async function updateUserData({
  userData,
}: {
  userData: ApplicationFormData;
}) {
  const userId = auth.currentUser?.uid;
  if (!userId) {
    return "User not found. Sign in and try again.";
  }

  try {
    await setDoc(doc(db, "qhacks_applications", userId), userData);
  } catch (e) {
    return "Something went wrong. Please try again";
  }
}
