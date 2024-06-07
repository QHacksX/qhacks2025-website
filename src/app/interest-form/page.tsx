"use client";

import DropdownInput from "@/src/components/interest-form/dropdownInput";
import EmailInput from "@/src/components/interest-form/emailInput";
import FormHeader from "@/src/components/interest-form/header";
import PhoneInput from "@/src/components/interest-form/phoneInput";
import WordInput from "@/src/components/interest-form/wordInput";
import { DropdownTypes } from "@/src/data/dropdown-options/options";
import {
  InterestFormData,
  ShirtSize,
  updateUserData,
} from "@/src/firebase/userData";
import { useEffect, useState } from "react";

// TODO: Make an enum for the DropdownType (to not use strings)
function Page(props: any) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState({ age: -1 });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState({ school: "" });
  const [levelOfStudy, setLevelOfStudy] = useState({ level: "" });
  const [country, setCountry] = useState({ country: "" });
  const [dietaryRestriction, setDietaryRestriction] = useState({
    restriction: "",
  });
  const [isUnderrepresented, setIsUnderrepresented] = useState({
    category: "",
  });
  const [gender, setGender] = useState("");
  const [pronoun, setPronoun] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [sexuality, setSexuality] = useState("");
  const [highestEdu, setHighestEdu] = useState({ level: "" });
  const [shirtSize, setShirtSize] = useState({ shirtSize: ShirtSize.na });
  const [fieldOfStudy, setFieldOfStudy] = useState("");

  // If "Other" in the original dropdown, allows user to input custom value
  const [origInputGender, setOrigInputGender] = useState({ gender: "" });
  const [origInputPronoun, setOrigInputPronoun] = useState({ pronoun: "" });
  const [origInputEthnicity, setOrigInputEthnicity] = useState({
    ethnicity: "",
  });
  const [origInputSexuality, setOrigInputSexuality] = useState({
    sexuality: "",
  });
  const [origInputFieldOfStudy, setOrigInputFieldOfStudy] = useState({
    major: "",
  });

  useEffect(() => {
    console.log("item value:" + JSON.stringify(props?.item));
    console.log("data value:" + JSON.stringify(data));
    if (props?.item?.data) {
      setData(() => ({ ...props.item.data }));
    }
  }, [props.item, data]);

  const next = () => {
    if (step < 7) {
      setStep((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  // TODO: Validation of data is required
  const save = () => {
    let formattedIsUnderrepresented;

    if (isUnderrepresented.category === "Yes") {
      formattedIsUnderrepresented = true;
    } else if (isUnderrepresented.category === "No") {
      formattedIsUnderrepresented = false;
    }

    if (origInputGender.gender !== "Prefer to self-describe") {
      setGender(origInputGender.gender);
    }

    if (origInputPronoun.pronoun !== "Prefer to self-describe") {
      setPronoun(origInputPronoun.pronoun);
    }

    if (origInputEthnicity.ethnicity !== "Prefer to self-describe") {
      setEthnicity(origInputEthnicity.ethnicity);
    }

    if (origInputSexuality.sexuality !== "Prefer to self-describe") {
      setSexuality(origInputSexuality.sexuality);
    }

    if (origInputFieldOfStudy.major !== "Other (please specify)") {
      setFieldOfStudy(origInputFieldOfStudy.major);
    }

    const inputtedData: InterestFormData = {
      firstName: firstName,
      lastName: lastName,
      age: age.age,
      phoneNumber: phoneNumber,
      email: email,
      school: school.school,
      levelOfStudy: levelOfStudy.level,
      country: country.country,
      dietaryRestrictions: dietaryRestriction.restriction,
      underrepresented: formattedIsUnderrepresented,
      gender: gender,
      pronouns: pronoun,
      ethnicity: ethnicity,
      sexualIdentity: sexuality,
      highestEducationCompleted: highestEdu.level,
      shirtSize: shirtSize.shirtSize,
      studyMajor: fieldOfStudy,
    };
    console.log(inputtedData);
    updateUserData({ userData: inputtedData });
  };

  return (
    <div className='flex'>
      <div className='flex-1'>
        <main className='p-4 pb-8 bg-slate-100 place-content-center flex justify-center'>
          <div className='p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 grow'>
            <div className='grid gap-6 mb-8'>
              {step === 1 ? (
                <>
                  <FormHeader title='Mandatory Inputs' subheader='Subheader' />
                  <WordInput
                    title='First Name'
                    name={firstName}
                    setName={setFirstName}
                    placeholder='First Name'
                  />
                  <WordInput
                    title='Last Name'
                    name={lastName}
                    setName={setLastName}
                    placeholder='Last Name'
                  />
                  <DropdownInput
                    type={DropdownTypes.age}
                    value={age}
                    setValue={setAge}
                  />
                </>
              ) : step === 2 ? (
                <>
                  <FormHeader title='Mandatory Inputs' subheader='Subheader' />
                  <PhoneInput
                    title='Phone Number'
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    placeholder='(###) ###-###'
                  />
                  <EmailInput
                    title='Email'
                    email={email}
                    setEmail={setEmail}
                    placeholder='your@example.com'
                  />
                </>
              ) : step === 3 ? (
                <>
                  <FormHeader title='Mandatory Inputs' subheader='Subheader' />
                  <DropdownInput
                    type={DropdownTypes.school}
                    value={school}
                    setValue={setSchool}
                  />
                  <DropdownInput
                    type={DropdownTypes.levelOfStudy}
                    value={levelOfStudy}
                    setValue={setLevelOfStudy}
                  />
                  <DropdownInput
                    type={DropdownTypes.country}
                    value={country}
                    setValue={setCountry}
                  />
                </>
              ) : step === 4 ? (
                <>
                  <FormHeader title='Optional Inputs' subheader='Subheader' />
                  <DropdownInput
                    type={DropdownTypes.dietaryRestriction}
                    value={dietaryRestriction}
                    setValue={setDietaryRestriction}
                  />
                  <DropdownInput
                    type={DropdownTypes.isUnderrepresented}
                    value={isUnderrepresented}
                    setValue={setIsUnderrepresented}
                  />
                </>
              ) : step === 5 ? (
                <>
                  <FormHeader title='Optional Inputs' subheader='Subheader' />
                  <DropdownInput
                    type={DropdownTypes.gender}
                    value={gender}
                    setValue={setGender}
                  />
                  <DropdownInput
                    type={DropdownTypes.pronouns}
                    value={pronoun}
                    setValue={setPronoun}
                  />
                </>
              ) : step === 6 ? (
                <>
                  <FormHeader title='Optional Inputs' subheader='Subheader' />
                  <DropdownInput
                    type={DropdownTypes.ethnicity}
                    value={ethnicity}
                    setValue={setEthnicity}
                  />
                  <DropdownInput
                    type={DropdownTypes.sexuality}
                    value={sexuality}
                    setValue={setSexuality}
                  />
                </>
              ) : step === 7 ? (
                <>
                  <FormHeader title='Optional Inputs' subheader='Subheader' />
                  <DropdownInput
                    type={DropdownTypes.highestEdu}
                    value={highestEdu}
                    setValue={setHighestEdu}
                  />
                  <DropdownInput
                    type={DropdownTypes.fieldOfStudy}
                    value={fieldOfStudy}
                    setValue={setFieldOfStudy}
                  />
                  <DropdownInput
                    type={DropdownTypes.shirtSize}
                    value={shirtSize}
                    setValue={setShirtSize}
                  />
                </>
              ) : null}
            </div>
            <div className='flex justify-between items-center'>
              {step > 1 && step < 7 ? (
                <button
                  className='text-blue-700 border border-blue-700 hover:bg-blue-100 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  onClick={() => prev()}
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}
              {step < 7 ? (
                <button
                  className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  onClick={() => next()}
                >
                  Next
                </button>
              ) : step === 7 ? (
                <button
                  className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  onClick={() => save()}
                >
                  Finish
                </button>
              ) : null}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
