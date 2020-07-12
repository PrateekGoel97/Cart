import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';

class App extends React.Component {

  constructor () {
    super();
    this.state={
        products:[
        {
            price: 25000,
            title: 'Mobile Phone',
            qty: 100,
            img: 'https://images.unsplash.com/photo-1455762279210-ae6b56c7ad7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            id:1
        },
        {
            price: 56000,
            title: 'Laptop',
            qty: 10,
            img: 'https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            id:2
        },
        {
            price: 2000,
            title: 'Watch',
            qty: 20,
            img: 'https://images.unsplash.com/photo-1517463700628-5103184eac47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
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

getcount= () =>{

  const{products} = this.state;
   let count=0;

  products.forEach((product)=>{
        count+= product.qty;
  })
  return count;
}

  render(){
       const {products} = this.state;
      return (
        <div className="App">
          <NavBar  count={this.getcount()}  />
          <Cart 
              products={products}
              increaseQuantity={this.handleIncrease}           // sending handleincrease as a refrence in props
              decreaseQuantity={this.handleDecrease}  
              ondelete={this.handleDelete}  
          />
        </div>
      );
    }
}


export default App;
