require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:", error);
    });

app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server Running on Port ${process.env.PORT || 5000}`);
});