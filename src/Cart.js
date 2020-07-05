import React from 'react';
import CartItem from './CartItem'; 

class Cart extends React.Component {
    constructor () {
        super();
        this.state={
            products:[
            {
                price: 25000,
                title: 'Mobile Phone',
                qty: 100,
                img: '',
                id:1
            },
            {
                price: 56000,
                title: 'Laptop',
                qty: 10,
                img: '',
                id:2
            },
            {
                price: 2000,
                title: 'Watch',
                qty: 20,
                img: '',
                id:2
            }
        ]
      } 
    }
    render(){

        const{products} = this.state;

        return(
            
            <div className="cart">
            { products.map((product) => {
                     return <CartItem product={product} key={product.id} />
                })
            }
            </div>
            
        )
    }
}

export default Cart;