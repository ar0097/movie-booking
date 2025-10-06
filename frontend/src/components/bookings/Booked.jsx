import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { bookedSeats } from "../../api";
function Booked() {
  const [movie, setMovie] = useState([]);


  useEffect(() => {
    bookedSeats().then((data) => setMovie(data));
  }, []);
  return (
    <div className="booked">
      <Navbar />
      <div className="booked-container">
        <div>
          <h1 className="bookings-headings">My Bookings</h1>
          {movie.length === 0 ? (
            <div className="booked-status">
              <p className="booked-status-para">No bookings yet</p>
              <a href="#" className="book-movies">
                Browse Movies
              </a>
            </div>
          ) : (
            movie.map((ele, id) => (
              <div className="bookings-status">
                <div className="booking-details">
                  <div className="">
                    <h3 className="booked-movie">{ele.movieName}</h3>
                    <p className="booked-time">
                      {ele.date} at {ele.showtime}
                    </p>
                  </div>
                  <div>
                    <p className="booked-price">${ele.price}.00</p>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                        color: " #a6a6a6",
                      }}
                    >
                      $12 x 1 seats
                    </p>
                  </div>
                </div>
                <div className="booked-seats">
                  <p className="booked-seat-number">Seats:</p>
                  <div className="booked-seat-number-cards">
                    {ele.seats.map((item) => (
                      <span className="booked-seat-number-list">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Booked;
