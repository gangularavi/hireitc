import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import './App.css';

const App = () => {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Routes>
              <Route path="/" element={<HomePage />} exact ></Route>
              <Route path="/about" element={<AboutPage />} ></Route>
              <Route path="/articles-list" element={<ArticlesListPage />} ></Route>
              <Route path="/article/:name" element={<ArticlePage />} ></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }

export default App;
