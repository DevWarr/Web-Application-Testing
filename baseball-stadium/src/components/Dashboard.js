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
                    Dashboard
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <ButtonGroup color="primary">
                        <Button>HIT</Button>
                        <Button>FOUL</Button>
                        <Button>STRIKE</Button>
                        <Button>BALL</Button>
                    </ButtonGroup>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Container>
    )
}
