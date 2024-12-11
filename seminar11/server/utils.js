const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    const token = bearerHeader?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized - No token provided", data: {} });
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ success: false, message: "Invalid token", data: {} });
        }

        req.userId = decoded.id;

        next();
    })
}

module.exports = {
    verifyToken
}