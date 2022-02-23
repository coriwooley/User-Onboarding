import React, {useState} from 'react';
import './App.css';
import axios from 'axios'
import Form from './Components/Form'
import schema from './Validation/schema';
import * as yup from 'yup'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  role: '',
  civil: '',
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const validate = (name,value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name,value)
    setFormValues({...formValues, [name]: value})
  }

  // const formSubmit = () => {
  //   axios.post('https://reqres.in/api/users', formValues)
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(err => console.log(err))
  // }
  
  
  
  
  
  return (
    <div className="App">
      <Form
      values={formValues}
      change={inputChange}
      onSubmit={formSubmit}
      errors={formErrors}
      
      />
    </div>
  );
}

export default App;
