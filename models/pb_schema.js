const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    budget: {
        type: Number,
        required: true,
        min: 1
    },
    color: {
        type: String,
        required: true,
        unique: true,
        minlength: 6
    }
}, {collection: 'pbudget'});

module.exports = mongoose.model('pbudget', budgetSchema);