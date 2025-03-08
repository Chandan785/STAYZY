const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        set: (v) =>v === '' ? 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg' : v 
    },
    price: Number,
    location: String,
     
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;