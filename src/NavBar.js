import React from 'react';


const NavBar  = ()=> {

        return(
            <div className="navbar">
                <div className="carticoncontainer">
                    <img  className="cart-icon" src="https://image.flaticon.com/icons/svg/833/833314.svg" alt="cart-icon" />
                    <span className='cartcount'>3</span>
                </div>
            </div>
        );
    }


export default NavBar;