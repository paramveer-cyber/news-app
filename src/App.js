import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEW_API
  country="in"
  render() {
    return (
      <div>
        <Router>
          <Navbar exact title="Kal Tak" />
          <Switch>
            <Route exact path="/"><News key="general" category="general" country={this.country} apiKey={this.apiKey}pageSize={9} /></Route>
            <Route exact path="/buisness"><News key="buisness" category="buisness" country={this.country} apiKey={this.apiKey} pageSize={9}/></Route>
            <Route exact path="/science"><News key="science" category="science" country={this.country} apiKey={this.apiKey} pageSize={9}/></Route>
            <Route exact path="/entertainment"><News key="entertainment" category="entertainment" country={this.country} apiKey={this.apiKey} pageSize={9} /></Route>
            <Route exact path="/sports"><News key="sports" category="sports" country={this.country} apiKey={this.apiKey} pageSize={9} /></Route>
            <Route exact path="/technology"><News key="technology" category="technology" country={this.country} apiKey={this.apiKey} pageSize={9} /></Route>
            <Route exact path="/health"> <News key="health" category="health" country={this.country} apiKey={this.apiKey} pageSize={9} /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
