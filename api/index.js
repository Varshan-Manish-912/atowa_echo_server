let backend = {
    url: null,
    updatedAt: null
};

export default function handler(req, res) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method === "GET") {

        return res.status(200).json(backend);

    }

    if (req.method === "POST") {

        const { url } = req.body;

        backend = {
            url,
            updatedAt: new Date().toISOString()
        };

        return res.status(200).json({
            success: true
        });

    }

    res.status(405).json({
        error: "Method Not Allowed"
    });

}