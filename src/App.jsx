import { useState } from 'react'
import {Routes,Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import QuotesGenerator from './QuotesGenerator'
import AuthorPrinter from './AuthorPrinter'
import QuotesPrinter from './QuotesPrinter'

function App() {
  
  
  return (<Routes>

    <Route path="/" element={<QuotesGenerator/>}/>
    <Route path='/mood/:tagId' element={<QuotesPrinter/>}/>
    <Route path='author/:authorId'element={<AuthorPrinter/>}/>

  </Routes>)
}

export default App
