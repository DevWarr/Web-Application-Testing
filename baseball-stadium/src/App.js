import React, { useState } from "react"
import { Display, Dashboard } from "./components"
import "./App.css"

function App() {
    const [batter, setBatter] = useState({name: "Bobby", stats: ["He sucks."]})
    const [play, setPlay] = useState([
        { name: "strike", total: 3, current: 0 },
        { name: "ball", total: 4, current: 0 },
        { name: "out", total: 3, current: 0 }
    ])
    const [ball, setBall] = useState(0)

    return (
        <div className="App">
            <Display batter={batter} play={play} ball={ball} />
            <Dashboard />
        </div>
    )
}

export default App
