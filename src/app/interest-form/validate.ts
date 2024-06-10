import * as yup from 'yup';

const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const schema = [
    yup.object().shape({
        firstName: yup.string().required("First Name is Required"),
        lastName: yup.string().required("Last Name is Required"),
        age: yup.number().required("Age is required")
    }),
    yup.object().shape({
        phoneNumber: yup.string().matches(phoneRegex, "A valid phone number is required"),
        email: yup.string().email().required("Email is required")
    }),
    yup.object().shape({
        school: yup.string().required("School is required"),
        levelOfStudy: yup.string().required("Level of study is required"),
        country: yup.string().required("Country of residence is required")
    })
]