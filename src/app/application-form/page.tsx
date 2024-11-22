"use client";

import DropdownInput from "@/src/components/application-form/dropdownInput";
import EmailInput from "@/src/components/application-form/emailInput";
import FormHeader from "@/src/components/application-form/header";
import PhoneInput from "@/src/components/application-form/phoneInput";
import WordInput from "@/src/components/application-form/wordInput";
import { ValidationErrors, schema } from "./validate";
import {
  DropdownTypes,
  ethnicities,
  fieldsOfStudy,
  genders,
  pronouns,
  sexualities,
} from "@/src/data/dropdown-options/options";
import {
  ApplicationFormData,
  checkOrFetchApplicationStatus,
  getInterestFormData,
  InterestFormData,
  ShirtSize,
  updateUserData,
} from "@/src/firebase/userData";
import { useEffect, useState } from "react";
import React from "react";
import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import "./styles.css";
import { auth } from "@/src/firebase/config";
import { useRouter } from "next/navigation";
import ParagraphInput from "@/src/components/application-form/paragraphInput";

import Waves from "@/src/components/waves";

// TODO: Make an enum for the DropdownType (to not use strings)
function Page(props: any) {
  const router = useRouter();

  useEffect(() => {
    if (auth.currentUser === null || !auth.currentUser?.emailVerified) {
      router.replace("signin");
    } else if (auth.currentUser) {
      prepopulateFormFields();
    }
  }, [router]);

  const [step, setStep] = useState(1);
  const [data, setData] = useState();
  const [isFinished, setIsFinished] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const [teammate1, setTeammate1] = useState("");
  const [teammate2, setTeammate2] = useState("");
  const [teammate3, setTeammate3] = useState("");

  const [applicationQuestion1, setApplicationQuestion1] = useState("");
  const [applicationQuestion2, setApplicationQuestion2] = useState("");

  const [travellingFromCity, setTravellingFromCity] = useState("");
  const [needsBussing, setNeedsBussing] = useState("");

  const [githubProfile, setGithubProfile] = useState("");
  const [linkedinProfile, setLinkedinProfile] = useState("");
  const [personalWebsite, setPersonalWebsite] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(-1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [levelOfStudy, setLevelOfStudy] = useState("");
  const [country, setCountry] = useState("");
  const [dietaryRestriction, setDietaryRestriction] = useState("");
  const [isUnderrepresented, setIsUnderrepresented] = useState<string | null>(
    null
  );
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

    firstError = errors.includes(ValidationErrors.CITY_ERROR)
      ? ValidationErrors.CITY_ERROR
      : errors.includes(ValidationErrors.APPLICATION_QUESTION_ERROR)
      ? ValidationErrors.APPLICATION_QUESTION_ERROR
      : errors.includes(ValidationErrors.FIRST_NAME_ERROR)
      ? ValidationErrors.FIRST_NAME_ERROR
      : errors.includes(ValidationErrors.PHONE_NUMBER_ERROR)
      ? ValidationErrors.PHONE_NUMBER_ERROR
      : errors.includes(ValidationErrors.SCHOOL_ERROR)
      ? ValidationErrors.SCHOOL_ERROR
      : errors.includes(ValidationErrors.DIETARY_RESTRICTIONS_ERROR)
      ? ValidationErrors.DIETARY_RESTRICTIONS_ERROR
      : errors.includes(ValidationErrors.GENDER_ERROR)
      ? ValidationErrors.GENDER_ERROR
      : errors.includes(ValidationErrors.FIELD_OF_STUDY_ERROR)
      ? ValidationErrors.FIELD_OF_STUDY_ERROR
      : errors.includes(ValidationErrors.MLH_CODE_ERROR)
      ? ValidationErrors.MLH_CODE_ERROR
      : "";

    secondError = errors.includes(ValidationErrors.LAST_NAME_ERROR)
      ? ValidationErrors.LAST_NAME_ERROR
      : errors.includes(ValidationErrors.EMAIL_ERROR)
      ? ValidationErrors.EMAIL_ERROR
      : errors.includes(ValidationErrors.LEVEL_OF_STUDY_ERROR)
      ? ValidationErrors.LEVEL_OF_STUDY_ERROR
      : errors.includes(ValidationErrors.PRONOUNS_ERROR)
      ? ValidationErrors.PRONOUNS_ERROR
      : errors.includes(ValidationErrors.ETHNICITY_ERROR)
      ? ValidationErrors.ETHNICITY_ERROR
      : errors.includes(ValidationErrors.SHIRT_SIZE_ERROR)
      ? ValidationErrors.SHIRT_SIZE_ERROR
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

  useEffect(() => {
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
  }, [
    isUnderrepresented,
    origInputGender,
    origInputPronoun,
    origInputEthnicity,
    origInputSexuality,
    origInputFieldOfStudy,
  ]);

  const showValidationError = (error: string) => {
    return (
      <p className='text-white bg-red-500 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center'>
        {error}
      </p>
    );
  };

  const next = () => {
    // Remove any validation errors
    setErrors([]);

    if (step < 13) {
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

    if (step < 6) {
      // Only validate on pages 2, 3, 4, 5, 6, 11 (see else-if for 11)
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
      } else if (step === 4) {
        inputs = {
          applicationQuestion1: applicationQuestion1,
          applicationQuestion2: applicationQuestion2,
        };
      } else if (step === 5) {
        inputs = {
          travellingFromCity: travellingFromCity,
          needsBussing: needsBussing,
        };
      }

      awaitValidation(inputs, step - 1);
    } else if (step === 8) {
      inputs = {
        dietaryRestriction: dietaryRestriction,
        ethnicity: ethnicity,
      };
      awaitValidation(inputs, 5);
    } else if (step === 9) {
      inputs = {
        gender: gender,
        pronouns: pronoun,
      };
      awaitValidation(inputs, 6);
    } else if (step === 10) {
      inputs = {
        fieldOfStudy: fieldOfStudy,
        shirtSize: shirtSize,
      };
      awaitValidation(inputs, 7);
    } else if (step === 12) {
      inputs = {
        checkedMLHCode: checkedMLHCode,
        checkedMLHPrivacy: checkedMLHPrivacy,
      };

      awaitValidation(inputs, 8);
    } else {
      next();
    }
  }

  async function awaitValidation(inputs: any, arrayIndex: number) {
    let validForm = await schema[arrayIndex].isValid(inputs);
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

  // For anyone who made an interest form response, pre-populate their responses here so they don't have to do it again
  async function prepopulateFormFields() {
    const applicationForm = await checkOrFetchApplicationStatus(true);

    // Means we successfully fetched a pre-existing application (not interest form)
    if (applicationForm && typeof applicationForm !== "boolean") {
      setTeammate1(applicationForm.teammate1 ?? "");
      setTeammate2(applicationForm.teammate2 ?? "");
      setTeammate3(applicationForm.teammate3 ?? "");

      setApplicationQuestion1(applicationForm.applicationQuestion1);
      setApplicationQuestion2(applicationForm.applicationQuestion2);

      setTravellingFromCity(applicationForm.travellingFromCity);
      setNeedsBussing(applicationForm.needsBussing);

      setGithubProfile(applicationForm.githubProfile ?? "");
      setLinkedinProfile(applicationForm.linkedinProfile ?? "");
      setPersonalWebsite(applicationForm.personalWebsite ?? "");

      setSharedFieldsForPrepopulation(applicationForm);
    } else {
      // Otherwise, try to fetch an interest form for the user
      const interestFormData: InterestFormData | undefined =
        await getInterestFormData();
      if (interestFormData) {
        setSharedFieldsForPrepopulation(interestFormData);
      }
    }
  }

  function setSharedFieldsForPrepopulation(
    formData: InterestFormData | ApplicationFormData
  ) {
    // Mandatory inputs
    setFirstName(formData.firstName);
    setLastName(formData.lastName);
    setAge(formData.age);
    setPhoneNumber(formData.phoneNumber);
    setEmail(formData.email);
    setSchool(formData.school);
    setLevelOfStudy(formData.levelOfStudy);
    setCountry(formData.country);

    // Non mandatory inputs
    // Skipped "Underrepresented" because data didn't seem to save consistently (sometimes was string, sometimes was boolean)
    if (typeof formData.underrepresented === "boolean") {
      setIsUnderrepresented(formData.underrepresented ? "Yes" : "No");
    } else {
      setIsUnderrepresented(formData.underrepresented ?? null);
    }

    setDietaryRestriction(formData.dietaryRestrictions ?? "");

    if (formData.gender !== undefined && formData.gender !== "") {
      const exists = genders.some((item) => item.value === formData.gender);
      if (exists) {
        setOrigInputGender(formData.gender);
      } else {
        setOrigInputGender("Prefer to self-describe");
        setGender(formData.gender);
      }
    } else {
      setOrigInputGender("");
    }
    if (formData.pronouns !== undefined && formData.pronouns !== "") {
      const exists = pronouns.some((item) => item.value === formData.pronouns);
      if (exists) {
        setOrigInputPronoun(formData.pronouns);
      } else {
        setOrigInputPronoun("Prefer to self-describe");
        setPronoun(formData.pronouns);
      }
    } else {
      setOrigInputPronoun("");
    }

    if (formData.ethnicity !== undefined && formData.ethnicity !== "") {
      const exists = ethnicities.some(
        (item) => item.value === formData.ethnicity
      );
      if (exists) {
        setOrigInputEthnicity(formData.ethnicity);
      } else {
        setOrigInputEthnicity("Prefer to self-describe");
        setEthnicity(formData.ethnicity);
      }
    } else {
      setOrigInputEthnicity("");
    }

    if (
      formData.sexualIdentity !== undefined &&
      formData.sexualIdentity !== ""
    ) {
      const exists = sexualities.some(
        (item) => item.value === formData.sexualIdentity
      );
      if (exists) {
        setOrigInputSexuality(formData.sexualIdentity);
      } else {
        setOrigInputSexuality("Prefer to self-describe");
        setSexuality(formData.sexualIdentity);
      }
    } else {
      setOrigInputSexuality("");
    }

    if (formData.studyMajor !== undefined && formData.studyMajor !== "") {
      const exists = fieldsOfStudy.some(
        (item) => item.value === formData.studyMajor
      );
      if (exists) {
        setOrigInputFieldOfStudy(formData.studyMajor);
      } else {
        setOrigInputFieldOfStudy("Other (please specify)");
        setFieldOfStudy(formData.studyMajor);
      }
    } else {
      setOrigInputFieldOfStudy("");
    }

    setHighestEdu(formData.highestEducationCompleted ?? "");
    setShirtSize(formData.shirtSize ?? ShirtSize.na);

    // Skipping MLH checkboxes to make sure they confirm again
  }

  const save = () => {
    const inputtedData: ApplicationFormData = {
      firstName: firstName,
      lastName: lastName,

      teammate1: teammate1,
      teammate2: teammate2,
      teammate3: teammate3,
      applicationQuestion1: applicationQuestion1,
      applicationQuestion2: applicationQuestion2,
      travellingFromCity: travellingFromCity,
      needsBussing: needsBussing,
      githubProfile: githubProfile,
      linkedinProfile: linkedinProfile,
      personalWebsite: personalWebsite,

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
      highestEducationCompleted: highestEdu,
      shirtSize: shirtSize,
      studyMajor: fieldOfStudy,
      acceptMLHCodeOfConduct: checkedMLHCode,
      acceptMLHPrivacyPolicy: checkedMLHPrivacy,
      acceptMLHEmails: checkedMLHSendEmails,
    };
    updateUserData({ userData: inputtedData }).then((err) => {
      if (err) {
        setErrorMessage(err);
      }
      setIsFinished(true);

      setStep(13);
    });
  };

  return (
    <div className={`flex h-screen w-screen`}>
      <Link href='/' className='p-5 absolute z-50'>
        <IoIosClose size={50} />
      </Link>

      <div className='flex-1 h-full w-full justify-center align-middle content-center'>
        <div className='z-0'>
          <Waves />
        </div>
        <main className='p-4 pb-8  place-content-center flex justify-center w-full'>
          <div className='md:m-10 p-10 w-full rounded-lg sm:p-8 grow justify-center z-40'>
            <div className='grid gap-6 mb-8 z-40'>
              {step === 1 ? (
                <>
                  <FormHeader
                    title='QHacks 2025 Application Form'
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
                    title='QHacks 2025 Application Form'
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
                    title='QHacks 2025 Application Form'
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
                    title='QHacks 2025 Application Form'
                    subheader='These questions are mandatory. Resize the input fields if you need more space.'
                  />
                  <ParagraphInput
                    title='Why do you want to participate in QHacks? (Please limit your response to less than 300 words.)*'
                    input={applicationQuestion1}
                    setInput={setApplicationQuestion1}
                    placeholder=''
                  />

                  <ParagraphInput
                    title='Please tell us about a project that you would like to build at QHacks! (Please limit your response to less than 200 words.)*'
                    input={applicationQuestion2}
                    setInput={setApplicationQuestion2}
                    placeholder=''
                  />

                  {error1 !== "" ? showValidationError(error1) : null}
                </>
              ) : step === 5 ? (
                <>
                  <FormHeader
                    title='QHacks 2025 Application Form'
                    subheader='All inputs on this page are mandatory'
                  />
                  <DropdownInput
                    title={"Will you be travelling from any of these cities?*"}
                    type={DropdownTypes.travelOptions}
                    value={travellingFromCity}
                    setValue={setTravellingFromCity}
                  />

                  <DropdownInput
                    title={
                      "Bussing will be available both to and from Toronto for the event, will you need to use this bus? (First come first serve, RSVPs sent out close to the event)*"
                    }
                    type={DropdownTypes.busNeeded}
                    value={needsBussing}
                    setValue={setNeedsBussing}
                  />

                  {error1 !== "" ? showValidationError(error1) : null}
                </>
              ) : step === 6 ? (
                <>
                  <FormHeader
                    title='QHacks 2025 Application Form'
                    subheader='These questions are NON mandatory. Upload all profiles you have available.'
                  />
                  <WordInput
                    title='Upload your GitHub profile (link) here if you have one.'
                    input={githubProfile}
                    setInput={setGithubProfile}
                    placeholder='https://github.com/{example-username}'
                  />
                  <WordInput
                    title='Upload your Linkedin profile (link) here if you have one.'
                    input={linkedinProfile}
                    setInput={setLinkedinProfile}
                    placeholder='https://www.linkedin.com/in/{example-username}/'
                  />
                  <WordInput
                    title='Upload your personal website (link) here if you have one.'
                    input={personalWebsite}
                    setInput={setPersonalWebsite}
                    placeholder='https://{your-website-domain}'
                  />
                </>
              ) : step === 7 ? (
                <>
                  <FormHeader
                    title='QHacks 2025 Application Form'
                    subheader='Let us know if you have team! Enter the name of your teammate(s) below. EACH INDIVIDUAL TEAMMATE MUST APPLY. Maximum of 4 people per team (including the applicant). Teams can be changed at any point until the hackathon weekend.'
                  />
                  <WordInput
                    title='Teammate 1'
                    input={teammate1}
                    setInput={setTeammate1}
                    placeholder='First Name, Last Name'
                  />
                  <WordInput
                    title='Teammate 2'
                    input={teammate2}
                    setInput={setTeammate2}
                    placeholder='First Name, Last Name'
                  />
                  <WordInput
                    title='Teammate 3'
                    input={teammate3}
                    setInput={setTeammate3}
                    placeholder='First Name, Last Name'
                  />
                </>
              ) : step === 8 ? (
                <>
                  <FormHeader
                    title='QHacks 2025 Application Form'
                    subheader='These questions are mandatory. The information provided in this section is collected solely for demographic purposes and will not influence the outcome of your application. This data may be shared with our sponsors in aggregate or anonymized form.'
                  />
                  <DropdownInput
                    title={"Dietary Restrictions*"}
                    type={DropdownTypes.dietaryRestriction}
                    value={dietaryRestriction}
                    setValue={setDietaryRestriction}
                  />
                  {error1 !== "" ? showValidationError(error1) : null}

                  <DropdownInput
                    title={"Ethnicity*"}
                    type={DropdownTypes.ethnicity}
                    value={origInputEthnicity}
                    setValue={setOrigInputEthnicity}
                  />
                  {error2 !== "" ? showValidationError(error2) : null}

                  {origInputEthnicity === "Prefer to self-describe" ? (
                    <WordInput
                      title='Self-Describe Your Ethnicity'
                      input={ethnicity}
                      setInput={setEthnicity}
                      placeholder='Self-Describe Your Ethnicity'
                    />
                  ) : null}
                </>
              ) : step === 9 ? (
                <>
                  <FormHeader
                    title='QHacks 2025 Application Form'
                    subheader='These questions are mandatory. The information provided in this section is collected solely for demographic purposes and will not influence the outcome of your application. This data may be shared with our sponsors in aggregate or anonymized form.'
                  />

                  <DropdownInput
                    title={"Gender*"}
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
                  {error1 !== "" ? showValidationError(error1) : null}

                  <DropdownInput
                    title={"Pronouns*"}
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
                  {error2 !== "" ? showValidationError(error2) : null}
                </>
              ) : step === 10 ? (
                <>
                  <FormHeader
                    title='QHacks 2025 Application Form'
                    subheader='These questions are mandatory. The information provided in this section is collected solely for demographic purposes and will not influence the outcome of your application. This data may be shared with our sponsors in aggregate or anonymized form.'
                  />

                  <DropdownInput
                    title={"Field Of Study*"}
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
                  {error1 !== "" ? showValidationError(error1) : null}

                  <DropdownInput
                    title={"Shirt Size*"}
                    type={DropdownTypes.shirtSize}
                    value={shirtSize}
                    setValue={setShirtSize}
                  />
                  {error2 !== "" ? showValidationError(error2) : null}
                </>
              ) : step === 11 ? (
                <>
                  <FormHeader
                    title='QHacks 2025 Application Form'
                    subheader='All inputs on this page are optional and will NOT be used to accept attendees. However, please note that this info may be shared with our sponsors.'
                  />
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
                  <DropdownInput
                    title={"Underrepresented (optional)"}
                    type={DropdownTypes.isUnderrepresented}
                    value={isUnderrepresented}
                    setValue={setIsUnderrepresented}
                  />
                  <DropdownInput
                    title={"Highest Level Of Education (optional)"}
                    type={DropdownTypes.highestEdu}
                    value={highestEdu}
                    setValue={setHighestEdu}
                  />
                </>
              ) : step === 12 ? (
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
                      className='w-5 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none'
                    />
                    <label htmlFor='mlh-codeofconduct' className='w-full'>
                      <p className='indent-1 text-base font-medium'>
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
                      className='w-5 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none '
                    />
                    <label className='w-full'>
                      <p className='indent-1 text-base font-medium'>
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
                      className='w-5 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none '
                    />
                    <label className='w-full'>
                      <p className='indent-1 text-base font-medium'>
                        I authorize MLH to send me occasional emails about
                        relevant events, career opportunities, and community
                        announcements.
                      </p>
                    </label>
                  </div>
                </div>
              ) : step === 13 && !isFinished ? (
                <FormHeader
                  title='Submit QHacks 2025 Application Form'
                  subheader='Press the finish button to submit, or press back to make changes'
                />
              ) : null}
            </div>
            <div className='flex justify-between items-center'>
              {step > 1 && step <= 13 && !isFinished ? (
                <button
                  className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center '
                  onClick={() => prev()}
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}
              {step < 13 && !isFinished ? (
                <button
                  className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center '
                  onClick={() => validateInputs()}
                >
                  Next
                </button>
              ) : step === 13 && !isFinished ? (
                <button
                  className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center'
                  onClick={() => {
                    save();
                    // router.push("/");
                  }}
                >
                  Finish
                </button>
              ) : null}
            </div>

            {step === 13 && isFinished ? (
              <div className='flex justify-center flex-col items-center align-middle'>
                <FormHeader
                  title={
                    errorMessage
                      ? errorMessage
                      : "Your Response Has Been Recorded"
                  }
                  subheader=''
                />
                <button
                  className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center mt-11'
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  Home
                </button>
              </div>
            ) : (
              <progress
                value={step / 13}
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
