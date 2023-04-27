import React, { useState, useEffect } from 'react';

function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/transactions')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return ( <
        table className = 'grid-table' >
        <
        thead >
        <
        tr >
        <
        th > Date < /th> <
        th > Description < /th> <
        th > Category < /th> <
        th > Amount < /th> <
        /tr> <
        /thead> <
        tbody > {
            data.map(item => ( <
                tr key = { item.id } >
                <
                td > { item.date } < /td> <
                td > { item.description } < /td> <
                td > { item.category } < /td> <
                td > { item.amount } < /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table>
    );
}

export default Table;