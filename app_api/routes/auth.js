const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

console.log('🔥 AUTH ROUTER LOADED');

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // demo admin login (required for project)
  if (username === 'admin' && password === 'password') {

    const token = jwt.sign(
      { username },
      'travlr-secret',
      { expiresIn: '1h' }
    );

    return res.json({ token });
  }

  res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;