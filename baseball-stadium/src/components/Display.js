import React from "react"
import { BaseBallPlayerHit, BaseBallPlayerReady } from "./SVG"
import { Container, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
    root: {
        margin: "25px auto"
    },
    display: {
        display: "flex"
    }
}))

export default function Display(props) {
    const classes = useStyles()

    return (
        <Container maxWidth="md" className={classes.root}>
            <Paper className={classes.display}>
                <Container>
                    <h2>BATTER</h2>
                    <p>
                        {props.batter ? props.batter.name || "Jhonny" : "Ricky"}
                    </p>
                    <div>
                        <h4>STATS:</h4>
                        <ul>
                            {props.batter
                                ? props.batter.stats
                                    ? props.batter.stats.map(stat => (
                                          <li>{stat}</li>
                                      ))
                                    : "No Stats Found"
                                : "None found"}
                        </ul>
                    </div>
                </Container>
                {true ? <BaseBallPlayerHit /> : <BaseBallPlayerReady />}
                <Container>
                    {props.play
                        ? props.play.map(infoBit => (
                              <div>
                                  <p>
                                      {infoBit.name}{" "}
                                      <span>{infoBit.number}</span>
                                  </p>
                              </div>
                          ))
                        : "Play info not created yet."}
                    <div>
                        <h3>Ball Speed</h3>
                        <p>{props.ball ? props.ball.speed : " "}</p>
                    </div>
                </Container>
            </Paper>
        </Container>
    )
}
