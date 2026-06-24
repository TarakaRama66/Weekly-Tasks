class SeatUnavailableError extends Error {
  constructor(seat) {
    super(`Seat ${seat} is already booked.`);
    this.name = "SeatUnavailableError";
  }
}

class InvalidSeatError extends Error {
  constructor(seat) {
    super(`Seat ${seat} is invalid. Choose between 1 and 100.`);
    this.name = "InvalidSeatError";
  }
}

function bookTickets() {
  const bookedSeats = [1, 2, 3, 4, 5, 6, 7, 10];

  const count = Number(prompt("How many tickets do you want to book?"));

  try {
    let selectedSeats = [];

    for (let i = 1; i <= count; i++) {
      const seat = Number(prompt(`Enter seat number ${i}:`));

      if (seat < 1 || seat > 100) {
        throw new InvalidSeatError(seat);
      }

      if (bookedSeats.includes(seat)) {
        throw new SeatUnavailableError(seat);
      }

      selectedSeats.push(seat);
    }

    console.log(`Tickets booked successfully!`);
    console.log(`Seats: ${selectedSeats.join(", ")}`);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  } finally {
    console.log("Booking process completed.");
  }
}

bookTickets();