import { dbConnect } from "../../../lib/dbConnect";

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        res.status(404).json({ message: 'Invalid Request' });
        return;
    }

    await dbConnect();

    const { name, email, tech } = req.body;

    res.status(200).json({
        message: 'Data Sanitized',
        name,
        email,
        tech
    });
} 