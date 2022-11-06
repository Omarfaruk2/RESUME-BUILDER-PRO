import React from "react"

import Header from "./components/Header/Header"
import Body from "./components/Body/Body"
import "./App.css"
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..
AOS.init()


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  )
}

export default App
