import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const dbName = "SampleData";

async function connectToDatabase() {
  if (!global._mongoClient) {
    try {
      await client.connect();
      global._mongoClient = client;
      console.log("Connected to MongoDB");
    } catch (e) {
      console.error("Failed to establish MongoDB connection", e);
      throw new Error("Failed to connect to MongoDB.");
    }
  }
  return global._mongoClient.db(dbName); // Return the database instance
}

export default async function handler(req, res) {
  try {
    const db = await connectToDatabase();
    const dataCollection = db.collection("Data");

    const { index } = req.query; // Destructure the index from the request query
    let query = {};

    // If there's an index query, use it to filter the results
    if (index) {
      query = { index: parseInt(index, 10) }; // Ensure "index" is an integer
    }

    const data = await dataCollection.find({}).toArray();
    res.status(200).json(data);
  } catch (error) {
    console.error("Failed to retrieve data:", error);
    res
      .status(500)
      .json({ message: "Failed to connect to the database or retrieve data." });
  }
}
