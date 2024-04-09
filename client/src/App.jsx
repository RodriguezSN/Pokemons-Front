import {Routes, Route} from "react-router-dom"
import './App.css'
import Landing from './components/landing/Landing'
import Home from "./components/home/Home"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Home />} />      
      </Routes>
    </div>
  )
}

export default App
