import React from 'react';
import CartItem from './CartItem'; 

const Cart =(props) => {
  
        const{products} = props;                            

        return(
            <div className="cart">
            { products.map((product) => {                              // getting every object of products array in product
                     return <CartItem 
                     product={product}                                 // sending product as props
                     key={product.id}                                 // sending a unique key just for differentiating item
                     increaseQuantity={props.increaseQuantity}           
                     decreaseQuantity={props.decreaseQuantity}  
                     ondelete={props.ondelete}
                     />
                })
            }
            </div>    
        )
}


export default Cart;