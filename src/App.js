import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEW_API
  country="in"
  pageSize=9
  render() {
    return (
      <div>
        <Router>
          <Navbar title="Kal Tak" />
        <Switch>
          <Route exact path="/">             <News apiKey={this.apiKey} key="general"       pageSize={this.pageSize} country={this.country} category="general"/></Route> 
          <Route exact path="/business">     <News apiKey={this.apiKey} key="business"      pageSize={this.pageSize} country={this.country} category="business"/></Route> 
          <Route exact path="/entertainment"><News apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment"/></Route> 
          <Route exact path="/general">      <News apiKey={this.apiKey} key="general"       pageSize={this.pageSize} country={this.country} category="general"/></Route> 
          <Route exact path="/health">       <News apiKey={this.apiKey} key="health"        pageSize={this.pageSize} country={this.country} category="health"/></Route> 
          <Route exact path="/science">      <News apiKey={this.apiKey} key="science"       pageSize={this.pageSize} country={this.country} category="science"/></Route> 
          <Route exact path="/sports">       <News apiKey={this.apiKey} key="sports"        pageSize={this.pageSize} country={this.country} category="sports"/></Route> 
          <Route exact path="/technology">   <News apiKey={this.apiKey} key="technology"    pageSize={this.pageSize} country={this.country} category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    );
  }
}
