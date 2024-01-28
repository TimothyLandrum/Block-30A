import React from 'react';
import { userSelector } from 'react-redux';

const CheckoutBook = ({ bookId }) => {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    
    const handleCheckout = async () => {
        if(!isAuthenticated) {
            return;
        }
    };

    return (
        <div>
            {isAuthenticated ? (
                <button onClick={handleCheckout}>Checkout</button>
            ) : (
                <p>Please log in to checkout books.</p>
            )}
        </div>
    );
};

export default CheckoutBook;