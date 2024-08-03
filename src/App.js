import "./App.css";
import NavBar from "./components/NavBar";
import News  from "./components/News";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  //use of envioronment variable for api key
  apiKey= process.env.REACT_APP_NEWS_API
  state = {
    progress:0
  }
  setProgress=(progress) => {
    this.setState({progress:progress});
  }
  render() {
    return (
      <div>
        <BrowserRouter>
            <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <NavBar />
          <Routes>
            <Route exact
              path="/"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={5} category={"general"} />}
            />
            <Route exact
              path="/Business"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Business" pageSize={5} category={"Business"} />}
            />
            <Route exact
              path="/Entertainment"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Entertainment" pageSize={5} category={"Entertainment"} />}
            />

            <Route exact
              path="/Health"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Health" pageSize={5} category={"Health"} />}
            />
            <Route exact
              path="/Science"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Science" pageSize={5} category={"Science"} />}
            />
            <Route exact
              path="/Sports"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Sports" pageSize={5} category={"Sports"} />}
            />
            <Route exact
              path="/Technology"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Technology" pageSize={5} category={"Technology"} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
