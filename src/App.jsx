import React from "react"
import Intro from "./components/Intro"
import Footer from "./components/Footer"
import Timeline from "./components/Timeline"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"



function App() {
  return (
   <div className = "App">
    <Intro/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    <Timeline/>
   </div>
  )
}

export default App
