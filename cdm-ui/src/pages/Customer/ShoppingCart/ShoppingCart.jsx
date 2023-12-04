import './cartStyle.css';
import SideBar from "../../../layouts/components/SideBar";
import CartList from './components/CartList';
import FooterCart from './components/FooterCart';
import CartData from './cart'
import { useState } from 'react';


//new
const ShoppingCart = () => {

  const [cart, setCart] = useState(CartData)

  const totalAmount = cart.reduce((total, currenValue) => {
    return total + currenValue.amount;
  }, 0);
  
  const totalPrice = cart.reduce((total, currenValue) => {
    return total + currenValue.amount * currenValue.price;
  }, 0)

  const handleRemoveItem = (id) =>{
    setCart(cart.filter((cartItem) => cartItem.id !== id));
  }

  const handleIncreaseAmount = (id) =>{   
    const newCart = [...cart]
    const index = cart.findIndex((cartItem) => cartItem.id === id)
    newCart[index].amount++;
    setCart(newCart)
  } 

  const handleDecreaseAmount = (id) =>{   
    const newCart = [...cart]
    const index = cart.findIndex((cartItem) => cartItem.id === id)
    if(newCart[index].amount > 0) 
    {
      newCart[index].amount--;
      setCart(newCart)
    }
  } 

  const handleClearCart = () => {
    setCart([])
  }

  return (
    <main className='flex'>
      <SideBar />
      <section className="cart">
        <header className='flex justify-center mb-6'>
          <h2>your bag</h2>
          <div className="relative mt-[6px] mr-[-30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              className='text-2xl ml-[50px] mt-[5px]'
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            <div className="amount-container">
              <p className="total-amount">{totalAmount}</p>
            </div>
        </div>
        </header>

        <div className='h-[400px] overflow-y-scroll scroll-cart'>
          <CartList 
            cartData={cart} 
            onclickRemove={handleRemoveItem} 
            onclickIncreaseAmount={handleIncreaseAmount} 
            onclickDecreaseAmount={handleDecreaseAmount}
            
           />
        </div>
       
        <FooterCart 
          totalPrice={totalPrice}
          onclickClearCart={handleClearCart}
          />
      </section>
    </main>
  );
}

export default ShoppingCart;
