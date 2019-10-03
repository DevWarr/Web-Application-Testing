import React from "react"
import { BaseBallPlayerHit, BaseBallPlayerReady } from "./SVG"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    root: {
        marginTop: "25px"
    }
})

export default function Display(props) {
    const classes = useStyles();


    return (
        <Container className={classes.root}>
            <Container maxWidth="sm">
                {true ? <BaseBallPlayerHit /> : <BaseBallPlayerReady />}
            </Container>
        </Container>
    )
}
