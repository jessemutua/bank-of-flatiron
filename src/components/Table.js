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
        th > Column 1 < /th> <
        th > Column 2 < /th> <
        th > Column 3 < /th> <
        /tr> <
        /thead> <
        tbody > {
            data.map(item => ( <
                tr key = { item.id } >
                <
                td > { item.column1 } < /td> <
                td > { item.column2 } < /td> <
                td > { item.column3 } < /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table>
    );
}

export default Table;