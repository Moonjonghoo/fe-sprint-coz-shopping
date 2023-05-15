import './List.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './Item';

function List() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [bookmark, setBookmark] = useState([]);

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

  useEffect(() => {
   
    const bookmarkedItems = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];
    const randomBookmarks = getRandomElements(bookmarkedItems, 4); //랜덤저장
    setBookmark(randomBookmarks);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mainlist">
      <h4>상품리스트</h4>
      <ul className="itemlist">
        {data.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
      <h4>북마크리스트</h4>
      <ul className="itemlist">
        {bookmark.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

//랜덤정렬
function getRandomElements(arr, n) {
  if (n >= arr.length) {
    return arr; // 
  } else {
    const shuffled = arr.sort(() => 0.5 - Math.random()); // 섞기
    return shuffled.slice(0, n); // n개의 요소 선택
  }
}

export default List;