import React from 'react'

const CartItem = (props) => {
    const cartItem = props.cartItem

    const handleRemoveItem = (id) =>{
        props.onclickRemove(id);
    }

    const handleIncreaseAmount = (id) =>{
        props.onclickIncreaseAmount(id);
    }

    const handleDecreaseAmount = (id) =>{
        props.onclickDecreaseAmount(id);
    }
    
    return (
        <article className="cart-item">
            <img src={cartItem.img} alt="" />
            <div>
                <h4>{cartItem.title}</h4>
                <h4 className="item-price">{cartItem.price * cartItem.amount}$</h4>
                <div className='remove-btn' onClick={() => handleRemoveItem(cartItem.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                </div>
                <div>
                </div>
            </div>
            <div>
                <button className="amount-btn" onClick={() => handleIncreaseAmount(cartItem.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                    </svg>
                </button>

                <p className="amount">{cartItem.amount}</p>

                <button className="amount-btn" onClick={() => handleDecreaseAmount(cartItem.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </button>
            </div>
        </article>
    )
}

export default CartItem
