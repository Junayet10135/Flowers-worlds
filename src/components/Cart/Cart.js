import './Cart.css'

const Cart = ({cart}) => {

    const chooseBtn = () =>{
        console.log('clicked');
    }
    return (
        <div className='cart'>
            <h2>Selected Flowers</h2>
            <div className='flower-list'>
            {
                cart.map(item => 
                    
                    <h4>{item.name}</h4>
                )
                
            }
            </div>
            <button onClick={chooseBtn}>CHOOSE 1 FOR ME</button>
            <button>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;