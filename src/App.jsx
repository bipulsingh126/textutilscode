import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textarea from './components/Textarea';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
   setAlert({
      message: message,
      type: type
    })
  }
const togglemode =()=>{
  if(mode === 'light'){   
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark Mode Activated" , "success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode Activated" , "success");
  }
}
  return (
    <>
   
   <Navbar title="Textutils" mode={mode} toggleMode={togglemode} />
   <Alert   alert ={alert}/>
   <div className="container my-3">
   <Textarea heading="Enter the text to be processed" mode={mode} showAlert={showAlert} />
   </div>
    </>
  );
}

export default App;