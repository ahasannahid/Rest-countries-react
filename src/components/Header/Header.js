import './Header.css'
import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>This is from Header Component</h1>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;