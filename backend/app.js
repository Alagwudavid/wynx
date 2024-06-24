const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));

// Database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'wynx_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

// Email functionality
function sendEmail({ email, subject, message }) {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailConfigs = {
            from: email,
            to: '"David Alagwu" <alagwudavid@gmail.com>',
            subject: subject,
            html: `
                <p>From ${email},</p>
                <p>${message}</p>
                <p>Best Regards</p>
            `,
        };

        transporter.sendMail(mailConfigs, function (error, info) {
            if (error) {
                console.log(error);
                return reject({ message: `An error has occurred` });
            }
            return resolve({ message: "Email sent successfully" });
        });
    });
}

app.post("/contact-us", (req, res) => {
    sendEmail(req.body)
        .then((response) => res.send(response.message))
        .catch((error) => res.status(500).send(error.message));
});

// Middleware to authenticate
const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
