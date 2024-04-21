
import { useEffect, useState } from 'react';
import './App.css';
import News from './News';



function App() {

  let [articles,setArticles]=useState([])
  let [category,setCategory]=useState("india");
  
  
  useEffect(()=>{

     
        
         
        fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=3430e2c5c40d47be86181153c3424fdc`)
        .then((response)=>response.json())//extract data
        .then((news)=>{
          console.log(news)
          
          setArticles(news.articles)
          
        })
        .catch((err)=>{
          console.log(err)
        })

  })



  return (
    <div className="App">
      <header className='header'>
        <h1>NewsApp</h1>
        <input type='text' onChange={(event)=>{
          if(event.target.value!==""){
            setCategory(event.target.value)
          }
          else{
            setCategory("india")
          }
          
        }} placeholder='search'></input>

       
       
        </header>

      <section className='news-articles'>
      { 
        articles.map((article)=>{
          return(<News article={article}></News>)
        })
      }
      
      </section>
      
    </div>
  );
}

export default App;


