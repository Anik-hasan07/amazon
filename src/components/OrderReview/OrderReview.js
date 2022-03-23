import React from 'react'
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts'
import Cart from '../Cart/Cart';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useNavigate } from 'react-router-dom';

const OrderReview = () => {
  const[products,setProducts] = useProducts();
  const[cart,setCart] = useCart(products);
  const navigate = useNavigate();
  
  const handleRemove = key=>{
    const newCart = cart.filter(product=>product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  }

    const handlePlaceOrder=()=>{
      navigate('/placeorder')
      setCart([]);
      clearTheCart()

  }
  

  return (
    <div className='shop-container'>
      <div className='product-container'>
      {
                        cart.map(product=><ReviewItem 
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}>
                  
                  
                  

                        </ReviewItem>)

              }
      </div>
      <div className='cart-container'>
      <Cart cart={cart}></Cart>
      <button onClick={handlePlaceOrder} className='btn-regular'>Place Order</button>
                    


      </div>

    
    </div>
  );
}

export default OrderReview