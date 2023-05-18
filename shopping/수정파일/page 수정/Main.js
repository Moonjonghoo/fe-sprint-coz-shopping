import axios from "axios";
import {useEffect,useState} from 'react'
import Item from "../component/item";
import './Main.css'

function Main() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('http://cozshopping.codestates-seb.link/api/v1/products?count=4');
            setdata(response.data);
          } catch (error) {
            console.error(error);
          } finally {
            
          }
        }
        fetchData();
      }, []);
    return ( 
        <div className="item-list">
            {data.map(item=>(<Item key={item.id} {...item}></Item>))}
     
        </div>
     );
}

export default Main;