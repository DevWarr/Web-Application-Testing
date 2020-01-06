// For Exporting all SVG files

// First import . . .
import hit from "./baseball-player-svgrepo-com.svg"
import miss from "./waiter-falling-svgrepo-com.svg"
import ready from "./baseball-player-with-bat-svgrepo-com.svg"


// Then export an object containing both the image and the alt tag
export const baseBallPlayerHit = {
    img: hit,
    alt: "A swing and a hit!"
}

export const baseBallPlayerReady = {
    img: ready,
    alt: "Ready to swing..."
}

export const baseBallPlayerMiss = {
    img: miss,
    alt: "A swing and a miss!"
}