import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Events from './components/events';
import Members from './components/Members';
import Contacts from './components/Contacts';
import Faq from './components/Faq';
import './App.css'


function App() {
 

  return (

    <BrowserRouter>
        
        <Routes>

        
           <Route path='/' element={<Home/>}/>
            <Route path='/Events' element={<Events/>}/>
            <Route path='/Members' element={<Members/>}/>
          <Route path='/Contacts' element={<Contacts/>}/>
          <Route path='/Faqs' element={<Faq/>}/>
      
        </Routes>

        </BrowserRouter>
    

  )
}

export default App
