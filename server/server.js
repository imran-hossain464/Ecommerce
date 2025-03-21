const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Create a database connection
mongoose.connect('mongodb+srv://kimrankhan464:b7I2kC4lLrVcuuR4@cluster0.bhvhy.mongodb.net/')
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
