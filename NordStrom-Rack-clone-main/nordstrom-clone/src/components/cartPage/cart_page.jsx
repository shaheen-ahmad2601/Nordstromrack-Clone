import "../productPage/product-page.css";
import giflogo from "../../images/gift.svg";
import freedelivery from "../../images/Screenshot (1310).png";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
export const Cart = () => {
  const {
    items,
    totalItems,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  const Navigation = useNavigate();
  return (
    <>
      <Navbar />
      <div className='main_div'>
        <div className='shopping_bag_main'>
          <div className='shopping_div'>Shopping Bag(1)</div>
          <div className='saved_div'>Saved for Later</div>
        </div>
        <div className='shopping_bag_main1'>
          <div className='shopping_bag_main1_sub'>Shopping Bag</div>
          <p className='shopping_bag_main1_sub2'>
            Items in your bag are not on hold.
          </p>
          <p className='shopping_bag_main1_sub2'>
            <img src={giflogo} /> Add a gift message when you check out.
          </p>
        </div>
        <div className='free_delivery'>
          <img src={freedelivery} />
        </div>
        <div className='horizontal_line'>
          <hr />
        </div>
        <div className='total_item_in_cart'>
          <h5>Unique Item: {totalUniqueItems} </h5>
          <p className='total_item'>Total Item: {totalItems}</p>

          <div className='total_cart_div'>
            <p className='total_cart'>Total Price: ${cartTotal}</p>
          </div>
        </div>
        <div className='product_container'>
          {items.map((item) => (
            // <p key={item.id}>{item.id}</p>
            <div className='buying_product' key={item.id}>
              <div className='buying_product_img_div'>
                <img src={item.images} />
              </div>
              <div className='buying_product_info'>
                <div className='buying_product_info1'>
                  <p className='buying_product_info_brand'>{item.brand}</p>
                  <p className='buying_product_info_name'>{item.name}</p>
                  <p className='buying_product_info_des'>{item.description}</p>
                  <p className='buying_product_info_quantity'>
                    Quantity: {item.quantity}
                  </p>
                  <p className='buying_product_info_price'>
                    Price: ${item.price}
                  </p>
                  <p className='buying_product_info_str'> ${item.origPrice}</p>
                </div>
                <div className='buying_product_info2'>
                  <div className='buying_product_info2_sub'>
                    <button
                      className='buying_product_info2_sub_qty'
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className='buying_product_info2_sub_qty'
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className='buying_product_info2_sub_remove'
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='emptying_cart'>
            <button
              className='emptying_cart_button'
              onClick={() => emptyCart()}
            >
              Clear Cart
            </button>
            <button
              className='emptying_cart_button'
              onClick={() => {
                Navigation("/payment");
              }}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
