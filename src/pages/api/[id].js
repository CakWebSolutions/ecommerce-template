import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
const dbName = 'paintingId';

async function connectToDatabase() {
    if (!global._mongoClient) {
        try {
            await client.connect();
            global._mongoClient = client;
            console.log('Connected to MongoDB');
        } catch (e) {
            console.error('Failed to establish MongoDB connection', e);
            throw new Error('Failed to connect to MongoDB.');
        }
    }
    return global._mongoClient.db(dbName); // Return the database instance
}

export default async function handler(req, res) {
    try {
        const db = await connectToDatabase();
        const dataCollection = db.collection('Data');

        // Expecting the ID to be passed as part of the query string, e.g., "/api/items?index=660b0a50fd72ae5d53a570e1"
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ message: 'ID parameter is required.' });
        }

        // Converting the string ID to an ObjectId
        const query = { _id: new ObjectId(id) };
        const item = await dataCollection.findOne(query);

        if (!item) {
            return res.status(404).json({ message: 'Item not found.' });
        }

        res.status(200).json(item);
    } catch (error) {
        console.error('Failed to retrieve data:', error);
        res.status(500).json({ message: 'Failed to connect to the database or retrieve data.' });
    }
}
