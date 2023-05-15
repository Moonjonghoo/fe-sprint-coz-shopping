import './List.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function List() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://cozshopping.codestates-seb.link/api/v1/products?count=');
                setData(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
        
    }
    return (
        <div>
            <button onClick={()=>(console.log(data))}></button>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default List;


