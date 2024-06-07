import { ShirtSize } from "@/src/firebase/userData";
import { countryList } from "./countryList";
import { schoolList } from "./schoolList";

/**
 * The dropdown options we support
 */
export enum DropdownTypes {
  age,
  school,
  levelOfStudy,
  country,
  dietaryRestriction,
  isUnderrepresented,
  gender,
  pronouns,
  ethnicity,
  sexuality,
  highestEdu,
  shirtSize,
  fieldOfStudy,
}

export type DropdownConfig = {
  options: any[];
  label: string;
  placeholder: string;
};

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
  { age: 25 },
];

const schools = schoolList;

const levelsOfStudy = [
  { level: "Less than Secondary / High School" },
  { level: "Secondary / High School" },
  {
    level: "Undergraduate University (2 year - community college or similar)",
  },
  { level: "Undergraduate University (3+ year)" },
  { level: "Graduate University (Masters, Professional, Doctoral, etc)" },
  { level: "Code School / Bootcamp" },
  { level: "Other Vocational / Trade Program or Apprenticeship" },
  { level: "Post Doctorate" },
  { level: "Other" },
  { level: "I'm not currently a student" },
  { level: "Prefer not to answer" },
];

const countries = countryList;

const dietaryRestrictions = [
  { restriction: "Vegetarian" },
  { restriction: "Vegan" },
  { restriction: "Celiac Disease" },
  { restriction: "Allergies" },
  { restriction: "Kosher" },
  { restriction: "Halal" },
];

const underrepresented = [
  { category: "Yes" },
  { category: "No" },
  { category: "Unsure" },
];

const genders = [
  { gender: "Man" },
  { gender: "Woman" },
  { gender: "Non-Binary" },
  { gender: "Prefer to self-describe" },
  { gender: "Prefer Not to Answer" },
];

const pronouns = [
  { pronoun: "She/Her" },
  { pronoun: "He/Him" },
  { pronoun: "They/Them" },
  { pronoun: "She/They" },
  { pronoun: "He/They" },
  { pronoun: "Prefer to self-describe" },
  { pronoun: "Prefer Not to Answer" }
];

const ethnicities = [
  { ethnicity: "Asian Indian" },
  { ethnicity: "Black or African" },
  { ethnicity: "Chinese" },
  { ethnicity: "Filipino" },
  { ethnicity: "Guamanian or Chamorro" },
  { ethnicity: "Hispanic / Latino / Spanish Origin" },
  { ethnicity: "Japanese" },
  { ethnicity: "Korean" },
  { ethnicity: "Middle Eastern" },
  { ethnicity: "Native American or Alaskan Native" },
  { ethnicity: "Native Hawaiian" },
  { ethnicity: "Samoan" },
  { ethnicity: "Vietnamese" },
  { ethnicity: "White" },
  { ethnicity: "Other Asian (Thai, Cambodian, etc)" },
  { ethnicity: "Other Pacific Islander" },
  { ethnicity: "Prefer to self-describe" },
  { ethnicity: "Prefer Not to Answer" },
];

const sexualities = [
  { sexuality: "Heterosexual or straight" },
  { sexuality: "Gay or lesbian" },
  { sexuality: "Bisexual" },
  { sexuality: "Prefer to self-describe" },
  { sexuality: "Prefer Not to Answer" },
];

const shirtSizes = [
  { size: ShirtSize.xSmall },
  { size: ShirtSize.small },
  { size: ShirtSize.medium },
  { size: ShirtSize.large },
  { size: ShirtSize.xLarge },
  { size: ShirtSize.xxLarge },
];

const fieldsOfStudy = [
  {
    major: "Computer science, computer engineering, or software engineering",
  },
  {
    major:
      "Another engineering discipline (such as civil, electrical, mechanical, etc.)",
  },
  {
    major:
      "Information systems, information technology, or system administration",
  },
  { major: "A natural science (such as biology, chemistry, physics, etc.)" },
  { major: "Mathematics or statistics" },
  { major: "Web development or web design" },
  {
    major: "Business discipline (such as accounting, finance, marketing, etc.)",
  },
  {
    major:
      "Humanities discipline (such as literature, history, philosophy, etc.)",
  },
  {
    major:
      "Social science (such as anthropology, psychology, political science, etc.)",
  },
  {
    major:
      "Fine arts or performing arts (such as graphic design, music, studio art, etc.)",
  },
  { major: "Health science (such as nursing, pharmacy, radiology, etc.)" },
  { major: "Other (please specify)" },
  { major: "Undecided / No Declared Major" },
  { major: "My school does not offer majors / primary areas of study" },
  { major: "Prefer not to answer" },
];

/**
 * Maps a dropdown type to the config needed to render its Dropdown component
 */
export const dropdownOptions = new Map<DropdownTypes, DropdownConfig>([
  [
    DropdownTypes.age,
    {
      options: ages,
      label: "age",
      placeholder: "Select your age",
    },
  ],
  [
    DropdownTypes.school,
    {
      options: schools,
      label: "school",
      placeholder: "Select your school",
    },
  ],
  [
    DropdownTypes.levelOfStudy,
    {
      options: levelsOfStudy,
      label: "level",
      placeholder: "Select your current level of study",
    },
  ],
  [
    DropdownTypes.country,
    {
      options: countries,
      label: "country",
      placeholder: "Select your country of residence",
    },
  ],
  [
    DropdownTypes.dietaryRestriction,
    {
      options: dietaryRestrictions,
      label: "restriction",
      placeholder: "Select a dietary restriction, if applicable",
    },
  ],
  [
    DropdownTypes.isUnderrepresented,
    {
      options: underrepresented,
      label: "category",
      placeholder: "Select if you are or aren't represented",
    },
  ],
  [
    DropdownTypes.gender,
    {
      options: genders,
      label: "gender",
      placeholder: "Select your gender",
    },
  ],
  [
    DropdownTypes.pronouns,
    {
      options: pronouns,
      label: "pronoun",
      placeholder: "Select your pronouns",
    },
  ],
  [
    DropdownTypes.ethnicity,
    {
      options: ethnicities,
      label: "ethnicity",
      placeholder: "Select your ethnicity",
    },
  ],
  [
    DropdownTypes.sexuality,
    {
      options: sexualities,
      label: "sexuality",
      placeholder: "Select your sexuality",
    },
  ],
  [
    DropdownTypes.highestEdu,
    {
      options: levelsOfStudy,
      label: "level",
      placeholder: "Select your highest level of education completed thus far",
    },
  ],
  [
    DropdownTypes.shirtSize,
    {
      options: shirtSizes,
      label: "size",
      placeholder: "Select your shirt size",
    },
  ],
  [
    DropdownTypes.fieldOfStudy,
    {
      options: fieldsOfStudy,
      label: "major",
      placeholder: "Select your field of study",
    },
  ],
]);
