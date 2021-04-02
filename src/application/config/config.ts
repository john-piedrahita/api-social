import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
    dotenv.config({ path: ".env" });
} else {
    dotenv.config({ path: ".env.example" });  // you can delete this after you create your own .env file!
}

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production"; // Anything else is treated as 'dev'

export const SESSION_SECRET = process.env["JWT_SECRET"];
export const MONGODB_URI = prod ? process.env["MONGO_DEVELOPMENT"] : process.env["MONGO_DEVELOPMENT"];
export const PORT = process.env["PORT"]

if (!SESSION_SECRET) {
    process.exit(1);
}

if (!MONGODB_URI) {
    if (prod) {
        console.log("No mongo connection string. Set MONGODB_URI environment variable.");
    } else {
        console.log("No mongo connection string. Set MONGODB_URI_LOCAL environment variable.");
    }
    process.exit(1);
}
