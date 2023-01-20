<<<<<<< HEAD
// import React from 'react';


// function ArticleList () {

//     return (
//         <main></main>
//     )
// }

// export default ArticleList;
const ArticleList = ({articles, mealTitle}) => {
    //const BlogList = (props)
    // const blogs = props.blogs;
    // const title = props.title;

    

    return (
        <div className="article-List">
            <h2>{mealTitle}</h2>
             {articles.map((articles) =>(
                <div className='articles-preview' key={articles.idMeal}>
                    <h2>{articles.mealTitle}</h2>
                    <p>{articles.description}</p>
                    <img>{articles.image}</img>
                </div>
            ))}         
        </div>
    );
=======
import React from 'react';
//import Article from 


function ArticleList (idMeal) {

    return (
        <main>
            <Article key = {idMeal}/>
            <Article key = {idMeal}/>
            <Article key = {idMeal}/>
        </main>
    )
>>>>>>> 4784f5e8adbab45a0ed89d611495e5c0af0dfddd
}
 
export default ArticleList
