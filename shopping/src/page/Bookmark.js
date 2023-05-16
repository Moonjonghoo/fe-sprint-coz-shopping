import './Bookmark.css'
import { useState } from 'react';

function Bookmark() {
    return (
        <div>
            <Filter></Filter>
        </div>
      );
}

export default Bookmark;

function Filter() {
    const [전체, set전체] = useState(false);
  const [상품, set상품] = useState(false);
  const [카테고리, set카테고리] = useState(false);
  const [기획전, set기획전] = useState(false);
  const [브랜드, set브랜드] = useState(false);
    

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