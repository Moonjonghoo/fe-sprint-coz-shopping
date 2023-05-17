import './Bookmark.css';
import { useState, useEffect } from 'react';
import Item from '../component/Item';
import Filter from '../component/filter';

function Bookmark() {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [type, setType] = useState(null);

  useEffect(() => {
    const localStorageData = localStorage.getItem('bookmarkedItems');
    if (localStorageData) {
      setBookmarkedItems(JSON.parse(localStorageData));
    }
  }, []);

  const filterItemsByType = (type) => {
    return bookmarkedItems.filter((item) => item.type === type);
  };

  const getRandomItems = (array, numItems) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
  };

  useEffect(() => {
    if (type === 'Product' || type === 'Category' || type === 'Exhibition' || type === 'Brand') {
      const filteredItems = filterItemsByType(type);
      const randomItems = getRandomItems(filteredItems, 100);
      setFilteredData(randomItems);
    } else {
      const randomItems = getRandomItems(bookmarkedItems, 100);
      setFilteredData(randomItems);
    }
  }, [type, bookmarkedItems]);

  return (
    <div>
      <Filter type={type} setType={setType} />
      <ul className="itemlist">
        {filteredData.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
      <button onClick={() => console.log(bookmarkedItems)}>확인</button>
    </div>
  );
}

export default Bookmark;


