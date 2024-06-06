"use client";

import DropdownInput from "@/src/components/interest-form/dropdownInput";
import EmailInput from "@/src/components/interest-form/emailInput";
import FormHeader from "@/src/components/interest-form/header";
import PhoneInput from "@/src/components/interest-form/phoneInput";
import WordInput from "@/src/components/interest-form/wordInput";
import { InterestFormData } from "@/src/firebase/userData";
import { useEffect, useState } from "react";

// TODO: Make an enum for the DropdownType (to not use strings)
function Page(props: any) {
  const [step, setStep] = useState(1)
  const [data, setData] = useState()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(-1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [levelOfStudy, setLevelOfStudy] = useState("");
  const [country, setCountry] = useState("");
  const [dietaryRestriction, setDietaryRestriction] = useState("");
  const [isUnderrepresented, setIsUnderrepresented] = useState();
  const [gender, setGender] = useState("");
  const [pronoun, setPronoun] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [sexuality, setSexuality] = useState("");
  const [higestEdu, setHighestEdu] = useState("");
  const [shirtSize, setShirtSize] = useState();
  const [fieldOfStudy, setFieldOfStudy] = useState("");

  useEffect(() => {
    console.log('item value:' + JSON.stringify(props?.item))
    console.log('data value:' + JSON.stringify(data))
    if (props?.item?.data) {
      setData(() => ({ ...props.item.data }))
    }
  }, [props.item])

  const next = () => {
    if (step < 7) {
      setStep((prev) => prev + 1)
    }
  }

  const prev = () => {
    if (step > 1) {
      setStep((prev) => prev - 1)
    }
  }

  // TODO: Validation of data is required
  const save = () => {
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
      underrepresented: isUnderrepresented,
      gender: gender,
      pronouns: pronoun,
      ethnicity: ethnicity,
      sexualIdentity: sexuality,
      highestEducationCompleted: higestEdu,
      shirtSize: shirtSize,
      studyMajor: fieldOfStudy
    };

    // TODO: Send this data to userData.ts
  }

  return (
    <div className="h-sreen autoflow-y-auto p-4 pb-36 bg-slate-100">
    <div className="flex">
      <div className="flex-1" >
        <main className="p-4 pb-8 bg-slate-100 place-content-center flex justify-center">
          <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 grow">
            <div className="grid gap-6 mb-8">
              {step === 1 ?
                <>
                  <FormHeader title="Mandatory Inputs" subheader="Subheader" />
                  <WordInput title="First Name" name={firstName} setName={setFirstName} placeholder="First Name" />
                  <WordInput title="Last Name" name={lastName} setName={setLastName} placeholder="Last Name" />
                  <DropdownInput type="age" age={age} setAge={setAge} />
                </>
                : step === 2 ?
                  <>
                    <FormHeader title="Mandatory Inputs" subheader="Subheader" />
                    <PhoneInput title="Phone Number" phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} placeholder="(###) ###-###" />
                    <EmailInput title="Email" email={email} setEmail={setEmail} placeholder="your@example.com" />
                  </>
                  : step === 3 ?
                    <>
                      <FormHeader title="Mandatory Inputs" subheader="Subheader" />
                      <DropdownInput type="school" school={school} setSchool={setSchool} />
                      <DropdownInput type="levelOfStudy" levelOfStudy={levelOfStudy} setLevelOfStudy={setLevelOfStudy} />
                      <DropdownInput type="country" country={country} setCountry={setCountry} />
                    </>
                    : step === 4 ?
                      <>
                        <FormHeader title="Optional Inputs" subheader="Subheader" />
                        <DropdownInput type="dietary" dietaryRestriction={dietaryRestriction} setDietaryRestriction={setDietaryRestriction} />
                        <DropdownInput type="underrepresented" isUnderrepresented={isUnderrepresented} setIsUnderrepresented={setIsUnderrepresented} />
                      </>
                      : step === 5 ?
                        <>
                          <FormHeader title="Optional Inputs" subheader="Subheader" />
                          <DropdownInput type="gender" gender={gender} setGender={setGender} />
                          <DropdownInput type="pronouns" pronoun={pronoun} setPronoun={setPronoun} />
                        </>
                      : step === 6 ?
                        <>
                          <FormHeader title="Optional Inputs" subheader="Subheader" />
                          <DropdownInput type="ethnicity" ethnicity={ethnicity} setEthnicity={setEthnicity} />
                          <DropdownInput type="sexuality" sexuality={sexuality} setSexuality={setSexuality} />
                        </>
                      : step === 7 ?
                        <>
                          <FormHeader title="Optional Inputs" subheader="Subheader" />
                          <DropdownInput type="higestEducation" higestEdu={higestEdu} setHighestEdu={setHighestEdu} />
                          <DropdownInput type="fieldOfStudy" fieldOfStudy={fieldOfStudy} setFieldOfStudy={setFieldOfStudy} />
                          <DropdownInput type="shirtSize" shirtSize={shirtSize} setShirtSize={setShirtSize} />
                        </>
                      : null
              }
            </div>
            <div className="flex justify-between items-center">
              {step > 1 && step < 7 ?
                <button className="text-blue-700 border border-blue-700 hover:bg-blue-100 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => prev()}>Back</button>
                :
                <div></div>
              }
              {step < 7 ?
                <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => next()}>Next</button>
                :
                step === 7 ?
                  <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => save()}>Finish</button>
                  : null
              }
            </div>
          </div>
        </main>
      </div>
    </div>
    </div>
  );

}

export default Page;
