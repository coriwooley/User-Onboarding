import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Form from "./Components/Form";
import schema from "./Validation/schema";
import * as yup from "yup";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  terms: "",
};

function App() {
  const { formValues, setFormValues } = useState(initialFormValues);
  const { formErrors, setFormErrors } = useState(initialFormErrors);
  const { users, setUsers} = useState([])

  

  const formSubmit = () => {
    axios.post('https://reqres.in/api/users')
    .then(res => {
      setUsers([res.data, ...users])
    })
  };

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="App">
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}
      />
      {users.map(user => {
        <div>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
           </div>
      })}
    </div>
  );
}

export default App;
