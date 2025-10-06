import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Movies from "./components/movies/Movies";
import Mybookings from "./components/bookings/Mybookings";
import Booked from "./components/bookings/Booked";
import Signup from "./components/login/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/booking/:id" element={<Mybookings />} />
          <Route path="/my-bookings" element={<Booked />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
