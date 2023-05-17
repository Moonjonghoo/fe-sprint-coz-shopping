import './Bookmark.css'
import { useState } from 'react';
import Item from '../component/Item';
import { useEffect } from 'react';
import Filter from '../component/filter';

function Bookmark() {
    const [bookmarkedItems, setBookmarkedItems] = useState([]);
    const [randomData, setRandomData] = useState([]);
    const [type,setType]=useState(null)
  
    useEffect(() => {
      // localStorage에서 데이터 가져오기
      const localStorageData = localStorage.getItem('bookmarkedItems');
      if (localStorageData) {
        setBookmarkedItems(JSON.parse(localStorageData));
      }
    }, []);
  
    // 상품 필터링 함수
    const filterItemsByType = (type) => {
      return bookmarkedItems.filter((item) => item.type === type);
    };
  
    // 필터링된 아이템들을 랜덤하게 선택하여 반환
    const getRandomItems = (array, numItems) => {
      const shuffled = array.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, numItems);
    };
  
    
  
    useEffect(() => {
      if (type==='product') {
        setFilteredRandomData('Product');
      } else if (type==='category') {
        setFilteredRandomData('Category');
      } else if (type==='exhibition') {
        setFilteredRandomData('Exhibition');
      } else if (type==='brand') {
        setFilteredRandomData('Brand');
      } else {
        // 전체일 때는 모든 북마크 아이템을 보여줌
        setRandomData(getRandomItems(bookmarkedItems, 100));
      }
    }, [type, bookmarkedItems]);
  
    // 필터링된 아이템들을 랜덤하게 선택하여 설정
    const setFilteredRandomData = (type) => {
      const filteredItems = filterItemsByType(type);
      const randomItems = getRandomItems(filteredItems, 100);
      setRandomData(randomItems);
    };
  
    return (
      <div>
        <Filter
          type={type} setType={setType}
        />
        <ul className="itemlist">
          {randomData.map((item) => (
            <Item key={item.id} {...item} />
          ))}    </ul>

          <button onClick={() => console.log(bookmarkedItems)}>확인</button>
        </div>
      );
    }
    
    export default Bookmark;



