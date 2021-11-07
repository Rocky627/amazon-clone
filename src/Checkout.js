import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import FlipMove from 'react-flip-move';

function Checkout() {

    const [{cart,user}] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
                <div>
                <h3>{user?"Hello "+ user.email : null }</h3>
                <h2 className="checkout__title">Your Cart</h2>
                
                    {cart.map(item => (
                    <FlipMove>
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                    </FlipMove>
                    ))}
                
            </div>
        </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
            
        </div>
    )
}

export default Checkout