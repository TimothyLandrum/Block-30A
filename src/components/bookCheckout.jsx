import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

const CheckoutBook = ({ bookId }) => {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    
    const handleCheckout = async () => {
        if(!isAuthenticated) {
            return;
        } else {
            handleCheckout();
        }
    }

    return (
        <div>
            {isAuthenticated ? (
                <Button variant='contained' color='secondary' onClick={handleCheckout}>Checkout</Button>
            ) : (
                <p>Please log in to checkout books.</p>
            )}
        </div>
    );
};

export default CheckoutBook;
