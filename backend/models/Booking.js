const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
        movieName: {
            type: String,
            required: true,
        },
        showtime: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        seats: {
            type: [String],
            required: true,
        },
        price: {
            type: Number,  
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
