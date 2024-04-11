import {Routes, Route} from "react-router-dom"
import React, { useState } from "react"
import './App.css'
import Landing from './components/landing/Landing'
import Home from "./components/home/Home"
import Detail from "./components/detail/Detail"
import Forms from "./components/forms/Forms"


function App() {

  const [page, setPage] = useState(1)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Home page={page} setPage={setPage}/>} />    
        <Route path="/detail/:id" element={<Detail />} />  
        <Route path="/form" element={<Forms />} />
      </Routes>
    </div>
  )
}

export default App
