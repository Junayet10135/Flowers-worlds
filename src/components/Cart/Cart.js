import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart);
     /* let name = [];
      for(const product of cart){
         name = [...name,product.name];
     }  */ 
    return (
        <div className='cart'>
            <h2>Selected Flowers</h2>
            <div className='flower-list'>
            {
                cart.map(item => 
                    <h4>{item.name}</h4>
                )
                
            }
                {/*  <h2 className='Selected-item'>{name}</h2> */} 
            </div>
            <button>CHOOSE 1 FOR ME</button>
            <button>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;