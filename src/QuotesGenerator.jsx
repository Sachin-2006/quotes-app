import React,{useEffect, useState} from 'react'
import QuotesPrinter from "./QuotesPrinter"
import "./QuotesPrinter.css"

//https://go-quote.azurewebsites.net/docs/  

function QuotesGenerator(){
    const [quotes,setQuotes] = useState([]);
    const [quotesType,quote] = useState("dasfada");
//https://go-quote.azurewebsites.net/random-quote?format=json
useEffect(()=>{
    fetch("https://go-quote.azurewebsites.net/tags?page=1&page_size=100&format=json").then((resp)=>resp.json())
    .then((data)=>{
        if(Array.isArray(data.tags)){
        const filt = data.tags.filter((tag)=>tag.total_quotes > 3000)
            console.log(filt);
        setQuotes(filt);
        }

    })
    
},[])

 //`https://go-quote.azurewebsites.net/tags/${item.tags_id}?page=1&page_size=20&format=json`
    return(<>
    {quotes.map((item)=>(
    <p key={item.tags_id}> <a href={`/mood/${item.tag_id}`}> {item.name} </a></p>
    
    )
    )}

    </>) 

}

export default QuotesGenerator;

