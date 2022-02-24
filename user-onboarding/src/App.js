import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Form from "./Components/Form";
import schema from "./Validation/schema";
import * as yup from "yup";


const initialFormValues = {
  username: "",
  password: "",
  email: "",
  tos: false,
};

const initialFormErrors = {
  username: "",
  password: "",
  email: "",
  tos: "",
};

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const validation = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  

  const submitForm = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then (res => {
      setUsers([res.data, ...users])
    })
    .catch(err => console.log(err))
  };

  const onChange = (name, value) => {
    validation(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="App">
      <Form
        values={formValues}
        change={onChange}
        submit={submitForm}
        errors={formErrors}
      />
      
    </div>
  );
}

export default App;
