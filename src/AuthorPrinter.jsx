import React,{useEffect, useState} from 'react'
import {useParams } from 'react-router-dom';
import "./AuthorPrinter.css"



function AuthorPrinter(){
    const {authorId} = useParams()
    const [quotes,setQuotes] = useState([])
    const [author,setAuthor] = useState("")
    useEffect(()=>{
        fetch(`https://go-quote.azurewebsites.net/authors/${authorId}?page=1&page_size=20&format=json`)
        .then(resp=>resp.json())
        .then(data=>
{            console.log(data.quotes)
            setQuotes(data.quotes)
            setAuthor(data.quotes[0].author)
}       )
    },[])
    return (
        <>
        <div>
        <h1>{author}</h1>
  {quotes.map((item)=>(
    <p key={item.id}>{item.text}</p>
  ))}
  </div>
        </>
    )

}
export default AuthorPrinter;