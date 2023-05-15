import './Item.css'

function Item(props) {
    return ( 
        <div className="item">
            {console.log(props)}
            <img className='image' src={props.image_url || props.brand_image_url} alt='대체이미지'></img>
            <div className='first-line'>
            <div className='title'>{props.title || props.brand_name}</div>
            <div>{props.discountPercentage+'%'}</div>
            </div>
            <div className='price'>{props.price || props.follower}</div>
            <div style={{clear:"both"}}></div>
            <div>{props.sub_title}</div>
            <div></div>
            
        </div>
     );
}

export default Item;

