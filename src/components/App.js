//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Data from '../blog-data/BlogData';
import Article from './Article' 
import ArticleList from './ArticleList'



function App() {
  return (
    <div className="App">

      <Article mealTitle={Data.mealTitle} description={Data.description} image={Data.image} date={Data.date}/>
      <ArticleList meals={Data.meals}/>
    </div>
  );
}

export default App;
