/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Details from './components/Details';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/details/:id" element={<Details/>} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Details from './components/Details';
import Form from './components/Form';
import PostProvider from './context/PostProvider';

function App() {
  return (
    <PostProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </Router>
    </PostProvider>
  );
}

export default App;
