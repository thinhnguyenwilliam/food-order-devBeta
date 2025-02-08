import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

declare global {
    namespace Express {
        interface Request {
            id: string;
        }
    }
}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(401).json({
                success: false,
                message: "User not authenticated"
            });
            return; // Stop further execution
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY!) as jwt.JwtPayload;

        if (!decode) {
            res.status(401).json({
                success: false,
                message: "Invalid token"
            });
            return; // Stop further execution
        }

        req.id = decode.userId;
        next(); // Move to the next middleware
    } catch (error) {
        console.error("Authentication error:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};
