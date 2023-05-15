import './List.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './Item';


function List() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://cozshopping.codestates-seb.link/api/v1/products?count=4');
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
        <div className='mainlist'>
            {console.log(data)}
            <h4>상품리스트</h4>
            <ul className='itemlist'>
                {data.map(item => (
                    <Item {...item}></Item>
                ))}

            </ul>
            
        </div>
    );
}

export default List;


