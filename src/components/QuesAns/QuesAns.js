import React from 'react';
import './QuesAns.css'

const QuesAns = () => {
    return (
        <div>
            <h1>Question And Answer</h1>
            <div className='Ques-ans' >
                 <h3>How React Works?</h3>
            <p>
                At first, we have to know what is react? many people think it's a           framework of js but they are wrong its a library of JavaScript.<br></br>
                using react we can Create User Interfaces in shorts UI, In an efficient way with decent code.<br></br>
                with react we can build single-page applications in shorts(SPA) and mobile apps.<br></br>
                In React you can use HTML code but it's not actually HTML its name is JSX, it also has, state, components.<br></br>
                For Improving Performance it uses virtual DOM for creating a website faster.<br></br>
                Virtual DOM is always Compared with real DOM for Change if users change anything.
                </p>
            <h3>props vs state?</h3>
            <p>
                Props only can read and its immutable other hand states can make a change also mutable.<br></br>
                child components accessible for props other hand states change dynamically with components.<br></br>
                components can be reusable with props other hands IN state components are not for reusable.<br></br>
                props can be changed by parent components but a state cannot.<br></br>
                props can not make changes in inside components but state can.<br></br>
            </p>
            </div>
        </div>
    );
};

export default QuesAns;