const express = require('express');
const app = express();

app.use(express.json());

// ❗ Vulnerable: No input validation
app.post('/greet', (req, res) => {
    const name = req.body.name;
    res.send(`Hello, ${name}`);  // ❗ Potential XSS
});

// ❗ Vulnerable: Hardcoded secret
const secretKey = "SuperSecretPassword123";

app.get('/secret', (req, res) => {
    res.send(`The secret is ${secretKey}`); // ❗ Sensitive info leak
});

const port = process.env.PORT || 3000;
if (require.main === module) {
    app.listen(port, () => console.log(`Listening on port ${port}...`));
}

module.exports = app;