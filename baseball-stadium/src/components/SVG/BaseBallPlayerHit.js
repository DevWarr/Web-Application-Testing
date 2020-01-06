import React from "react"
import baseBallPlayerHit from "../../assets/svg/baseball-player-svgrepo-com.svg"

export default function BaseBallPlayerHit(props) {
    return <img styles = {props.styles} src={baseBallPlayerHit} alt="Swing of the bat!" />
}
