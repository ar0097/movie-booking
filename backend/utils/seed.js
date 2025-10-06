const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Movie = require("../models/Movie");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));

const movies = [
    {
        title: "The Dark Knight Returns",
        genre: "Action, Drama",
        duration: "152 min",
        rating: "9.0",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
        showtimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
    },
    {
        title: "Inception",
        genre: "Action, Sci-Fi",
        duration: "148 min",
        rating: "8.8",
        image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=400&h=600&fit=crop",
        showtimes: ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"],
    },
    {
        title: "Interstellar",
        genre: "Adventure, Drama, Sci-Fi",
        duration: "169 min",
        rating: "8.6",
        image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&h=600&fit=crop",
        showtimes: ["12:00 PM", "3:30 PM", "7:00 PM", "10:30 PM"],
    },
];

const seedMovies = async () => {
    try {
        await Movie.deleteMany();
        await Movie.insertMany(movies);
        console.log("Movies seeded successfully!");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedMovies();
