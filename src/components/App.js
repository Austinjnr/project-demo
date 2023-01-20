//import logo from './logo.svg';
//import './App.css';
import React from 'react';
//import Data from '../blog-data/BlogData';
import Header from './Header'
import Article from './Article'
import ArticleList from './ArticleList'



function App() {
  return (
    <div className="App">
      <Header name={Data.name} />
      <Article mealTitle={Data.mealTitle} description={Data.description} image={Data.image} date={Data.date}/>
      <ArticleList meals={Data.meals}/>
    </div>
  );
}

export default App;
