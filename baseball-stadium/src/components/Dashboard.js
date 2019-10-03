import React from "react"
import {
    Button,
    ButtonGroup,
    Container,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails
} from "@material-ui/core"
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons"

export default function DashBoard(props) {
    return (
        <Container maxWidth="sm">
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <h2>Dashboard</h2>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <ButtonGroup color="primary">
                        <Button>HIT</Button>
                        <Button onClick={() => props.updatePlay("foul")}>
                            FOUL
                        </Button>
                        <Button onClick={() => props.updatePlay("strike")}>
                            STRIKE
                        </Button>
                        <Button onClick={() => props.updatePlay("ball")}>
                            BALL
                        </Button>
                    </ButtonGroup>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Container>
    )
}
