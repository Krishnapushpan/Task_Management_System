import User from '../models/UsersModel.js';
import bcrypt from 'bcrypt';

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
