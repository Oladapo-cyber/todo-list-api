import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
// import mongoose from "mongoose";

dotenv.config(); // to use the .env file

const connectionString = process.env.ATLAS_URI || ""; // Get the connection string from the environment variable

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(connectionString, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let conn; // Declare a variable to hold the connection object
try {
  conn = await client.connect(); // Connect to the MongoDB cluster
  console.log("mongo connected"); // Log a message
} catch (e) {
  console.error(e); // Log an error if unable to connect
}

let db = conn.db("todo_list"); // Select the database named "todo_list"

export default db; // Export the database connection
