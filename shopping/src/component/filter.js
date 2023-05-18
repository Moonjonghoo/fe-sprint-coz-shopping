import React from 'react';
import './filter.css';

const filterItems = [
  { type: null, label: '전체', imgSrc: '/전체.png' },
  { type: 'Product', label: '상품', imgSrc: '/상품.png' },
  { type: 'Category', label: '카테고리', imgSrc: '/카테고리.png' },
  { type: 'Exhibition', label: '기획전', imgSrc: '/기획전.png' },
  { type: 'Brand', label: '브랜드', imgSrc: '/브랜드.png' },
];

function Filter({ type, setType }) {
  const stateClickHandler = (selectedType) => {
    setType(selectedType);
  };

  return (
    <div className="Filter">
      {filterItems.map((item) => (
        <div className="Filter__list" key={item.type}>
          <img src={process.env.PUBLIC_URL + item.imgSrc} alt={item.label} />
          <div
            className={type === item.type ? 'Filter__description' : ''}
            onClick={() => stateClickHandler(item.type)}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Filter;

//클릭시 ->focus느낌으로 글씨색깔바뀌고 밑줄효과발생되며
//근데 다른거누르면 다른거만눌려야됨(원래눌럿던건삭제)
//css요소

//코드
// 클릭이된것에따라 api호출이되야됨.
//일단 페이지로드되면 api call통해서 100개데이터 한방에받기
//그러면 그데이터를 state에 저장함
//그리고 클릭하면 그데이터를 필터링해서 map을통해 보여주자.
//삼항연산자 눌린거안눌린거 상태관리를 어캐하냐

// 방법1
// 전체 f 상품 f 카테고리 f 기획전 f 브랜드 f
// 5가지상태중 true값을 가질수있는것은 하나이다.
// 해당클릭시 무조건 true로바꿔줌(+css)

//이상태에따라 데이터 필터링해서보여줄꺼임.


