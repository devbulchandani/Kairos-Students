import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    try {
        let token = req.header("Authorization");

        if (!token) {
            return res.status(403).end("Acces Denied");
        }

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimleft();
        }

        const verify = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}