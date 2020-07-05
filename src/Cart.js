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
                id:3
            }
        ]
      } 
    }

    handleIncrease = (product) =>{                           // getting product as a parameter
         
        const {products}= this.state;                        // getting products array with help of state
        const index =  products.indexOf(product);            // getting index of product from products array

        products[index].qty += 1;                            // increasing quantity

        this.setState({
            products:products                                // setting state of products array to updated products array
        })
    }

    handleDecrease =( product) =>{
        
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty === 0){                         // checking if products are zero then dont set it to negative
            return; 
        }
        products[index].qty -= 1;

        this.setState({
            products:products
        })

    }

    handleDelete = (id) =>{

        const {products} = this.state;
        const items = products.filter((item)=> item.id !== id);          // filter the array whose id doesnt match

        this.setState({
            products:items
        })
    }

    render(){

        const{products} = this.state;                            

        return(
            <div className="cart">
            { products.map((product) => {                              // getting every object of products array in product
                     return <CartItem 
                     product={product}                                 // sending product as props
                     key={product.id}                                 // sending a unique key just for differentiating item
                     increaseQuantity={this.handleIncrease}           // sending handleincrease as a refrence in props
                     decreaseQuantity={this.handleDecrease}  
                     ondelete={this.handleDelete}
                     />
                })
            }
            </div>    
        )
    }
}

export default Cart;