import express from 'express';
import Traveler from '../models/Traveler.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret_here';

// ===== Middleware: Token Verification =====
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'No token provided' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
}

// ===== Middleware: Admin Check =====
function adminOnly(req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied: Admins only' });
  }
  next();
}

// ===== Registration Route =====
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, number, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !email || !number || !password || !confirmPassword)
      return res.status(400).json({ error: 'All fields are required' });

    if (password !== confirmPassword)
      return res.status(400).json({ error: 'Passwords do not match' });

    const existingUser = await Traveler.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: 'Email already registered' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newTraveler = new Traveler({
      firstName,
      lastName,
      email,
      number,
      password: hashedPassword,
      role: 'traveler',
    });

    await newTraveler.save();
    console.log("User registered:", newTraveler.email);

    return res.status(201).json({ message: 'User registered!' });

  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ===== Login Route =====
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: 'Email and password are required' });

    const user = await Traveler.findOne({ email });
    if (!user)
      return res.status(400).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: 'Incorrect password' });

    const payload = {
      id: user._id,
      role: user.role,
      email: user.email,
      name: `${user.firstName} ${user.lastName}`,
      number: user.number
    };
    
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    
    return res.status(200).json({
      message: 'Login successful',
      token,
      user: payload
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
