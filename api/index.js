let backend = {
    url: null,
    updatedAt: null
};

export default function handler(req, res) {

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