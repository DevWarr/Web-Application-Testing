import React from "react"
import {
    baseBallPlayerHit,
    baseBallPlayerReady,
    baseBallPlayerMiss
} from "../assets/svg"
import { Container, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import PropTypes from "prop-types"

const useStyles = makeStyles(theme => ({
    root: {
        margin: "25px auto",
        height: "50%"
    },
    displayPaper: {
        display: "flex",
        height: "100%"
    },
    batterAndBall: {
        padding: "0",
        flexGrow: "1"
    },
    batter: {
        height: "100%",
        padding: "10% 0",
        display: "flex",
        flexFlow: "column-reverse"
    },
    SVG: {
        height: "100%"
    }
}))

export default function Display({ batter, play, swing }) {
    const classes = useStyles()
    const swingImg = swing
        ? swing > 0
            ? baseBallPlayerHit
            : baseBallPlayerMiss
        : baseBallPlayerReady

    return (
        <Container maxWidth="md" className={classes.root}>
            <Paper className={classes.displayPaper}>
                <Container data-testid="batter">
                    <h2>BATTER</h2>
                    <p>{batter ? batter.name || "Jhonny" : "Ricky"}</p>
                    <div>
                        <h4>STATS:</h4>
                        <ul>
                            {batter && batter.stats
                                ? batter.stats.map(stat => (
                                      <li key={stat}>{stat}</li>
                                  ))
                                : "No Stats Found"}
                        </ul>
                    </div>
                </Container>

                <Container className={classes.batterAndBall}>
                    <div className={classes.batter}>
                        <img src={swingImg.img} alt={swingImg.alt} />
                    </div>
                </Container>

                <Container data-testid="play">
                    {play && Object.keys(play).length
                        ? Object.keys(play).map(key => (
                              <div key={key}>
                                  <p>
                                      {key.toUpperCase()}{" "}
                                      <span>{String(play[key].current)}</span>
                                  </p>
                              </div>
                          ))
                        : "Play info not created yet."}
                </Container>
            </Paper>
        </Container>
    )
}

Display.propTypes = {
    batter: PropTypes.shape({
        name: PropTypes.string,
        stats: PropTypes.arrayOf(PropTypes.string)
    }),
    play: PropTypes.shape({
        strikes: PropTypes.objectOf(PropTypes.number),
        balls: PropTypes.objectOf(PropTypes.number),
        outs: PropTypes.objectOf(PropTypes.number)
    })
}
