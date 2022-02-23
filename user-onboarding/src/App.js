import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form'
import schema from './Validation/schema';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)


  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    
  }
  
  
  
  
  
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
