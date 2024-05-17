import { Request, Response } from "express";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { encryptPassword } from "../utils/encryptPassword";

export const registerUser = async (req: Request, res: Response) => {
    const { name, lastname, username, numberPhone, email, password } = req.body;

    if (!name || !lastname || !username || !numberPhone || !email || !password) {
        return res.status(400).json({ Data: [], Message: 'All fields are required' });
    }

    if (password.length < 8) {
        return res.status(400).json({ Data: [], Message: 'Password must be at least 8 characters long' });
    }
    if (!email.includes('@') || !email.includes('.')) {
        return res.status(400).json({ Data: [], Message: 'Invalid email' });
    }
    if (!numberPhone.match(/^\d{10}$/)) {
        return res.status(400).json({ Data: [], Message: 'Invalid phone number' });
    }

    const encryptedPass = await encryptPassword(password);
    const user = { name, lastname, username, numberPhone, email, encryptedPass };

    try {
        const docRef = await addDoc(collection(db, "users"), user);
        console.log("Document written with ID: ", docRef.id);
        return res.status(200).json({ Data: { id: docRef.id, ...user }, Message: 'User registered successfully' });
    } catch (error) {
        console.error("Error adding document: ", error);
        return res.status(500).json({ Data: [], Message: 'Internal Server Error' });
    }
};

