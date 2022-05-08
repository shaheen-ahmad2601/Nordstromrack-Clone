import { useCart } from "react-use-cart";

const Product_card = (props) => {
  const { addItem } = useCart();
  return (
    <div className='item_card'>
      <div className='img_div'>
        <img src={props.image} />
        <div className='hid_box'>Quick View</div>
      </div>
      <div className='item_card_sub'>
        <div className='title_div'>
          <h4 className='new_markdown'>New Markdown</h4>
          <h4 className='product_name'>{props.name}</h4>
        </div>
        <div className='discription_div'>
          <p className='discription'>{props.description}</p>
        </div>
        <div className='price_info'>
          <p className='price'>${props.price}</p>
        </div>
        <div className='strike_price_div'>
          <p className='strike_price'>${props.strprice}</p>
          <p className='rating'>
            &#9733;<span className='no_rating'>{props.rating}</span>
          </p>
        </div>
        <div className='last_div'>
          <p className='free_shiping'>Free Shipping on Orders $89+</p>
          <button className='add_to_cart' onClick={() => addItem(props.item)}>
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product_card;
