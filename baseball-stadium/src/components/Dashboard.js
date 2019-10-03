import React from "react";
import { Button, ButtonGroup } from "@material-ui/core"

export default function DashBoard(props) {
    return (
        <div>
            <ButtonGroup color="primary">
                <Button>HIT</Button>
                <Button>FOUL</Button>
                <Button>STRIKE</Button>
                <Button>BALL</Button>
            </ButtonGroup>
        </div>
    )
}