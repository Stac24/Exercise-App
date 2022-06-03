import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className='navbar'>
            <Link className='navlink' to="/" exact> Home Page </Link>
            <Link className='navlink' to="/create-exercise"> Create Exercise </Link>
        </nav>
    );
}

export default Navigation;