import React, {useState, useEffect} from "react";
import DataTable from "react-data-table-component";





function transactionForm(){
    const [data, setData] =useState([])
    const [loading, setLoading] = useState(false)
    // const [filters, setFilters] = useState({
    //     global: { value: null, matchMode: FilterMatchMode.CONTAINS}
    // })

    
    

    const columns = [
        {
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
    },[])


     async function TransactionList(){
        setLoading(true)
        const url = " http://localhost:3000/transactions"
        const response = await fetch(url)

        const users =await response.json()
        setData(users)
        setLoading(false)
        }
    return(
            <div>
                <DataTable 
                  title = "Transactions"
                  columns = {columns}
                  data = {data}
                  progressPending ={loading}
                />
            </div>
    )
}

export default transactionForm;