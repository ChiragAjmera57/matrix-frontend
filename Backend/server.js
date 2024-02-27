const express = require('express');
const cors = require('cors'); 
const app = express();

const jsonData = [
  {
    img: "http://example.com/img1.jpg",
    tokenName: "AlphaToken",
    symbol: "ALP",
    decimals: 18,
    marketcap: 1000000,
    chain: "Ethereum",
  },
  {
    img: "http://example.com/img1.jpg",
    tokenName: "AlphaToken",
    symbol: "ALP",
    decimals: 18,
    marketcap: 1000000,
    chain: "Ethereum",
  },
  {
    img: "http://example.com/img1.jpg",
    tokenName: "AlphaToken",
    symbol: "ALP",
    decimals: 18,
    marketcap: 1000000,
    chain: "Ethereum",
  },
  {
    img: "http://example.com/img1.jpg",
    tokenName: "AlphaToken",
    symbol: "ALP",
    decimals: 18,
    marketcap: 1000000,
    chain: "Ethereum",
  },
  {
    img: "http://example.com/img1.jpg",
    tokenName: "AlphaToken",
    symbol: "ALP",
    decimals: 18,
    marketcap: 1000000,
    chain: "Ethereum",
  },
  {
    img: "http://example.com/img1.jpg",
    tokenName: "AlphaToken",
    symbol: "ALP",
    decimals: 18,
    marketcap: 1000000,
    chain: "Ethereum",
  },
  {
    img: "http://example.com/img1.jpg",
    tokenName: "AlphaToken",
    symbol: "ALP",
    decimals: 18,
    marketcap: 1000000,
    chain: "Ethereum",
  },
  {
    img: "http://example.com/img1.jpg",
    tokenName: "AlphaToken",
    symbol: "ALP",
    decimals: 18,
    marketcap: 1000000,
    chain: "Ethereum",
  },
];

app.use(cors());

app.get('/data', (req, res) => {
  res.json(jsonData);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
