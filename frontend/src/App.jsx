import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Movies from "./components/movies/Movies";
import Mybookings from "./components/bookings/Mybookings";
import Booked from "./components/bookings/Booked";
import Signup from "./components/login/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route
            path="/movies"
            element={
              <>
                <ProtectedRoute>
                  <Movies />
                </ProtectedRoute>
              </>
            }
          />
          <Route
            path="/booking/:id"
            element={
              <>
                <ProtectedRoute>
                  <Mybookings />
                </ProtectedRoute>
              </>
            }
          />
          <Route
            path="/my-bookings"
            element={
              <>
                <ProtectedRoute>
                  <Booked />
                </ProtectedRoute>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
