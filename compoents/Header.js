import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <img className='logo' src="https://i.pinimg.com/1200x/2b/35/a4/2b35a4763a31b6f5f40d9de9d7e05f88.jpg" alt="" />
        <a href="#/">
          <h1>Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}