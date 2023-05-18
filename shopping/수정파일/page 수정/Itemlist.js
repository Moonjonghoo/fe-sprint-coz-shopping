import axios from "axios";
import { useEffect } from "react";
import './Itemlist.css'
import Item from "../component/item";

function Itemlist() {
  const data = localStorage.getItem('wholedata')
  const wholeItem = JSON.parse(data)
  console.log(wholeItem)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://cozshopping.codestates-seb.link/api/v1/products?count=');
        localStorage.setItem('wholedata', JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      } finally {

      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <p>상품필터링</p>
      <div className="main-list">
        {wholeItem.map(item => (<Item key={item.id} {...item}></Item>))}
      </div>
    </div>
  );
}

export default Itemlist;
