import React,{useEffect, useState} from 'react'
import {useParams } from 'react-router-dom';

import './QuotesPrinter.css'

function QuotesPrinter(props){
    const {tagId} = useParams();
    const [quotes,setQuotes] = useState([])

useEffect(()=>{
    fetch(`https://go-quote.azurewebsites.net/tags/${tagId}?page=1&page_size=20&format=json`)
    .then((resp)=>resp.json())
    .then((data)=>{
        setQuotes(data.quotes)
        console.log(data.quotes)
    })
},[])
return(<>
<div className='quotes'>
{quotes.map((item)=>(
    <div key="quote">
    <strong><p key={item.id} className='quote-text'>{item.text}</p>
    </strong>
    <i className='quote-author' key={item.id}><a href={`/author/${item.author.replaceAll(' ','+')}`}>{item.author}</a></i>
    </div>
))}
</div>
efwwe
    </>)

}
export default QuotesPrinter