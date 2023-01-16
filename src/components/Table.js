import React, { useState, useEffect } from 'react';

function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/transactions')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return ( <
        table >
        <
        thead >
        <
        tr >
        <
        th > Id < /th> <
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
                td > { item.Date } < /td> <
                td > { item.Description } < /td> <
                td > { item.Amount } < /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table>
    );
}

export default Table;