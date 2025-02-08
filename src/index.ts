import express from "express";
import connectDB from "./db/connectDB";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.route";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT ?? 9876;

connectDB(); // 🔗 Connect to MongoDB

// Middleware setup
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:51723",
    credentials: true
}
app.use(cors(corsOptions));

// API routes
app.use("/api/v1/user", userRoute);


// Server start
app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port ${PORT}`);
});
