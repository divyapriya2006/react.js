App.jsx

import React from "react";
import FlightBooking from "./Coreconcepts/Task/FlightBooking";

function App() {
  return (
    <div>
      <FlightBooking />
    </div>
  );
}

export default App;

FlightBooking.jsx

function FlightBooking() {
  const bookTicket = () => {
    // Prompt dialogs for user input
    const name = prompt("Enter Passenger Name:");
    if (!name) {
      alert("Booking cancelled: Name is required.");
      return;
    }

    const destination = prompt("Enter Destination:");
    if (!destination) {
      alert("Booking cancelled: Destination is required.");
      return;
    }

    const seats = prompt("Enter Number of Seats:");
    if (!seats || isNaN(seats)) {
      alert("Booking cancelled: Please enter a valid number of seats.");
      return;
    }

    // Confirmation dialog
    const confirmBooking = confirm(
      `Please confirm your booking:\n\nPassenger: ${name}\nDestination: ${destination}\nSeats: ${seats}`
    );

    if (confirmBooking) {
      // Alert dialog
      alert(
        `🎉 Booking Successful!\n\nPassenger: ${name}\nDestination: ${destination}\nSeats Booked: ${seats}`
      );
    } else {
      alert("Booking cancelled by user.");
    }
  };
 
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>✈️ Flight Ticket Booking</h1>
      <button
        onClick={bookTicket}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Book Flight
      </button>
    </div>
  );
}

export default FlightBooking;
