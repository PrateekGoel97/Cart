import React from 'react';

const CartItem =(props) => {
  // // constructor () {
  // //   super();
  // //   this.state = {
  // //     price: 999,
  // //     title: 'Mobile Phone',
  // //     qty: 1,
  // //     img: ''
  // //   }
  // //   // this.increaseQuantity = this.increaseQuantity.bind(this);
  // //   // this.testing();
  // // }

  // // testing () {
  // //   const promise = new Promise((resolve, reject) => {
  // //     setTimeout(() => {
  // //       resolve('done');
  // //     }, 5000);
  // //   })

  // //   promise.then(() => {
  // //     // setState acts like a synchronus call
  // //     this.setState({ qty: this.state.qty + 10 });

  // //     this.setState({ qty: this.state.qty + 10 });

  // //     this.setState({ qty: this.state.qty + 10 });

  // //     console.log('state', this.state);
  // //   });
  // // }
  // increaseQuantity = () => {
  //   // this.state.qty += 1;
  //   // console.log('this', this.state);
  //   // setState form 1
  //   // this.setState({
  //   //   qty: this.state.qty + 1
  //   // }, () => {});

  //   // setState form 2 - if prevState required use this
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty + 1
  //     }
  //   });
  // }

  // decreaseQuantity = () => {
  //   const { qty } = this.state;

  //   if (qty === 0) {
  //     return;
  //   }
  //   // setState form 2 - if prevState required use this
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty - 1
  //     }
  //   });
  // }


    const { price, title, qty,img } = props.product;                                          // getting product from props
    const{product,increaseQuantity,decreaseQuantity, ondelete } = props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={img} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992651.svg"
              onClick={ ()=> increaseQuantity(product)}      // calling increaseQuantity as a funvtion by arrow function by passing product as a parameter
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
              onClick={() => decreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
              onClick={()=> ondelete(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }


const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;