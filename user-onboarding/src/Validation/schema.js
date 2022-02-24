import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup
    .string()
    .required('Must enter name')
    .min(2, 'Needs more than 1 letter'),
    email: yup
    .string()
    .required('Must enter email')
    .trim(),
    password: yup
    .string()
    .required('Must enter password')
    .min(6, 'Password must have 6 or more characters')
    .trim(),
    terms: yup
    .boolean()
    .oneOf([true],'Accept Terms and Conditions to continue')
})

export default schema