import React, { useState } from "react";

function AddTransaction() {
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");
    const [transactions, setTransactions] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const transObj = {
            description: description,
            category: category,
            date: date,
            amount: amount,
        };
        fetch("http://localhost:3000/transactions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(transObj),
            })
            .then((res) => res.json())
            .then((data) => {
                setTransactions([...transactions, data]);
                setDescription("");
                setCategory("");
                setDate("");
                setAmount("");
            });
    }

    return ( <
        div id = "form-area" >
        <
        h2 id = "h2" > New Transaction < /h2> <
        form id = "form"
        onSubmit = { handleSubmit } >
        <
        label htmlFor = "description" > Description < /label> <
        input type = "text"
        id = "description"
        value = { description }
        onChange = {
            (e) => setDescription(e.target.value) }
        />

        <
        label htmlFor = "category" > Category < /label> <
        input type = "text"
        id = "category"
        value = { category }
        onChange = {
            (e) => setCategory(e.target.value) }
        />

        <
        label htmlFor = "date" > Transaction Date < /label> <
        input type = "text"
        id = "date"
        value = { date }
        onChange = {
            (e) => setDate(e.target.value) }
        />

        <
        label htmlFor = "amount" > Amount < /label> <
        input type = "text"
        id = "amount"
        value = { amount }
        onChange = {
            (e) => setAmount(e.target.value) }
        />

        <
        input type = "submit"
        value = "Submit" / >
        <
        /form>

        <
        div id = "transaction-list" >
        <
        h2 > Transaction List < /h2> <
        ul > {
            transactions.map((transaction) => ( <
                li key = { transaction.id } > { transaction.description } - { transaction.amount } <
                /li>
            ))
        } <
        /ul> <
        /div> <
        /div>
    );
}

export default AddTransaction;