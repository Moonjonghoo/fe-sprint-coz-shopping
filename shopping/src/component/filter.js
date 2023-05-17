import React from 'react';
import './filter.css';

function Filter({ type, setType }) {
  const stateClickhandler = (selectedType) => {
    setType(selectedType);
  };

  return (
    <div className="Filter">
      <div className="Filter__list">
        <img src={process.env.PUBLIC_URL + '/전체.png'} alt="전체" />
        <div className={type === null ? 'Filter__discription' : null} onClick={() => stateClickhandler(null)}>
          전체
        </div>
      </div>
      <div className="Filter__list">
        <img src={process.env.PUBLIC_URL + '/상품.png'} alt="상품" />
        <div className={type === 'Product' ? 'Filter__discription' : null} onClick={() => stateClickhandler('Product')}>
          상품
        </div>
      </div>
      <div className="Filter__list">
        <img src={process.env.PUBLIC_URL + '/카테고리.png'} alt="카테고리" />
        <div className={type === 'Category' ? 'Filter__discription' : null} onClick={() => stateClickhandler('Category')}>
          카테고리
        </div>
      </div>
      <div className="Filter__list">
        <img src={process.env.PUBLIC_URL + '/기획전.png'} alt="기획전" />
        <div className={type === 'Exhibition' ? 'Filter__discription' : null} onClick={() => stateClickhandler('Exhibition')}>
          기획전
        </div>
      </div>
      <div className="Filter__list">
        <img src={process.env.PUBLIC_URL + '/브랜드.png'} alt="브랜드" />
        <div className={type === 'Brand' ? 'Filter__discription' : null} onClick={() => stateClickhandler('Brand')}>
          브랜드
        </div>
      </div>
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


