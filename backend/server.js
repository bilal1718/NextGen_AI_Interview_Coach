const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const cors = require('cors');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://console.firebase.google.com/project/nextgen-ai-interview/firestore/databases/-default-/data/~2F'
});
const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend's URL
    credentials: true
  }));
app.use(bodyParser.json());
const db = admin.firestore();

// Example route to save user data
// app.post('/register', async (req, res) => {
//   try {
//     const { uid, username, firstName, lastName, email } = req.body;
//     await db.collection('users').doc(uid).set({
//       username,
//       firstName,
//       lastName,
//       email
//     });
//     res.status(201).send('User data saved successfully');
//   } catch (error) {
//     console.error('Error creating user:', error.message);
//         res.status(500).send('Error creating user');
//   }
// });
// app.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const userRecord = await admin.auth().getUserByEmail(email);
//         res.status(200).json(userRecord);
//     } catch (error) {
//         console.error('Error fetching user:', error.message);
//         res.status(404).send('User not found');
//     }
// });
app.post('/register', async (req, res) => {
    try {
        const { email, password, userName,firstName,lastName } = req.body;
        const userRecord = await admin.auth().createUser({
            email,
            password,
            displayName: userName,
        });
        await db.collection('users').doc(userRecord.uid).set({
            email,
            displayName: userName,
            firstName,
            lastName
        });
        res.status(201).send('User created successfully');
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).send('Error creating user');
    }
});

// Login endpoint
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userRecord = await admin.auth().getUserByEmail(email);
        // Sign in the user with the provided email and password
        const token = await admin.auth().createCustomToken(userRecord.uid);
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in:', error.message);
        res.status(401).send('Incorrect email or password');
    }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

