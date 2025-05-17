import User from '../models/UsersModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const registerUser = async (req, res) => {
    try {
        const { fullName, email, phone, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Check if this is the first user (will be admin)
        const found = await User.findOne({ role: 'admin' });
        let role = 'client';
        if (!found) {
            role = 'admin';
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            fullName,
            email,
            phone,
            password: hashedPassword,
            role
        });

        // Save user to database
        await newUser.save();

        res.status(201).json({ 
            message: "User registered successfully",
            user: {
                fullName: newUser.fullName,
                email: newUser.email,
                role: newUser.role
            }
        });

    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Registration failed", error: error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Authentication failed - User doesn't exist" });
        }

        // Compare password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Authentication failed - Password doesn't match" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { 
                email: user.email, 
                role: user.role,
                fullName: user.fullName 
            },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
        );

        // Set cookie
        res.cookie("Authtoken", token);

        // Send response
        res.json({
            status: true,
            message: "Login success",
            user: {
                fullName: user.fullName,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Login failed" });
    }
};

export const createUser = async (req, res) => {
    try {
        const { fullName, email, phone, password, role, position } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            fullName,
            email,
            phone,
            password: hashedPassword,
            role,
            position
        });

        // Save user to database
        await newUser.save();

        res.status(201).json({ 
            message: "User created successfully",
            user: {
                fullName: newUser.fullName,
                email: newUser.email,
                role: newUser.role,
                position: newUser.position
            }
        });

    } catch (error) {
        console.error("User creation error:", error);
        res.status(500).json({ message: "User creation failed", error: error.message });
    }
};
