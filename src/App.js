
import { useEffect, useState } from 'react';
import './App.css';
import News from './News';



function App() {

  let [articles,setArticles]=useState([])
  let [category,setCategory]=useState("india");
  let [date,setDate]=useState("2023-12-07")
  
  // useEffect(()=>{

  //        //`https://newsapi.org/v2/everything?q=${category}&from=2023-12-07&apiKey=3430e2c5c40d47be86181153c3424fdc`
  //       fetch(`https://newsapi.org/v2/everything?q=${category}&from=${date}&apiKey=3430e2c5c40d47be86181153c3424fdc`)
  //       .then((response)=>response.json())//extract data
  //       .then((news)=>{
  //         setArticles(news.articles)
  //         console.log(news.articles)
  //       })
  //       .catch((err)=>{
  //         console.log(err)
  //       })

  // },[category,date])



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

        <input className='datestyle' type='date' onChange={(event)=>{
          if(event.target.value!==""){
            setDate(event.target.value)

          }else{
            setDate("2023-12-07")
          }
        }}></input>
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
