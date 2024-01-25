import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Reservations = ({ isLoggedIn }) => {
  const [reservations, setReservations] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/login');
    } else {

    }
  }, [isLoggedIn, history]);


  return (
    <div>
      <h2>Reservations</h2>
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