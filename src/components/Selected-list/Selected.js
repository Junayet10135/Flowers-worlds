import React from 'react';

const Selected = (props) => {
    console.log(props.item);
    const {name} = props.item;
    return (
        <div>
            {name}
        </div>
    );
};

export default Selected;