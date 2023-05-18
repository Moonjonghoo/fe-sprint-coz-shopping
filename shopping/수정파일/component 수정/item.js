import './item.css'

function Item(props) {
    return (
        <div className='item'>
            <img className="item-image" src={props.image_url || props.brand_image_url} alt="대체이미지" />
            <div className='item-data'>
            <div>{props.type === 'Brand' ? props.brand_name : props.type === 'Category' ? '#' + props.title : props.title} </div>
            <div className='left'>{props.type === 'Product' ? props.discountPercentage + '%' : null} {props.type === 'Brand' ? '관심고객수' : null}</div>
            
            <div>{props.sub_title}</div>
            <div className='left'>{props.type === 'Product' ?props.price + '원' : props.type==='Brand'? props.follower : null}</div>
            
            </div>


        </div>
    );
}

export default Item;