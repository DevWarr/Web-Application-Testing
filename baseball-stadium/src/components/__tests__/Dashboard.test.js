import React from "react";
import * as rtl from "@testing-library/react";
import { Dashboard } from "../";

/**
 * Integration testing is in `../../App.test.js` 
*/ 
test("<Dashboard/> Component has four buttons", () => {
    
    const dashboard = rtl.render(<Dashboard/>)

    expect(dashboard.getByText(/hit/i))
    expect(dashboard.getByText(/strike/i))
    expect(dashboard.getByText(/foul/i))
    expect(dashboard.getByText(/ball/i))
})