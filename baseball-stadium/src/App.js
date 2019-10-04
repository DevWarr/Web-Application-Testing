import React, { useState } from "react"
import { Display, Dashboard } from "./components"
import "./App.css"

function App() {
    const [batter, setBatter] = useState({
        name: "Bobby",
        stats: ["He sucks."]
    })
    const [play, setPlay] = useState({
        strikes: { total: 3, current: 0 },
        balls: { total: 4, current: 0 },
        outs: { total: 3, current: 0 }
    })

    /**
     * Updates the scoreboard depending on what `type` of play was made
     * @param type - A string (ex: `strike`, `hit`) referencing the type of play the batter made
     */
    const updatePlay = type => {
        // Create and object copy, mutate it, then set it at the bottom of the function
        const nextPlay = Object.assign({}, play);

        /**
         * Codes:
         * 0 = nothing
         * 1 = ball -> batter moves one base
         * 2 = hit! -> batter runs to the bases
         * -1 = strike! -> batter is out!
         * -2 = outs! -> Team swaps!
         */
        let batter = 0;


        switch(type) {
            case "strikes":
                nextPlay.strikes.current++;
                if (nextPlay.strikes.current > 2) {
                    nextPlay.strikes.current = 0
                    nextPlay.balls.current = 0
                    nextPlay.outs.current++
                    batter = -1
                }
                if (nextPlay.outs.current > 2) {
                    nextPlay.strikes.current = 0
                    nextPlay.balls.current = 0
                    nextPlay.outs.current = 0
                    batter = -2
                }
                break;
            case "balls":
                nextPlay.balls.current++;
                if (nextPlay.balls.current > 3) {
                    nextPlay.strikes.current = 0
                    nextPlay.balls.current = 0
                    batter = 1
                }
                break;
            case "hit":
                nextPlay.strikes.current = 0
                nextPlay.balls.current = 0
                batter = 2
                break;
            case "foul":
                if (play.strikes.current < 2) {
                    nextPlay.strikes.current++
                    break;
                }
                break;
            default:
                break;
        }
        // TODO: Add logic so batter success/failure is displayed somewhere
        setPlay(nextPlay);
    }

    return (
        <div className="App">
            <Display batter={batter} play={play} />
            <Dashboard updatePlay={updatePlay} />
        </div>
    )
}

export default App
