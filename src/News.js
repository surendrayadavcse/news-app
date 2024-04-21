export default function News(props){
   console.log(props)
    return(
        <div className="news">
        <div className="news-img">

        {
         props.article.urlToImage!==null?
         <img alt=img2 className="img" src={props.article.urlToImage}></img>:
        
         <img src="https://t3.ftcdn.net/jpg/04/34/72/82/240_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg" alt="image1"></img>
        }
        
        </div>
        <h4 className="heading">{props.article.title}</h4>
        <p>{props.article.description?.substring(0,60).concat("...")} <a href={props.article.url} target="_blank" rel="noreferrer">Read More</a></p>
        
        <div className="source"> 
            <p>{props.article.author?.substring(0,6)}</p>
            <p>{props.article.source.name?.substring(0,17)}</p>
        </div>

        </div>
    )
}
