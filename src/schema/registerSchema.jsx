import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/;
// min 6 characters,must contain 1 upper case letter, 1 lower case letter, 1 numeric digit and 1 special character.

export const registerSchema = yup.object().shape({
  name: yup.string().min(3, "Please enter a valid name").matches(/^[a-zA-Z_ ]*$/, {message: "No special character or number allowed here"}).required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Incorrect password format, must be between 6-12 characters containing at least 1 value of uppercase, lowercase, number and special character " })
    .required("Required"),
    duration:yup.string().required('Required'),
    riskScore:yup.number().min(0).max(10).required('Required'),
    goal:yup.string().required('Required'),
    amount:yup.string().min(3, "minimum is 100").required('Required'),
});

// export const advancedSchema = yup.object().shape({
//   username: yup
//     .string()
//     .min(3, "Username must be at least 3 characters long")
//     .required("Required"),
//   jobType: yup
//     .string()
//     .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
//     .required("Required"),
//   acceptedTos: yup
//     .boolean()
//     .oneOf([true], "Please accept the terms of service"),
// });