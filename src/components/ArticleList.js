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
}
 
export default ArticleList
