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
  { value: 16 },
  { value: 17 },
  { value: 18 },
  { value: 19 },
  { value: 20 },
  { value: 21 },
  { value: 22 },
  { value: 23 },
  { value: 24 },
  { value: 25 },
];

const schools = schoolList;

const levelsOfStudy = [
  { value: "Less than Secondary / High School" },
  { value: "Secondary / High School" },
  {
    value: "Undergraduate University (2 year - community college or similar)",
  },
  { value: "Undergraduate University (3+ year)" },
  { value: "Graduate University (Masters, Professional, Doctoral, etc)" },
  { value: "Code School / Bootcamp" },
  { value: "Other Vocational / Trade Program or Apprenticeship" },
  { value: "Post Doctorate" },
  { value: "Other" },
  { value: "I'm not currently a student" },
  { value: "Prefer not to answer" },
];

const countries = countryList;

const dietaryRestrictions = [
  { value: "Vegetarian" },
  { value: "Vegan" },
  { value: "Celiac Disease" },
  { value: "Allergies" },
  { value: "Kosher" },
  { value: "Halal" },
];

const underrepresented = [
  { value: "Yes" },
  { value: "No" },
  { value: "Unsure" },
];

const genders = [
  { value: "Man" },
  { value: "Woman" },
  { value: "Non-Binary" },
  { value: "Prefer to self-describe" },
  { value: "Prefer Not to Answer" },
];

const pronouns = [
  { value: "She/Her" },
  { value: "He/Him" },
  { value: "They/Them" },
  { value: "She/They" },
  { value: "He/They" },
  { value: "Prefer to self-describe" },
  { value: "Prefer Not to Answer" }
];

const ethnicities = [
  { value: "Asian Indian" },
  { value: "Black or African" },
  { value: "Chinese" },
  { value: "Filipino" },
  { value: "Guamanian or Chamorro" },
  { value: "Hispanic / Latino / Spanish Origin" },
  { value: "Japanese" },
  { value: "Korean" },
  { value: "Middle Eastern" },
  { value: "Native American or Alaskan Native" },
  { value: "Native Hawaiian" },
  { value: "Samoan" },
  { value: "Vietnamese" },
  { value: "White" },
  { value: "Other Asian (Thai, Cambodian, etc)" },
  { value: "Other Pacific Islander" },
  { value: "Prefer to self-describe" },
  { value: "Prefer Not to Answer" },
];

const sexualities = [
  { value: "Heterosexual or straight" },
  { value: "Gay or lesbian" },
  { value: "Bisexual" },
  { value: "Prefer to self-describe" },
  { value: "Prefer Not to Answer" },
];

const shirtSizes = [
  { value: ShirtSize.xSmall },
  { value: ShirtSize.small },
  { value: ShirtSize.medium },
  { value: ShirtSize.large },
  { value: ShirtSize.xLarge },
  { value: ShirtSize.xxLarge },
];

const fieldsOfStudy = [
  {
    value: "Computer science, computer engineering, or software engineering",
  },
  {
    value:
      "Another engineering discipline (such as civil, electrical, mechanical, etc.)",
  },
  {
    value:
      "Information systems, information technology, or system administration",
  },
  { value: "A natural science (such as biology, chemistry, physics, etc.)" },
  { value: "Mathematics or statistics" },
  { value: "Web development or web design" },
  {
    value: "Business discipline (such as accounting, finance, marketing, etc.)",
  },
  {
    value:
      "Humanities discipline (such as literature, history, philosophy, etc.)",
  },
  {
    value:
      "Social science (such as anthropology, psychology, political science, etc.)",
  },
  {
    value:
      "Fine arts or performing arts (such as graphic design, music, studio art, etc.)",
  },
  { value: "Health science (such as nursing, pharmacy, radiology, etc.)" },
  { value: "Other (please specify)" },
  { value: "Undecided / No Declared Major" },
  { value: "My school does not offer majors / primary areas of study" },
  { value: "Prefer not to answer" },
];

/**
 * Maps a dropdown type to the config needed to render its Dropdown component
 */
export const dropdownOptions = new Map<DropdownTypes, DropdownConfig>([
  [
    DropdownTypes.age,
    {
      options: ages,
      label: "value",
      placeholder: "---",
    },
  ],
  [
    DropdownTypes.school,
    {
      options: schools,
      label: "value",
      placeholder: "---",
    },
  ],
  [
    DropdownTypes.levelOfStudy,
    {
      options: levelsOfStudy,
      label: "value",
      placeholder: "---",
    },
  ],
  [
    DropdownTypes.country,
    {
      options: countries,
      label: "value",
      placeholder: "---",
    },
  ],
  [
    DropdownTypes.dietaryRestriction,
    {
      options: dietaryRestrictions,
      label: "value",
      placeholder: "---",
    },
  ],
  [
    DropdownTypes.isUnderrepresented,
    {
      options: underrepresented,
      label: "value",
      placeholder: "---",
    },
  ],
  [
    DropdownTypes.gender,
    {
      options: genders,
      label: "value",
      placeholder: "---",
    },
  ],
  [
    DropdownTypes.pronouns,
    {
      options: pronouns,
      label: "value",
      placeholder: "---",
    },
  ],
  [
    DropdownTypes.ethnicity,
    {
      options: ethnicities,
      label: "value",
      placeholder: "---",
    },
  ],
  [
    DropdownTypes.sexuality,
    {
      options: sexualities,
      label: "value",
      placeholder: "---",
    },
  ],
  [
    DropdownTypes.highestEdu,
    {
      options: levelsOfStudy,
      label: "value",
      placeholder: "---",
    },
  ],
  [
    DropdownTypes.shirtSize,
    {
      options: shirtSizes,
      label: "value",
      placeholder: "---",
    },
  ],
  [
    DropdownTypes.fieldOfStudy,
    {
      options: fieldsOfStudy,
      label: "value",
      placeholder: "---",
    },
  ],
]);
