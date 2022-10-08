import './App.css';


// import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterUser from './components/RegisterUser';
import LoadingBar from 'react-top-loading-bar';
import React, { useState } from 'react'
import About from './components/About';

export default function App() {

  const pagesize = 12
  const keyApi = process.env.REACT_APP_NEWS_API
  // const name = 'John'

  const [progress, setProgress] = useState(0);

  // state = {
  //   progress: 0
  // }

  // setProgress = (progress) => {
  //   setState({
  //     progress: progress
  //   })
  // }
  // render() {
  return (
    <div>

      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        // onLoaderFinished={()=>setProgress(0)}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="home" pagesize={pagesize} country="in" apiKey={keyApi} category="" />} />
          <Route exact path="/enterta inment" element={<News setProgress={setProgress} key="entertainment" pagesize={pagesize} country="in" apiKey={keyApi} category="entertainment" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pagesize={pagesize} country="in" apiKey={keyApi} category="business" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pagesize={pagesize} country="in" apiKey={keyApi} category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pagesize={pagesize} country="in" apiKey={keyApi} category="science" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pagesize={pagesize} country="in" apiKey={keyApi} category="technology" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pagesize={pagesize} country="in" apiKey={keyApi} category="sports" />} />
          {/* <Route exact path="/register" element={<RegisterUser />} />
          <Route exact path="/login" element={<Login />} /> */}
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

