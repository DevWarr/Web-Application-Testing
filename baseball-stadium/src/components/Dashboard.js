import React from "react";
import { Button, ButtonGroup, Container } from "@material-ui/core"

export default function DashBoard(props) {
    return (
        <Container maxWidth="md">
            <ButtonGroup color="primary">
                <Button>HIT</Button>
                <Button>FOUL</Button>
                <Button>STRIKE</Button>
                <Button>BALL</Button>
            </ButtonGroup>
        </Container>
    )
}