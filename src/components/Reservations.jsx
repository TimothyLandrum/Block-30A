import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Reservations = ({ isLoggedIn }) => {
  const [reservations, setReservations] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // Check if the user is not logged in or doesn't have a valid token
    if (!isLoggedIn) {
      // Redirect to the login page or handle it based on your application logic
      history.push('/login');
    } else {
      // Fetch reservations data or perform actions requiring authentication
      // Update the reservations state accordingly
      // Example:
      // fetchReservations();
    }
  }, [isLoggedIn, history]);

  // Add your JSX for rendering reservations here

  return (
    <div>
      <h2>Reservations</h2>
      {/* Render reservations or display a message based on the state */}
      {isLoggedIn ? (
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation.id}>{reservation.title}</li>
          ))}
        </ul>
      ) : (
        <p>Please log in to view reservations.</p>
      )}
    </div>
  );
};

export default Reservations;