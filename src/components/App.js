//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Data from '../blog-data/BlogData';
//import Header from
//import Article from 
import ArticleList from './ArticleList'



function App() {
  return (
    <div className="App">
      
      <ArticleList meals={Data.meals}/>
    </div>
  );
}

export default App;
