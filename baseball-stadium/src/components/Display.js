import React from "react"
import { BaseBallPlayerHit, BaseBallPlayerReady, BaseBallPlayerMiss } from "./SVG"
import { Container, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import PropTypes from "prop-types"

const useStyles = makeStyles(theme => ({
    root: {
        margin: "25px auto"
    },
    display: {
        display: "flex"
    }
}))

export default function Display({ batter, play }) {
    const classes = useStyles()

    return (
        <Container maxWidth="md" className={classes.root}>
            <Paper className={classes.display}>
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

                {true ? <BaseBallPlayerHit /> : <BaseBallPlayerReady />}

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