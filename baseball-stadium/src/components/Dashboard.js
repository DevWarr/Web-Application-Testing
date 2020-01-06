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
import PropTypes from "prop-types"

export default function Dashboard(props) {
    return (
        <Container maxWidth="sm">
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <h2>Dashboard</h2>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <ButtonGroup color="primary">
                        <Button
                            data-testid="hit"
                            onClick={() => props.updatePlay("hit")}
                        >
                            HIT
                        </Button>
                        <Button
                            data-testid="foul"
                            onClick={() => props.updatePlay("foul")}
                        >
                            FOUL
                        </Button>
                        <Button
                            data-testid="strike"
                            onClick={() => props.updatePlay("strikes")}
                        >
                            STRIKE
                        </Button>
                        <Button
                            data-testid="ball"
                            onClick={() => props.updatePlay("balls")}
                        >
                            BALL
                        </Button>
                    </ButtonGroup>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Container>
    )
}

Dashboard.propTypes = {
    updatePlay: PropTypes.func
}