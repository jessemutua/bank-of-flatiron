import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";





function TransactionForm() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)




    const columns = [{
            name: "Date",
            selector: (row) => row.date
        },
        {
            name: "Description",
            selector: (row) => row.description
        },
        {
            name: "Category",
            selector: (row) => row.category
        },
        {
            name: "Amount",
            selector: (row) => row.amount
        }

    ]
    useEffect(() => {
        TransactionList()
    }, [])


    async function TransactionList() {
        setLoading(true)
        try {
            const url = " http://localhost:3000/transactions"
            const response = await fetch(url)

            const { users } = await response.json()
            setData(users)
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }
    return ( <
        div >
        <
        DataTable title = "Transactions"
        columns = { columns }
        data = { data }
        progressPending = { loading }
        keyField = "id" /
        >
        <
        /div>
    )
}

export default TransactionForm;