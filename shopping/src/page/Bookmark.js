import './Bookmark.css'
import { useState } from 'react';
import Item from '../component/Item';
import { useEffect } from 'react';

function Bookmark() {
    const [bookmarkedItems, setBookmarkedItems] = useState([]);
  
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
  
    const [전체, set전체] = useState(false);
    const [상품, set상품] = useState(false);
    const [카테고리, set카테고리] = useState(false);
    const [기획전, set기획전] = useState(false);
    const [브랜드, set브랜드] = useState(false);
    const [randomData, setRandomData] = useState([]);
  
    useEffect(() => {
      if (상품) {
        setFilteredRandomData('Product');
      } else if (카테고리) {
        setFilteredRandomData('Category');
      } else if (기획전) {
        setFilteredRandomData('Exhibition');
      } else if (브랜드) {
        setFilteredRandomData('Brand');
      } else {
        // 전체일 때는 모든 북마크 아이템을 보여줌
        setRandomData(getRandomItems(bookmarkedItems, 100));
      }
    }, [상품, 카테고리, 기획전, 브랜드, bookmarkedItems]);
  
    // 필터링된 아이템들을 랜덤하게 선택하여 설정
    const setFilteredRandomData = (type) => {
      const filteredItems = filterItemsByType(type);
      const randomItems = getRandomItems(filteredItems, 100);
      setRandomData(randomItems);
    };
  
    return (
      <div>
        <Filter
          전체={전체}
          set전체={set전체}
          상품={상품}
          set상품={set상품}
          카테고리={카테고리}
          set카테고리={set카테고리}
          기획전={기획전}
          set기획전={set기획전}
          브랜드={브랜드}
          set브랜드={set브랜드}
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



function Filter({전체,set전체,상품,set상품,카테고리,set카테고리,기획전,set기획전,브랜드,set브랜드}) {
   
    

    const stateClickhandler = (stateSetter) => () => {
        set전체(false);
        set상품(false);
        set카테고리(false);
        set기획전(false);
        set브랜드(false);
        stateSetter(true);
      };
    
      

    return (
        <div className="Filter">
            <div className="Filter__list"> 
            <img src={process.env.PUBLIC_URL + ('/전체.png')} alt="전체"/> 
            <div className={전체===true?'Filter__discription':null} onClick={stateClickhandler(set전체)}>전체</div>
            </div>
            <div className="Filter__list"> 
            <img src={process.env.PUBLIC_URL + ('/상품.png')} alt="상품"/> 
            <div className={상품===true?'Filter__discription':null} onClick={stateClickhandler(set상품)}>상품</div>
            </div>
            <div className="Filter__list"> 
            <img src={process.env.PUBLIC_URL + ('/카테고리.png')} alt="카테고리"/> 
            <div className={카테고리===true?'Filter__discription':null} onClick={stateClickhandler(set카테고리)}>카테고리</div>
            </div>
            <div className="Filter__list"> 
            <img src={process.env.PUBLIC_URL + ('/기획전.png')} alt="기획전"/> 
            <div className={기획전===true?'Filter__discription':null} onClick={stateClickhandler(set기획전)}>기획전</div>
            </div> 
            <div className="Filter__list"> 
            <img src={process.env.PUBLIC_URL + ('/브랜드.png')} alt="브랜드"/> 
            <div className={브랜드===true?'Filter__discription':null} onClick={stateClickhandler(set브랜드)}>브랜드</div>
            </div>
            
        </div>
      );
}