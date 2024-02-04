
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {BrowserRouter as Main,Route ,Routes} from 'react-router-dom';


function App() {
  const [mode,setmode]=useState('light')

  let unique={
    height : "60px"
  }

  const [alert,setalert]=useState(null)

  let showalert=(message,type)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1500)
  }

  let togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor= '#343138'
      showalert("Dark mode enabled","success")
      
    }
    else{
      setmode('light');
      document.body.style.backgroundColor= 'white'
      showalert("Dark mode disabled","success")
    }
  }

  return (
    <>
    {/* <Main> */}
    <Navbar t="TextO" mode={mode} togglemode={togglemode}/>
    <div style={unique}>
    <Alert alert={alert} />
    </div>
    
    {/* <Routes>
      <Route exact path="/" element={<TextForm heading="Analyze your text" mode={mode} showalert={showalert} />}/>
      <Route exact path="/about" element={<About mode={mode}/>}/>
    </Routes>  */}
    {/* </Main>   */}
    <TextForm heading="Analyze your text" mode={mode} showalert={showalert} />
    </>
  );
}

export default App;
