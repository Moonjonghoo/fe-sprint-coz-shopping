import './Item.css'

function Item(props) {
    return (
        <div className="item">
            <img className='image' src={props.image_url || props.brand_image_url} alt='대체이미지'></img>
            <div className='first-line'>
            <div className="item-title">
             {props.type === 'Brand' ? props.brand_name : (props.type === 'Category' ? '#' + props.title : props.title)}
        </div>
                <div>
                    {props.type === 'Product' ? props.discountPercentage + '%' : null}
                    {props.type === 'Brand' ? '관심고객수' : null}
                </div>
            </div>
            <div className='price'>{props.price || props.follower}</div>
            <div style={{ clear: "both" }}></div>
            <div>{props.sub_title}</div>
            <div></div>

        </div>
    );
}

export default Item;

