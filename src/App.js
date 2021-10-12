import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

let apiKey = process.env.REACT_APP_NEW_API
let country="in"
let pageSize=9


function App() {
  const [Mode, setMode] = useState("light");
  const [textmode, settextmode] = useState("black");
  const [cardmode, setcardmode] = useState("white")
  
    const ToggleMode =()=>{
        if (Mode === "light"){
            setMode("dark");
            settextmode("white")
            setcardmode("#202020")
            document.body.style.backgroundColor =  "#202020"
        }
        else {
            setcardmode("white")
            setMode("light")
            settextmode("black")
            document.body.style.backgroundColor =  "white"
        }
    }
    return (
      <div>
        <Router>
          <Navbar title="Kal Tak" textmode={textmode} togglemode={ToggleMode} />
        <Switch>
          <Route exact path="/">             <News apiKey={apiKey} key="general"       pageSize={pageSize} cardmode={cardmode} mode={Mode} textmode={textmode} country={country} category="general"/></Route> 
          <Route exact path="/business">     <News apiKey={apiKey} key="business"      pageSize={pageSize} cardmode={cardmode} mode={Mode} textmode={textmode} country={country} category="business"/></Route> 
          <Route exact path="/entertainment"><News apiKey={apiKey} key="entertainment" pageSize={pageSize} cardmode={cardmode} mode={Mode} textmode={textmode} country={country} category="entertainment"/></Route> 
          <Route exact path="/general">      <News apiKey={apiKey} key="general"       pageSize={pageSize} cardmode={cardmode} mode={Mode} textmode={textmode} country={country} category="general"/></Route> 
          <Route exact path="/health">       <News apiKey={apiKey} key="health"        pageSize={pageSize} cardmode={cardmode} mode={Mode} textmode={textmode} country={country} category="health"/></Route> 
          <Route exact path="/science">      <News apiKey={apiKey} key="science"       pageSize={pageSize} cardmode={cardmode} mode={Mode} textmode={textmode} country={country} category="science"/></Route> 
          <Route exact path="/sports">       <News apiKey={apiKey} key="sports"        pageSize={pageSize} cardmode={cardmode} mode={Mode} textmode={textmode} country={country} category="sports"/></Route> 
          <Route exact path="/technology">   <News apiKey={apiKey} key="technology"    pageSize={pageSize} cardmode={cardmode} mode={Mode} textmode={textmode} country={country} category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    );
}

export default App;