import cloudinary from "./cloudinary";

const uploadImageOnCloudinary = async (file: Express.Multer.File): Promise<string> => {
    try {
        const base64Image = Buffer.from(file.buffer).toString("base64");
        const dataURI = `data:${file.mimetype};base64,${base64Image}`;

        const uploadResponse = await cloudinary.uploader.upload(dataURI);
        return uploadResponse.secure_url;
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        throw new Error("Failed to upload image to Cloudinary.");
    }
};

export default uploadImageOnCloudinary;
