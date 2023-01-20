import {useState} from 'react';
import ArticleList from './ArticleList';

const Article = () => {
    const [articles, setArticle] = useState([
        {mealTitle:'Granola with Figs, Almonds and Coconut', description:'healthy, filling, delicious alchemy that happens when you combine oats, honey, and oil with some handfuls of chopped nuts and dried fruit into an incredibly easy-to-bake batch of granola.', image:'https://images.pexels.com/photos/5505467/pexels-photo-5505467.jpeg?auto=compress&cs=tinysrgb&w=600', idMeal: '2' },
        {mealTitle:'Chicken Fried Rice', description:'Chicken fried rice is the comfort dish of Chinese food with the addition of oil and soy sauce and veggies and meat spruce up the rice for a delicious meal.', image:'https://images.pexels.com/photos/7758253/pexels-photo-7758253.jpeg?auto=compress&cs=tinysrgb&w=400', idMeal: '4' },
        {mealTitle:'Lentil Soup', description:'It is made with mostly pantry ingredients but includes hearty greens and a squeeze of lemon for bright, fresh flavor. It’s seasoned with a few of my favorite spices and plenty of freshly ground black pepper.', image:'https://images.pexels.com/photos/724667/pexels-photo-724667.jpeg?auto=compress&cs=tinysrgb&w=400', idMeal: '5' },
    ]);
    return (
        <div className="home">
            
           <ArticleList articles={articles} mealTitle="All Articles" />
        </div>
    );
}
 
export default Article;