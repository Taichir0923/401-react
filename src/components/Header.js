import React from 'react';
import Navigation from './Navigation';

const Header = props => {
    return (
        <header className="w-full flex border-b border-gray-600 justify-between items-center">
            <h1>zurag</h1>
            <Navigation />
        </header>
    )
}

export default Header;