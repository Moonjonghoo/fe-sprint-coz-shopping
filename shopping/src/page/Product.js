import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from '../component/filter';
import Item from '../component/Item';
import './Product.css';

function Product() {
  const [wholedata, setWholedata] = useState([]);
  const [전체, set전체] = useState(false);
  const [상품, set상품] = useState(false);
  const [카테고리, set카테고리] = useState(false);
  const [기획전, set기획전] = useState(false);
  const [브랜드, set브랜드] = useState(false);
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://cozshopping.codestates-seb.link/api/v1/products?count=');
        setWholedata(response.data);

        // 12개의 랜덤 데이터 선택
        const randomItems = getRandomItems(response.data, 100);
        setRandomData(randomItems);
      } catch (error) {
        console.error(error);
      } finally {
        console.log('로딩끝');
      }
    }
    fetchData();
  }, []);

  // 배열에서 랜덤하게 numItems 개수 만큼 아이템을 선택하는 함수
  const getRandomItems = (array, numItems) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
  };

  // 특정 타입에 해당하는 상품들 필터링
  const filterItemsByType = (type) => {
    return wholedata.filter((item) => item.type === type);
  };

  // 필터링된 아이템들을 랜덤하게 선택하여 설정
  const setFilteredRandomData = (type) => {
    const filteredItems = filterItemsByType(type);
    const randomItems = getRandomItems(filteredItems, 100);
    setRandomData(randomItems);
  };

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
      // 전체일 때는 그냥 wholedata를 보여줌
      setRandomData(getRandomItems(wholedata, 100));
    }
  }, [상품, 카테고리, 기획전, 브랜드]);

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
    ))}
  </ul>

  <button onClick={() => console.log(wholedata)}>확인</button>
</div>);
}

export default Product;