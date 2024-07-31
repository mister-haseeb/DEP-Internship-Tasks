import React, { createContext, useState } from 'react';

// Create context
const ShopContext = createContext();

// Create provider component
const ShopProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    return (
        <ShopContext.Provider value={{ products, setProducts }}>
            {children}
        </ShopContext.Provider>
    );
};

export { ShopContext, ShopProvider };
