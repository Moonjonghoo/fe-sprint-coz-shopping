import './Item.css';
import { useState } from 'react';

function Item(props) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);

   
    const bookmarkedItems = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];
    if (isBookmarked) {
      const updatedItems = bookmarkedItems.filter(item => item.id !== props.id);
      localStorage.setItem('bookmarkedItems', JSON.stringify(updatedItems));
      console.log('제거되었습니다.')
    } else {
      const newItem = {
        id:props.id,
        title: props.title,
        brand_image_url:props.brand_image_url,
        brand_name:props.brand_name,
        discountPercentage:props.discountPercentage,
        follower:props.follower,
        image_url:props.image_url,
        price:props.price,
        sub_title:props.sub_title,
        type:props.type
      };
      bookmarkedItems.push(newItem);
      localStorage.setItem('bookmarkedItems', JSON.stringify(bookmarkedItems));
      console.log('추가되었습니다.')
    }
  };

  return (
    <div className="item">
      <div className="whole-wrapper">
        <div className="image-wrapper">
          <img className="image" src={props.image_url || props.brand_image_url} alt="대체이미지" />
        </div>
        <div className="bookmark-wrapper">
          <button className="bookmark-button" onClick={handleBookmark}>
            <i className={`fas fa-star${isBookmarked ? ' bookmarked' : ''}`}></i>
          </button>
        </div>
      </div>
      <div className="first-line">
        <div className="item-title">
          {props.type === 'Brand' ? props.brand_name : props.type === 'Category' ? '#' + props.title : props.title}
        </div>
        <div className='right-elemnt'>
        
          {props.type === 'Product' ? props.discountPercentage + '%' : null}
          {props.type === 'Brand' ? '관심고객수' : null}
        </div>
      </div>
      <div className="price">{props.price || props.follower}</div>
      
      <div>{props.sub_title}</div>
    </div>
  );
}

export default Item;