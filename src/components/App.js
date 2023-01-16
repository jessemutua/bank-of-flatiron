import React, { Component } from "react";
import Table from "../components/Table";
import { render } from "@testing-library/react";
import TransactionForm from "./TransactionForm"

class App extends Component {
    render() {
        return ( <
            div className = "App" >
            <
            TransactionForm / >
            <
            /div>
        )
    }
}
export default App;