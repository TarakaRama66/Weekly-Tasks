import { useState } from "react";

function TicketBooking() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
        <h1>Mini Practice</h1>
        <h2>Movie Ticket Booking</h2>
        {isLoggedIn ? (
        <div>
            <h2>Welcome, Customer!</h2>
            <p>You can now book movie tickets.</p>
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
        ) : (
        <div>
            <h2>Please Login to Book Tickets</h2>
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </div>
      )}
    </div>
  );
}

export default TicketBooking;