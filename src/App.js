

import './App.css';
import About from './component/About';

import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React,{useState} from 'react'



 
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');

  const showAlert=(message, type)=>{

    setAlert({
      msg:message,
      type: type
    })
  }
      const toggleMode=()=>{

        if(mode === 'light'){
          setMode('dark');
            document.body.style.backgroundColor ='#042743';
            showAlert("Dark Mode has been enabled","success");
            document.title="Textutils- dark mode";
        }
        else{
         setMode('light');
         
         document.body.style.backgroundColor ='white';
             showAlert("Light Mode has been enabled","success");
              document.title="Textutils- Light Mode";
        }
     } 

  return (
    <>
   
        <Navbar title="YCE" about="About Text" mode={mode} toggleMode={toggleMode} />

        {/* Optional: render alert */}
        {/* <Alert alert={alert} /> */}

        <div className='container my-3'>
    
           <TextForm showAlert={ showAlert} heading="Enter a Text" mode={mode} />
         <About path="/about" element={<About mode={mode} />} />
       
        </div>
 

    
    </>
  );
}

export default App;
