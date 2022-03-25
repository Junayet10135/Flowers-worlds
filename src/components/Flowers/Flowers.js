import React, { useEffect, useState } from 'react';
import Flower from '../Flower/Flower';
import './Flowers.css'

const Flowers = () => {
const [flowers, setFlower] = useState([]);
useEffect(() =>{
    fetch ('flowers.json')
    .then(res => res.json())
    .then(data => setFlower(data))
},[]) 
    return (
        <div>
            <h2>Assignment 8 from : {flowers.length}</h2>
            {
                flowers.map(flower => <Flower
                key = {flower.id}
                flower = {flower} 
                >
                </Flower>)
            }
        </div>
    );
};

export default Flowers;