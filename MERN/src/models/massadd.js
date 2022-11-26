const mongoose = require('mongoose');

const insert = new mongoose.Schema({
    id: String,
    rank: Number,
    symbol: String,
    name: String,
    supply: Number,
    maxSupply: Number,
    marketCapUsd: Number,
    volumeUsd24Hr: Number,
    priceUsd: Number,
    changePercent24Hr: Number,
    vwap24Hr: Number,
    explorer: String
});

module.exports = mongoose.model('data', insert);

