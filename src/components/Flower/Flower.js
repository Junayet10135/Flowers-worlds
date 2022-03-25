import React from 'react';

const Flower = (props) => {
    const {name, img} = props.flower;
    return (
        <div>
            <h2>Flower Name: {name}</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default Flower;