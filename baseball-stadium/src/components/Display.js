import React from "react"
import { BaseBallPlayerHit, BaseBallPlayerReady } from "./SVG"
import { Container } from "@material-ui/core"

export default function Display(props) {
    return (
        <Container>
            <Container maxWidth="sm">
                {true ? <BaseBallPlayerHit /> : <BaseBallPlayerReady />}
            </Container>
        </Container>
    )
}
