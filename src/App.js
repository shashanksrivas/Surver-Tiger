//import logo from './logo.svg';
import './App.css';
import React, { useState} from "react";
import Capture from "./Capture.PNG";
import CreateSurvey from "./CreateSurvey"
import TakeSurvey from "./TakeSurvey"

const App=()=>{
const [isVisible, setIsVisible] = useState(true);
const [isVisible2, setIsVisible2] = useState(true);
const [flag, setFlag] = useState(false);
const [flag2, setFlag2] = useState(false);

const handlechange1=()=>{
setIsVisible2(false)
setIsVisible(false)
setFlag(true)
setFlag2(false)
}
const handlechange2=()=>{
setIsVisible(false)
setIsVisible2(false)
setFlag2(true)
setFlag(false)
}

return(
    <div style={{alignContent: "center"}}>
    <img src={Capture} className="surverTigerLogo" alt="logo" />
    <br />
       <div style={{display:"flex",flexDirection:"column", justifyContent:"center"}}>
       <button onClick={() => handlechange1()} style={{ visibility: isVisible ? 'visible' : 'hidden'}}>Create Survey</button>
<br />
<br />
       <button onClick={() => handlechange2()} style={{visibility: isVisible2 ? 'visible' : 'hidden'}}>Take Survey</button>
        {flag && <CreateSurvey />}
        {flag2 && <TakeSurvey />}
        </div>
    </div>
)
}
export default App;
