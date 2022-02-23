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
    .trim(),
    terms: yup.boolean().required('Accept Terms and Conditions to continue')
})

export default schema