import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  
  
  
  
  
  return (
    <div className="App">
      <Form
      values={formValues}
      onChange={inputChange}
      onSubmit={formSubmit}
      
      />
    </div>
  );
}

export default App;
