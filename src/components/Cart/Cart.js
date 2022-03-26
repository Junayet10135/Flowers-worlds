import './Cart.css'

const Cart = ({cart , chooseBtn, chooseAgain}) => {
   
    return (
        <div className='cart'>
            <h2>Selected Flowers</h2>
            <div >
            {
                cart.map(item => 
                    
                    <div className='flower-list'>
                        <img src={item.img} alt="" />
                        <h4 className='select-item'>{item.name}</h4>
                    </div>
                    
                )
                
            }
            
            </div>
            <button className='choose-btn' onClick={chooseBtn}>CHOOSE 1 FOR ME</button>
            <button className='again-btn' onClick={chooseAgain}>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;