import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";
function App() {
  const [mode , setMode] = useState('light');

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>
  {
    setAlert({
      msg :message,
      type : type

    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Has been Enabled","success");
      document.title = "TextUtils - Dark Mode";
    }
    else
    { 
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
      document.title ="TextUtils - Light Mode";
    }
  }
  const toggleGreen = ()=>
    {
      if(mode === 'light')
      {
        setMode('green');
        document.body.style.backgroundColor = 'green';
        //document.body.style.backgroundColor = 'white'
        showAlert("Green Mode Has been Enabled","success");
      }
      else
      { 
        setMode('light');
        document.body.style.backgroundColor = 'white'
        //document.body.style.color ='black';
        showAlert("Light mode has been enabled","success")
      }
    }

  return (
    <>
    <Router>
    <Navbar title="TextUtils " mode={mode} toggleMode={toggleMode} toggleGreen={toggleGreen}/>
    <Alert alert=   {alert}/>
    <div className="container">
    <Switch>
        <Route exact path="/about">
          <About mode={mode} />
        </Route>
        <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode} /> 
        </Route>
    </Switch>
    </div>
    </Router>

     {/* <About/> */}
    
    </>
  ); 
}
 
export default App;
 