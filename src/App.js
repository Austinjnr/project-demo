import React from 'react';
import Header from './components/Header';

console.log(blogData);

function App() {
  return (
    <div className="App">
    
    <Header name={blogData.name}/>
    </div>
  )
}

export default App;
