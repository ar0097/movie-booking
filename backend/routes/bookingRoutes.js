const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");


router.post("/", async (req, res) => {
    try {
        const { movieName, showtime, date, seats, price } = req.body;

        if (!movieName || !showtime || !date || !seats?.length || !price) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const existingBooking = await Booking.findOne({ movieName, showtime, date });

        if (existingBooking) {
            const mergedSeats = Array.from(
                new Set([...existingBooking.seats, ...seats])
            );

            existingBooking.seats = mergedSeats;
            existingBooking.price = price;
            await existingBooking.save();

            return res.status(200).json({
                message: "Seats added to existing booking successfully",
                booking: existingBooking,
            });
        } else {
            const newBooking = new Booking({ movieName, showtime, date, seats, price });
            await newBooking.save();

            return res.status(201).json({
                message: "New booking created successfully",
                booking: newBooking,
            });
        }
    } catch (error) {
        console.error("Error creating or updating booking:", error.message);
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1 });
        res.json(bookings);
    } catch (error) {
        console.error("Error fetching bookings:", error.message);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
