"use client";

import DropdownInput from "@/src/components/interest-form/dropdownInput";
import EmailInput from "@/src/components/interest-form/emailInput";
import FormHeader from "@/src/components/interest-form/header";
import PhoneInput from "@/src/components/interest-form/phoneInput";
import WordInput from "@/src/components/interest-form/wordInput";
import { ValidationErrors, schema } from "./validate";
import { DropdownTypes } from "@/src/data/dropdown-options/options";
import {
  InterestFormData,
  ShirtSize,
  updateUserData,
} from "@/src/firebase/userData";
import { useEffect, useState } from "react";
import React from "react";
import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import "./styles.css";
import Styles from "@/src/css/style.module.css";
import { error } from "console";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/src/firebase/config";
import { useRouter } from "next/navigation";

// TODO: Make an enum for the DropdownType (to not use strings)
function Page(props: any) {
  const router = useRouter();

  useEffect(() => {
    if (auth.currentUser === null) {
      router.push("signin");
    }
  }, [router]);

  const [step, setStep] = useState(1);
  const [data, setData] = useState();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(-1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [levelOfStudy, setLevelOfStudy] = useState("");
  const [country, setCountry] = useState("");
  const [dietaryRestriction, setDietaryRestriction] = useState("");
  const [isUnderrepresented, setIsUnderrepresented] = useState(null);
  const [gender, setGender] = useState("");
  const [pronoun, setPronoun] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [sexuality, setSexuality] = useState("");
  const [highestEdu, setHighestEdu] = useState("");
  const [shirtSize, setShirtSize] = useState(ShirtSize.na);
  const [fieldOfStudy, setFieldOfStudy] = useState("");

  // If "Other" in the original dropdown, allows user to input custom value
  const [origInputGender, setOrigInputGender] = useState("");
  const [origInputPronoun, setOrigInputPronoun] = useState("");
  const [origInputEthnicity, setOrigInputEthnicity] = useState("");
  const [origInputSexuality, setOrigInputSexuality] = useState("");
  const [origInputFieldOfStudy, setOrigInputFieldOfStudy] = useState("");

  // MLH Checkboxes
  const [checkedMLHCode, setCheckedMLHCode] = useState(false);
  const [checkedMLHPrivacy, setCheckedMLHPrivacy] = useState(false);
  const [checkedMLHSendEmails, setCheckedMLHSendEmails] = useState(false);

  const [errors, setErrors] = useState([""]);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");

  useEffect(() => {
    let firstError;
    let secondError;
    let thirdError;

    firstError = errors.includes(ValidationErrors.FIRST_NAME_ERROR)
      ? ValidationErrors.FIRST_NAME_ERROR
      : errors.includes(ValidationErrors.PHONE_NUMBER_ERROR)
      ? ValidationErrors.PHONE_NUMBER_ERROR
      : errors.includes(ValidationErrors.SCHOOL_ERROR)
      ? ValidationErrors.COUNTRY_ERROR
      : errors.includes(ValidationErrors.MLH_CODE_ERROR)
      ? ValidationErrors.MLH_CODE_ERROR
      : "";

    secondError = errors.includes(ValidationErrors.LAST_NAME_ERROR)
      ? ValidationErrors.LAST_NAME_ERROR
      : errors.includes(ValidationErrors.EMAIL_ERROR)
      ? ValidationErrors.EMAIL_ERROR
      : errors.includes(ValidationErrors.LEVEL_OF_STUDY_ERROR)
      ? ValidationErrors.LEVEL_OF_STUDY_ERROR
      : errors.includes(ValidationErrors.MLH_PRIVACY_ERROR)
      ? ValidationErrors.MLH_PRIVACY_ERROR
      : "";

    thirdError = errors.includes(ValidationErrors.AGE_ERROR)
      ? ValidationErrors.AGE_ERROR
      : errors.includes(ValidationErrors.COUNTRY_ERROR)
      ? ValidationErrors.COUNTRY_ERROR
      : "";

    setError1(firstError);
    setError2(secondError);
    setError3(thirdError);
  }, [errors]);

  const showValidationError = (error: string) => {
    return (
      <p className='text-white bg-red-500 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-red-500 dark:focus:ring-red-800'>
        {error}
      </p>
    );
  };

  const next = () => {
    // Remove any validation errors
    setErrors([]);

    if (step < 9) {
      setStep((prev) => prev + 1);
    }
  };

  const prev = () => {
    // Remove any validation errors
    setErrors([]);

    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  async function validateInputs() {
    let inputs;

    // Only validate on pages 1, 2, 3, 8 (see else-if for 8)
    if (step < 4) {
      if (step === 1) {
        inputs = {
          firstName: firstName,
          lastName: lastName,
          age: age === -1 ? null : age,
        };
      } else if (step === 2) {
        inputs = {
          phoneNumber: phoneNumber,
          email: email,
        };
      } else if (step === 3) {
        inputs = {
          school: school,
          levelOfStudy: levelOfStudy,
          country: country,
        };
      }

      awaitValidation(inputs, step - 1);
    } else if (step === 8) {
      inputs = {
        checkedMLHCode: checkedMLHCode,
        checkedMLHPrivacy: checkedMLHPrivacy,
      };

      // Index 3 since that is the last index in the validation schema
      awaitValidation(inputs, 3);
    } else if (step >= 4 && step < 8) {
      // No need to validate
      next();
    }
  }

  async function awaitValidation(inputs: any, arrayIndex: number) {
    let validForm = await schema[arrayIndex].isValid(inputs);
    console.log(validForm);
    try {
      if (validForm) {
        next();
      } else {
        await schema[arrayIndex].validate(inputs, { abortEarly: false });
      }
    } catch (err: any) {
      setErrors(err.errors);
    }
  }

  // TODO: Validation of data is required
  const save = () => {
    let formattedIsUnderrepresented = null;

    if (isUnderrepresented === "Yes") {
      formattedIsUnderrepresented = true;
    } else if (isUnderrepresented === "No") {
      formattedIsUnderrepresented = false;
    }

    if (origInputGender !== "Prefer to self-describe") {
      setGender(origInputGender);
    }

    if (origInputPronoun !== "Prefer to self-describe") {
      setPronoun(origInputPronoun);
    }

    if (origInputEthnicity !== "Prefer to self-describe") {
      setEthnicity(origInputEthnicity);
    }

    if (origInputSexuality !== "Prefer to self-describe") {
      setSexuality(origInputSexuality);
    }

    if (origInputFieldOfStudy !== "Other (please specify)") {
      setFieldOfStudy(origInputFieldOfStudy);
    }

    const inputtedData: InterestFormData = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      phoneNumber: phoneNumber,
      email: email,
      school: school,
      levelOfStudy: levelOfStudy,
      country: country,
      dietaryRestrictions: dietaryRestriction,
      underrepresented: formattedIsUnderrepresented,
      gender: gender,
      pronouns: pronoun,
      ethnicity: ethnicity,
      sexualIdentity: sexuality,
      highestEducationCompleted: highestEdu,
      shirtSize: shirtSize,
      studyMajor: fieldOfStudy,
      acceptMLHCodeOfConduct: checkedMLHCode,
      acceptMLHPrivacyPolicy: checkedMLHPrivacy,
      acceptMLHEmails: checkedMLHSendEmails,
    };
    console.log(inputtedData);
    updateUserData({ userData: inputtedData }).then((err) => {
      if (err) {
        setErrorMessage(err);
      }
      setStep(10);
    });
  };

  return (
    <div className={`flex h-screen ${Styles["shadow"]} w-screen`}>
      <Link href='/' className='p-5 absolute'>
        <IoIosClose size={50} />
      </Link>

      <div className='flex-1 h-full w-full justify-center align-middle content-center'>
        <main className='p-4 pb-8  place-content-center flex justify-center w-full'>
          <div className='md:m-10 p-10 w-full rounded-lg sm:p-8 grow justify-center'>
            <div className='grid gap-6 mb-8'>
              {step === 1 ? (
                <>
                  <FormHeader
                    title='QHacks 2025 Interest Form'
                    subheader='All inputs on this page are mandatory'
                  />
                  <WordInput
                    title='First Name*'
                    input={firstName}
                    setInput={setFirstName}
                    placeholder='First Name'
                  />

                  {error1 !== "" ? showValidationError(error1) : null}

                  <WordInput
                    title='Last Name*'
                    input={lastName}
                    setInput={setLastName}
                    placeholder='Last Name'
                  />

                  {error2 !== "" ? showValidationError(error2) : null}

                  <DropdownInput
                    title={"Age*"}
                    type={DropdownTypes.age}
                    value={age}
                    setValue={setAge}
                  />

                  {error3 !== "" ? showValidationError(error3) : null}
                </>
              ) : step === 2 ? (
                <>
                  <FormHeader
                    title='QHacks 2025 Interest Form'
                    subheader='All inputs on this page are mandatory'
                  />
                  <PhoneInput
                    title='Phone Number*'
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    placeholder='(###) ###-###'
                  />

                  {error1 !== "" ? showValidationError(error1) : null}

                  <EmailInput
                    title='Email*'
                    email={email}
                    setEmail={setEmail}
                    placeholder='your@example.com'
                  />

                  {error2 !== "" ? showValidationError(error2) : null}
                </>
              ) : step === 3 ? (
                <>
                  <FormHeader
                    title='QHacks 2025 Interest Form'
                    subheader='All inputs on this page are mandatory'
                  />
                  <DropdownInput
                    title={"School*"}
                    type={DropdownTypes.school}
                    value={school}
                    setValue={setSchool}
                  />

                  {error1 !== "" ? showValidationError(error1) : null}

                  <DropdownInput
                    title={"Level Of Study*"}
                    type={DropdownTypes.levelOfStudy}
                    value={levelOfStudy}
                    setValue={setLevelOfStudy}
                  />

                  {error2 !== "" ? showValidationError(error2) : null}

                  <DropdownInput
                    title={"Country*"}
                    type={DropdownTypes.country}
                    value={country}
                    setValue={setCountry}
                  />

                  {error3 !== "" ? showValidationError(error3) : null}
                </>
              ) : step === 4 ? (
                <>
                  <FormHeader
                    title='QHacks 2025 Interest Form'
                    subheader='All inputs on this page are optional'
                  />
                  <DropdownInput
                    title={"Dietary Restrictions (optional)"}
                    type={DropdownTypes.dietaryRestriction}
                    value={dietaryRestriction}
                    setValue={setDietaryRestriction}
                  />
                  <DropdownInput
                    title={"Underrepresented (optional)"}
                    type={DropdownTypes.isUnderrepresented}
                    value={isUnderrepresented}
                    setValue={setIsUnderrepresented}
                  />
                </>
              ) : step === 5 ? (
                <>
                  <FormHeader
                    title='QHacks 2025 Interest Form'
                    subheader='All inputs on this page are optional'
                  />
                  <DropdownInput
                    title={"Gender (optional)"}
                    type={DropdownTypes.gender}
                    value={origInputGender}
                    setValue={setOrigInputGender}
                  />
                  {origInputGender === "Prefer to self-describe" ? (
                    <WordInput
                      title='Self-Describe Your Gender'
                      input={gender}
                      setInput={setGender}
                      placeholder='Self-Describe Your Gender'
                    />
                  ) : null}
                  <DropdownInput
                    title={"Pronouns (optional)"}
                    type={DropdownTypes.pronouns}
                    value={origInputPronoun}
                    setValue={setOrigInputPronoun}
                  />
                  {origInputPronoun === "Prefer to self-describe" ? (
                    <WordInput
                      title='Self-Describe Your Pronoun(s)'
                      input={pronoun}
                      setInput={setPronoun}
                      placeholder='Self-Describe Your Pronoun(s)'
                    />
                  ) : null}
                </>
              ) : step === 6 ? (
                <>
                  <FormHeader
                    title='QHacks 2025 Interest Form'
                    subheader='All inputs on this page are optional'
                  />
                  <DropdownInput
                    title={"Ethnicity (optional)"}
                    type={DropdownTypes.ethnicity}
                    value={origInputEthnicity}
                    setValue={setOrigInputEthnicity}
                  />
                  {origInputEthnicity === "Prefer to self-describe" ? (
                    <WordInput
                      title='Self-Describe Your Ethnicity'
                      input={ethnicity}
                      setInput={setEthnicity}
                      placeholder='Self-Describe Your Ethnicity'
                    />
                  ) : null}
                  <DropdownInput
                    title={"Sexuality (optional)"}
                    type={DropdownTypes.sexuality}
                    value={origInputSexuality}
                    setValue={setOrigInputSexuality}
                  />
                  {origInputSexuality === "Prefer to self-describe" ? (
                    <WordInput
                      title='Self-Describe Your Sexual Identity'
                      input={sexuality}
                      setInput={setSexuality}
                      placeholder='Self-Describe Your Sexual Identity'
                    />
                  ) : null}
                </>
              ) : step === 7 ? (
                <>
                  <FormHeader
                    title='QHacks 2025 Interest Form'
                    subheader='All inputs on this page are optional'
                  />
                  <DropdownInput
                    title={"Highest Level Of Education (optional)"}
                    type={DropdownTypes.highestEdu}
                    value={highestEdu}
                    setValue={setHighestEdu}
                  />
                  <DropdownInput
                    title={"Field Of Study (optional)"}
                    type={DropdownTypes.fieldOfStudy}
                    value={origInputFieldOfStudy}
                    setValue={setOrigInputFieldOfStudy}
                  />
                  {origInputFieldOfStudy === "Other (please specify)" ? (
                    <WordInput
                      title='Self-Describe Your Major'
                      input={fieldOfStudy}
                      setInput={setFieldOfStudy}
                      placeholder='Self-Describe Your Major'
                    />
                  ) : null}
                  <DropdownInput
                    title={"Shirt Size (optional)"}
                    type={DropdownTypes.shirtSize}
                    value={shirtSize}
                    setValue={setShirtSize}
                  />
                </>
              ) : step === 8 ? (
                // TODO: Style the checkboxes properly
                <div>
                  <FormHeader
                    title='Major League Hacking Partnership Fields'
                    subheader='Mandatory fields marked with an asterisk (*)'
                  />
                  <div className='flex justify-start items-start pt-8'>
                    <input
                      type='checkbox'
                      onChange={(e) => setCheckedMLHCode(e.target.checked)}
                      checked={checkedMLHCode}
                      className='w-5 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
                    />
                    <label htmlFor='mlh-codeofconduct' className="w-full">
                      <p className='indent-1'>
                        I have read and agree to the{" "}
                        <a
                          href='https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md'
                          className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
                        >
                          MLH Code of Conduct.
                        </a>
                        *
                      </p>
                    </label>
                  </div>

                  {error1 !== "" ? showValidationError(error1) : null}

                  <div className='flex justify-start items-start pt-8'>
                    <input
                      type='checkbox'
                      onChange={(e) => setCheckedMLHPrivacy(e.target.checked)}
                      checked={checkedMLHPrivacy}
                      className='w-5 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
                    />
                    <label className="w-full">
                      <p className='indent-1'>
                        I authorize you to share my application/registration
                        information with Major League Hacking for event
                        administration, ranking, and MLH administration in-line
                        with the{" "}
                        <a
                          href='https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md'
                          className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
                        >
                          MLH Privacy Policy.
                        </a>{" "}
                        I further agree to the terms of both the{" "}
                        <a
                          href='https://github.com/MLH/mlh-policies/blob/main/contest-terms.md'
                          className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
                        >
                          MLH Contest Terms and Conditions
                        </a>{" "}
                        and the{" "}
                        <a
                          href='https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md'
                          className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
                        >
                          MLH Privacy Policy.
                        </a>
                        *
                      </p>
                    </label>
                  </div>

                  {error2 !== "" ? showValidationError(error2) : null}

                  <div className='flex justify-start items-start pt-8'>
                    <input
                      type='checkbox'
                      onChange={(e) =>
                        setCheckedMLHSendEmails(e.target.checked)
                      }
                      checked={checkedMLHSendEmails}
                      className='w-5 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
                    />
                    <label className="w-full">
                      <p className='indent-1'>
                        I authorize MLH to send me occasional emails about
                        relevant events, career opportunities, and community
                        announcements.
                      </p>
                    </label>
                  </div>
                </div>
              ) : step === 9 ? (
                <FormHeader
                  title='Submit QHacks 2025 Interest Form'
                  subheader='Press the finish button to submit, or press back to make changes'
                />
              ) : null}
            </div>
            <div className='flex justify-between items-center'>
              {step > 1 && step <= 9 ? (
                <button
                  className='text-white border border-blue-700 hover:bg-blue-100 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  onClick={() => prev()}
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}
              {step < 9 ? (
                <button
                  className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  onClick={() => validateInputs()}
                >
                  Next
                </button>
              ) : step === 9 ? (
                <button
                  className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  onClick={() => save()}
                >
                  Finish
                </button>
              ) : null}
            </div>

            {step === 10 ? (
              <FormHeader
                title={
                  errorMessage
                    ? errorMessage
                    : "Your Response Has Been Recorded"
                }
                subheader=''
              />
            ) : (
              <progress
                value={step / 9}
                className='mt-20 h-1 w-full border-none rounded-lg [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-[#ffffff54] [&::-webkit-progress-value]:bg-white'
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
