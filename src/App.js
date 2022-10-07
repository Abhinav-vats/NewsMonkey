import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterUser from './components/RegisterUser';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  name = 'John'
  pagesize = 12
  keyApi = process.env.REACT_APP_NEWS_API

  
  state = {
    progress:0
  }

  setProgress=  (progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <div>

        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={()=>setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="home" pagesize={this.pagesize} country="in" apiKey={this.keyApi} category="" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pagesize={this.pagesize} country="in" apiKey={this.keyApi} category="entertainment" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pagesize={this.pagesize} country="in" apiKey={this.keyApi} category="business" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pagesize={this.pagesize} country="in" apiKey={this.keyApi} category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pagesize={this.pagesize} country="in" apiKey={this.keyApi} category="science" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pagesize={this.pagesize} country="in" apiKey={this.keyApi} category="technology" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pagesize={this.pagesize} country="in" apiKey={this.keyApi} category="sports" />} />
            <Route exact path="/register" element={<RegisterUser />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Router>
        {/* <Login /> */}
        {/* <News setProgress={this.setProgress} pagesize="12" /> */}

        {/* <News setProgress={this.setProgress} pagesize={12} country="in" apiKey="26304ff743c34f4f8851b7b81300ed8a" /> */}
      </div>
    )
  }
}
