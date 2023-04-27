import React, { Component } from "react";
import Table from "../components/Table";
import { render } from "@testing-library/react";
import Header from "../components/Header";
import TransactionForm from "./TransactionForm"
import NewTransaction from "./NewTransaction";

function App() {
    return ( <
        div className = "App" >
        <
        Header / >
        <
        NewTransaction / >
        <
        Table / >
        <
        TransactionForm / >

        <
        /div>
    )
}

export default App;