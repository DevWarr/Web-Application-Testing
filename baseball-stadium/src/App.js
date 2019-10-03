import React, { useState } from "react"
import { Display, Dashboard } from "./components"
import "./App.css"

function App() {
    const [batter, setBatter] = useState({
        name: "Bobby",
        stats: ["He sucks."]
    })
    const [play, setPlay] = useState({
        strike: { total: 3, current: 0 },
        ball: { total: 4, current: 0 },
        out: { total: 3, current: 0 }
    })
    const [ball, setBall] = useState(0)

    const updatePlay = type => {
        if (type === "foul") {
            if (play.strike.current >= 2) {
                return
            } else {
                type = "strike"
            }
        }
        console.log(type)
        const nextPlay = Object.assign({}, play);
        nextPlay[type].current++;
        setPlay(nextPlay);
    }

    return (
        <div className="App">
            <Display batter={batter} play={play} ball={ball} />
            <Dashboard updatePlay={updatePlay} />
        </div>
    )
}

export default App
