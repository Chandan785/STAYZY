const express = require('express');
const mongo = require('mongoose');
const app = express();
const port = 3000;

const MongoDB_URL = 'mongodb://localhost:27017/STAYZY';

async function main() {
    try {
        await mongo.connect(MongoDB_URL);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}
main();

app.get('/', (req, res) => {
    res.send('Hii, I am back');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
