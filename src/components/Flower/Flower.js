import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Flower.css'

const Flower = ({flower, handleAddToCart}) => {
    const {name, img, price} = flower;
    return (
        <div className='flower'>
            <img src={img} alt="" />
            <div className='flower-info'>
                <h2>Flower Name: <small>{name}</small></h2>
                <h2>Price: <small>{price}</small></h2>
            </div>
            <button  onClick={() =>handleAddToCart(flower)} className='btn-cart'>
               <p className='btn-text'>Add to Cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
            
        </div>
    );
};

export default Flower;