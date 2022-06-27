export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(404).json({ message: 'Invalid Request' });
        return;
    }

    const { name, email, tech } = req.body;

    res.status(200).json({
        message: 'Data Sanitized',
        name,
        email,
        tech
    });
} 