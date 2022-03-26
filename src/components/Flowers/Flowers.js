import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Flower from '../Flower/Flower';
import './Flowers.css'

const Flowers = () => {
const [flowers, setFlower] = useState([]);
const [cart, setCart] = useState([]);

useEffect(() =>{
    fetch ('flowers.json')
    .then(res => res.json())
    .then(data => setFlower(data))
},[]);
     const chooseBtn = () =>{
        let select = [];
        const run = Math.floor(Math.random() * cart.length);
        select.push(cart[run]);
        setCart(select);
    }
    const chooseAgain = () =>{
        const again = [];
        setCart(again);
    }
  const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='flowers-container'>
            <div className='products-container'>
            {
                flowers.map(flower => <Flower
                key = {flower.id}
                flower = {flower}
                handleAddToCart={handleAddToCart} 
                >
                </Flower>)
            }
            </div>
            <div className="cart-container">
                <Cart
                    key = {cart.id}
                    cart = {cart}
                    chooseBtn = {chooseBtn}
                    chooseAgain = {chooseAgain}
                ></Cart>
           </div>
           
        </div>
        
    );
};

export default Flowers;