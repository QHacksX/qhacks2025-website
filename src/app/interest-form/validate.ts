import * as yup from 'yup';

const phoneRegex = /^(\([0-9]{3}\)\s?|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;

export enum ValidationErrors {
    APPLICATION_QUESTION_ERROR = "A response is required for both fields",
    CITY_ERROR = "A response is required for both fields",
    FIRST_NAME_ERROR = "First Name is Required",
    LAST_NAME_ERROR = "Last Name is Required",
    AGE_ERROR = "Age is required",
    PHONE_NUMBER_ERROR = "A valid phone number is required",
    EMAIL_ERROR = "Email is required",
    SCHOOL_ERROR = "School is required",
    LEVEL_OF_STUDY_ERROR = "Level of study is required",
    COUNTRY_ERROR = "Country of residence is required",
    MLH_CODE_ERROR = "Must accept MLH Code of Conduct",
    MLH_PRIVACY_ERROR = "Must accept MLH Contest and Privacy Policies"
}

export const schema = [
    yup.object().shape({
        firstName: yup.string().required(ValidationErrors.FIRST_NAME_ERROR),
        lastName: yup.string().required(ValidationErrors.LAST_NAME_ERROR),
        age: yup.number().required(ValidationErrors.AGE_ERROR)
    }),
    yup.object().shape({
        phoneNumber: yup.string().matches(phoneRegex, ValidationErrors.PHONE_NUMBER_ERROR),
        email: yup.string().email().required(ValidationErrors.EMAIL_ERROR)
    }),
    yup.object().shape({
        school: yup.string().required(ValidationErrors.SCHOOL_ERROR),
        levelOfStudy: yup.string().required(ValidationErrors.LEVEL_OF_STUDY_ERROR),
        country: yup.string().required(ValidationErrors.COUNTRY_ERROR)
    }),
    yup.object().shape({
        applicationQuestion1: yup.string().required(ValidationErrors.APPLICATION_QUESTION_ERROR),
        applicationQuestion2: yup.string().required(ValidationErrors.APPLICATION_QUESTION_ERROR)
    }),
    yup.object().shape({
        travellingFromCity: yup.string().required(ValidationErrors.CITY_ERROR),
        needsBussingFrom: yup.string().required(ValidationErrors.CITY_ERROR)
    }),
    yup.object().shape({
        checkedMLHCode: yup.bool().oneOf([true], ValidationErrors.MLH_CODE_ERROR),
        checkedMLHPrivacy: yup.bool().oneOf([true], ValidationErrors.MLH_PRIVACY_ERROR)
    })
]