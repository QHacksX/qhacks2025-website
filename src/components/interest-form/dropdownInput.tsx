import { Dropdown } from 'primereact/dropdown';
import { ShirtSize } from '@/src/firebase/userData';
import { countryList } from "@/src/data/dropdown-options/countryList";
import { schoolList } from "@/src/data/dropdown-options/schoolList";
import { use, useState } from 'react';

export default function DropdownInput(props: any) {
    const ages = [
        { age: 16 },
        { age: 17 },
        { age: 18 },
        { age: 19 },
        { age: 20 },
        { age: 21 },
        { age: 22 },
        { age: 23 },
        { age: 24 },
        { age: 25 }
      ]

      const schools = schoolList

      const levelsOfStudy = [
        { level: "Less than Secondary / High School" },
        { level: "Secondary / High School" },
        { level: "Undergraduate University (2 year - community college or similar)"},
        { level: "Undergraduate University (3+ year)" },
        { level: "Graduate University (Masters, Professional, Doctoral, etc)" },
        { level: "Code School / Bootcamp" },
        { level: "Other Vocational / Trade Program or Apprenticeship" },
        { level: "Post Doctorate" },
        { level: "Other" },
        { level: "I'm not currently a student" },
        { level: "Prefer not to answer" },
      ] 

      const countries = countryList

      const dietaryRestrictions = [
        { restriction: "Vegetarian" },
        { restriction: "Vegan"},
        { restriction: "Celiac Disease"},
        { restriction: "Allergies"},
        { restriction: "Kosher"},
        { restriction: "Halal"}
      ]

      const underrepresented = [
        { category: "Yes" },
        { category: "No" },
        { category: "Unsure" }
      ]

      const genders = [
        { gender: "Man" },
        { gender: "Woman" },
        { gender: "Non-Binary" },
        { gender: "Prefer to self-describe" },
        { gender: "Prefer Not to Answer" }
      ]

      const pronouns = [
        { pronoun: "She/Her" },
        { pronoun: "He/Him" },
        { pronoun: "They/Them" },
        { pronoun: "She/They" },
        { pronoun: "He/They" },
        { pronoun: "Prefer Not to Answer" },
        { pronoun: "Other" }
      ]

      const ethnicities = [
        { ethnicity: "Asian Indian"},
        { ethnicity: "Black or African"},
        { ethnicity: "Chinese"},
        { ethnicity: "Filipino"},
        { ethnicity: "Guamanian or Chamorro"},
        { ethnicity: "Hispanic / Latino / Spanish Origin"},
        { ethnicity: "Japanese"},
        { ethnicity: "Korean"},
        { ethnicity: "Middle Eastern"},
        { ethnicity: "Native American or Alaskan Native"},
        { ethnicity: "Native Hawaiian"},
        { ethnicity: "Samoan"},
        { ethnicity: "Vietnamese"},
        { ethnicity: "White"},
        { ethnicity: "Other Asian (Thai, Cambodian, etc)"},
        { ethnicity: "Other Pacific Islander"},
        { ethnicity: "Other (Please Specify)"},
        { ethnicity: "Prefer Not to Answer"}
      ]

      const sexualities = [
        { sexuality: "Heterosexual or straight"},
        { sexuality: "Gay or lesbian"},
        { sexuality: "Bisexual"},
        { sexuality: "Different identity ________"},
        { sexuality: "Prefer Not to Answer"}
      ]

      const shirtSizes = [
        { size: ShirtSize.xSmall },
        { size: ShirtSize.small },
        { size: ShirtSize.medium },
        { size: ShirtSize.large },
        { size: ShirtSize.xLarge },
        { size: ShirtSize.xxLarge }
      ]

      const fieldsOfStudy = [
        { major: "Computer science, computer engineering, or software engineering" },
        { major: "Another engineering discipline (such as civil, electrical, mechanical, etc.)" },
        { major: "Information systems, information technology, or system administration" },
        { major: "A natural science (such as biology, chemistry, physics, etc.)" },
        { major: "Mathematics or statistics" },
        { major: "Web development or web design" },
        { major: "Business discipline (such as accounting, finance, marketing, etc.)" },
        { major: "Humanities discipline (such as literature, history, philosophy, etc.)" },
        { major: "Social science (such as anthropology, psychology, political science, etc.)" },
        { major: "Fine arts or performing arts (such as graphic design, music, studio art, etc.)" },
        { major: "Health science (such as nursing, pharmacy, radiology, etc.)" },
        { major: "Other (please specify)" },
        { major: "Undecided / No Declared Major" },
        { major: "My school does not offer majors / primary areas of study" },
        { major: "Prefer not to answer" },
      ]

    if (props.type === "age") {
        return <Dropdown value={props.age} onChange={(e) => props.setAge(e.value)} options={ages} optionLabel="age" 
        placeholder="Select your age" className="w-full md:w-14rem" />
    } else if (props.type === "school") {
        return <Dropdown value={props.school} onChange={(e) => props.setSchool(e.value)} options={schools} optionLabel="school" 
        placeholder="Select your school" className="w-full md:w-14rem" />
    } else if (props.type === "levelOfStudy") {
        return <Dropdown value={props.levelOfStudy} onChange={(e) => props.setLevelOfStudy(e.value)} options={levelsOfStudy} optionLabel="level" 
        placeholder="Select your current level of study" className="w-full md:w-14rem" />
    } else if (props.type === "country") {
        return <Dropdown value={props.country} onChange={(e) => props.setCountry(e.value)} options={countries} optionLabel="country" 
        placeholder="Select your country of residence" className="w-full md:w-14rem" />
    } else if (props.type === "dietary") {
        return <Dropdown value={props.dietaryRestriction} onChange={(e) => props.setDietaryRestriction(e.value)} options={dietaryRestrictions} optionLabel="restriction" 
        placeholder="Select a dietary restriction, if applicable" className="w-full md:w-14rem" />
    } else if (props.type === "underrepresented") {
        return <Dropdown value={props.underrepresent} onChange={(e) => props.setUnderrepresent(e.value)} options={underrepresented} optionLabel="category" 
        placeholder="Select if you are or aren't represented" className="w-full md:w-14rem" />
    } else if (props.type === "gender") {
        return <Dropdown value={props.gender} onChange={(e) => props.setGender(e.value)} options={genders} optionLabel="gender" 
        placeholder="Select your gender" className="w-full md:w-14rem" />
    } else if (props.type === "pronouns") {
        return <Dropdown value={props.pronoun} onChange={(e) => props.setPronoun(e.value)} options={pronouns} optionLabel="pronoun" 
        placeholder="Select your pronouns" className="w-full md:w-14rem" />
    } else if (props.type === "ethnicity") {
        return <Dropdown value={props.ethnicity} onChange={(e) => props.setEthnicity(e.value)} options={ethnicities} optionLabel="ethnicity" 
        placeholder="Select your ethnicity" className="w-full md:w-14rem" />
    } else if (props.type === "sexuality") {
        return <Dropdown value={props.sexuality} onChange={(e) => props.setSexuality(e.value)} options={sexualities} optionLabel="sexuality" 
        placeholder="Select your sexuality" className="w-full md:w-14rem" />
    } else if (props.type === "highestEducation") {
        return <Dropdown value={props.higestEdu} onChange={(e) => props.setHighestEdu(e.value)} options={levelsOfStudy} optionLabel="level" 
        placeholder="Select your highest level of education completed thus far" className="w-full md:w-14rem" />
    } else if (props.type === "shirtSize") {
        return <Dropdown value={props.shirtSize} onChange={(e) => props.setShirtSize(e.value)} options={shirtSizes} optionLabel="size" 
        placeholder="Select your shirt size" className="w-full md:w-14rem" />
    } else if (props.type === "fieldOfStudy") {
        return <Dropdown value={props.fieldOfStudy} onChange={(e) => props.setFieldOfStudy(e.value)} options={fieldsOfStudy} optionLabel="major" 
        placeholder="Select your field of study" className="w-full md:w-14rem" />
    }
}