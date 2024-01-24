import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'
import '@testing-library/jest-dom';

//PSEUDOCODE:
//1. render the main app component
//2. Find test for the word "test"
//3. Add to the test as components are built

describe('App component', () => {
    test('displayed a header with test text', () => {
        //render the App component
        render(<App />);

        //find text "test"
        expect(screen.getByText('test')).toBeInTheDocument();
    });

});