const express = require("express");
const { getMovies, getMovieById } = require("../controllers/movieController");

const router = express.Router();

// GET /api/movies
router.get("/", getMovies);
router.get("/:id", getMovieById);

module.exports = router;
