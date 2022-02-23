import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'

function App() {
  
  
  
  
  
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
