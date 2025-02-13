import multer from "multer";

// 1️⃣ Memory Storage Configuration
const storage = multer.memoryStorage();

// 2️⃣ Multer Instance with Limits
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5 MB limit
    }
});

// 3️⃣ Export the Middleware
export default upload;
