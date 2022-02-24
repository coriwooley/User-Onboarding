import * as yup from 'yup'

const schema = yup.object().shape({
   username: yup
    .string()
    .trim()
    .required('Must enter name')
    .min(2, 'Needs more than 1 letter'),
    email: yup
    .string()
    .email('Must be a valid email address')
    .required('Must enter email'),
    password: yup
    .string()
    .required('Must enter password')
    .min(6, 'Password must have 6 or more characters')
    .trim(),
    tos: yup
    .boolean()
    .oneOf([true],'Accept Terms and Conditions to continue')
})

export default schema