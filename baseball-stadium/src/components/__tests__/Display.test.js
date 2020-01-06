import React from "react";
import * as rtl from "@testing-library/react";
import { Display } from "../"

test("<Display/> Shows proper messages when no data exists", () => {
    const display = rtl.render(<Display/>)
    expect(display.getByText(/No Stats Found/i))
    expect(display.getByText(/Play info not created yet\./i))
})

test("<Display/> loads the proper batter info", () => {

    const batterObj = {
        name: "Depp",
        stats: ["200cm tall", "Cool as a cat"]
    }

    const display = rtl.render(<Display batter={batterObj}/>)

    expect(display.queryByText(/No Stats Found/i)).toBeNull()
    expect(display.getByText(/depp/i))
    expect(display.getByText(/200cm tall/i))
    expect(display.getByText(/Cool as a cat/i))
})

test("<Display/> loads the proper 'Play' info", () => {

    const playInfo = {
        strikes: { total: 3, current: 0 },
        balls: { total: 4, current: 1 },
        outs: { total: 3, current: 0 }
    }

    const display = rtl.render(<Display play={playInfo}/>)

    expect(display.queryByText(/Play info not created yet./i)).toBeNull()
    expect(display.getByText(/strike/i))
    expect(display.getByText(/balls/i))
    expect(display.getByText(/out/i))
})
