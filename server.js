const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize express app
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactUsDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Define a schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    description: String
});

// Define a model
const Contact = mongoose.model('Contact', contactSchema);

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'elerhetoseg.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'rolunk.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'szolgaltatasok.html'));
});

app.post('/contact', (req, res) => {
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        description: req.body.description
    });

    newContact.save()
        .then(() => {
            res.send('Successfully added a new contact!');
        })
        .catch((err) => {
            res.status(500).send('Error saving contact: ' + err.message);
        });
});

// Route to fetch all contacts from the database
app.get('/contacts', (req, res) => {
    Contact.find({})
        .then(contacts => {
            res.json(contacts);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});