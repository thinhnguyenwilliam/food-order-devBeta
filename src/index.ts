import express from "express";
import connectDB from "./db/connectDB";
import dotenv from "dotenv";
import userRoute from "./routes/user.route";


dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT ?? 9876;

connectDB(); // 🔗 Connect to MongoDB

// Middleware setup
app.use(express.json()); // to parse JSON body
app.use(express.urlencoded({ extended: true }));

// api
app.use("/api/v1/user", userRoute);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
