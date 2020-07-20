import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';
import * as firebase from'firebase';

class App extends React.Component {

  constructor () {
    super();
    this.state={
        products:[],
        loading:true
  } 
  this.db = firebase.firestore();
}

componentDidMount(){
  //  firebase
  //  .firestore()
  //  .collection('products')
  //  .get()
  //  .then((snapshot) =>{
  //    console.log(snapshot);

  //    snapshot.docs.map((doc)=>{
  //      console.log(doc.data());
  //    })

  //    const products = snapshot.docs.map((doc)=>{
      
  //     const data=doc.data();

  //     data['id']= doc.id;

  //     return data;
  //    })

  //    this.setState({
  //      products:products,
  //      loading:false
  //    })

  //  })

  firebase
   .firestore()
   .collection('products')
   .onSnapshot((snapshot) =>{
    console.log(snapshot);

    snapshot.docs.map((doc)=>{
      console.log(doc.data());
    })

    const products = snapshot.docs.map((doc)=>{
     
     const data=doc.data();

     data['id']= doc.id;

     return data;
    })

    this.setState({
      products:products,
      loading:false
    })

  })

}

handleIncrease = (product) =>{                           // getting product as a parameter
     
    const {products}= this.state;                        // getting products array with help of state
    const index =  products.indexOf(product);            // getting index of product from products array

    // products[index].qty += 1;                            // increasing quantity

    // this.setState({
    //     products:products                                // setting state of products array to updated products array
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
    .update({
        qty: products[index].qty+1
    })
    .then(()=>{
        console.log('documeent updated successfully')
    })
    .catch((error) =>{
      console.log(error);
    })
}

handleDecrease =( product) =>{
    
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0){                         // checking if products are zero then dont set it to negative
        return; 
    }
    // products[index].qty -= 1;

    // this.setState({
    //     products:products,
    //     loading:false
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
    .update({
      qty: products[index].qty-1
    })
    .then(()=>{
      console.log('decresed successfully')
    })
    .catch((error) =>{
      console.log(error);
    })

}

handleDelete = (id) =>{

    const {products} = this.state;
    const items = products.filter((item)=> item.id !== id);          // filter the array whose id doesnt match

    // this.setState({
    //     products:items
    // })

    const docRef = this.db.collection('products').doc(id);

    docRef
    .delete()
    .then(()=>{
      console.log('Deleted successfully')
    })
    .catch((error) =>{
      console.log(error);
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

getCartTotal = () => {
  const { products } = this.state;

  let cartTotal = 0;

  products.map((product) => {
    cartTotal = cartTotal + product.qty * product.price
  })

  return cartTotal;
}

addProduct = () => {

     this.db
     .collection('products')
     .add({
        img:'',
        price:900,
        qty:5,
        title:"Washing Machine"
     })
     .then((docRef)=>{
         console.log('Product added',docRef);
     })
     .catch((error)=> {
       console.log(error);
     })
}


  render(){
       const {products,loading} = this.state;
      return (
        <div className="App">
          <NavBar  count={this.getcount()}  />
          <button onClick={this.addProduct}> Add a Product</button>
          <Cart 
              products={products}
              increaseQuantity={this.handleIncrease}           // sending handleincrease as a refrence in props
              decreaseQuantity={this.handleDecrease}  
              ondelete={this.handleDelete}  
          />
           {loading && <h1> Loading Products... </h1>}
           <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
        </div>
      );
    }
}


export default App;
