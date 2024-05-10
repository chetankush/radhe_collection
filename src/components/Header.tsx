import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <h1 className="text-xl font-bold">My Store</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li className="hover:text-gray-300">Home</li>
                        <li className="hover:text-gray-300">Products</li>
                        <li className="hover:text-gray-300">Favorites</li>
                        <li className="hover:text-gray-300">Cart</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
