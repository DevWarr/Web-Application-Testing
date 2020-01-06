import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as rtl from "@testing-library/react";


test("<App/> renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
})

// Integration testing
test(`<App/> - When calling "updatePlay()", everything updates properly`, async () => {
    const app = rtl.render(<App/>);

    // Our views
    const strikes = app.getByText(/strikes/i)
    const balls = app.getByText(/balls/i)
    const outs = app.getByText(/outs/i)

    // Our buttons
    const btnHit = app.getByTestId("hit")
    const btnStrike = app.getByTestId("strike")
    const btnFoul = app.getByTestId("foul")
    const btnBall = app.getByTestId("ball")

    // Testing initial State
    expect(strikes.textContent).toBe("STRIKES 0")
    expect(balls.textContent).toBe("BALLS 0")
    expect(outs.textContent).toBe("OUTS 0")
    expect(btnHit).toBeDefined()
    expect(btnStrike).toBeDefined()
    expect(btnFoul).toBeDefined()
    expect(btnBall).toBeDefined()

    // Click on Strike - Strike increases
    rtl.fireEvent.click(btnStrike)
    expect(strikes.textContent).toBe("STRIKES 1")
    expect(balls.textContent).toBe("BALLS 0")
    expect(outs.textContent).toBe("OUTS 0")
    
    // Click on Foul - Strike increases
    rtl.fireEvent.click(btnFoul)
    expect(strikes.textContent).toBe("STRIKES 2")
    expect(balls.textContent).toBe("BALLS 0")
    expect(outs.textContent).toBe("OUTS 0")

    // Click on Foul a second time (should be no change)
    rtl.fireEvent.click(btnFoul)
    expect(strikes.textContent).toBe("STRIKES 2")
    expect(balls.textContent).toBe("BALLS 0")
    expect(outs.textContent).toBe("OUTS 0")
    
    // Click on Ball - ball increases
    rtl.fireEvent.click(btnBall)
    expect(strikes.textContent).toBe("STRIKES 2")
    expect(balls.textContent).toBe("BALLS 1")
    expect(outs.textContent).toBe("OUTS 0")

    // Click on Ball Twice more . . .
    rtl.fireEvent.click(btnBall)
    rtl.fireEvent.click(btnBall)
    expect(strikes.textContent).toBe("STRIKES 2")
    expect(balls.textContent).toBe("BALLS 3")
    expect(outs.textContent).toBe("OUTS 0")

    // Final Ball should reset strikes and balls (batter goes to 1st base)
    rtl.fireEvent.click(btnBall)
    expect(strikes.textContent).toBe("STRIKES 0")
    expect(balls.textContent).toBe("BALLS 0")
    expect(outs.textContent).toBe("OUTS 0")
    
    // Foul test! - Should be strikes = 1
    rtl.fireEvent.click(btnFoul)
    expect(strikes.textContent).toBe("STRIKES 1")
    expect(balls.textContent).toBe("BALLS 0")
    expect(outs.textContent).toBe("OUTS 0")

    // Ball test! - Should be Balls = 1
    rtl.fireEvent.click(btnBall)
    expect(strikes.textContent).toBe("STRIKES 1")
    expect(balls.textContent).toBe("BALLS 1")
    expect(outs.textContent).toBe("OUTS 0")
    
    // Strike! . . .
    rtl.fireEvent.click(btnStrike)
    expect(strikes.textContent).toBe("STRIKES 2")
    expect(balls.textContent).toBe("BALLS 1")
    expect(outs.textContent).toBe("OUTS 0")
    
    // Strikeout!! Strikes and Balls reset, and outs increases by 1
    rtl.fireEvent.click(btnStrike)
    expect(strikes.textContent).toBe("STRIKES 0")
    expect(balls.textContent).toBe("BALLS 0")
    expect(outs.textContent).toBe("OUTS 1")
    
    // Final test: If we strikeout twice more, everything should reset to zero:
    rtl.fireEvent.click(btnStrike) // 1
    rtl.fireEvent.click(btnStrike) // 2
    rtl.fireEvent.click(btnStrike) // 3 - OUT!
    expect(strikes.textContent).toBe("STRIKES 0")
    expect(balls.textContent).toBe("BALLS 0")
    expect(outs.textContent).toBe("OUTS 2")
    rtl.fireEvent.click(btnStrike) // 1
    rtl.fireEvent.click(btnStrike) // 2 . . .
    expect(strikes.textContent).toBe("STRIKES 2")
    expect(balls.textContent).toBe("BALLS 0")
    expect(outs.textContent).toBe("OUTS 2")
    rtl.fireEvent.click(btnStrike) // 3 - OUTT!!
    expect(strikes.textContent).toBe("STRIKES 0")
    expect(balls.textContent).toBe("BALLS 0")
    expect(outs.textContent).toBe("OUTS 0")
    
})