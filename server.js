const express = require('express');
const cors = require('cors');
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Adjust as necessary
  methods: 'GET,POST',
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

const port = new SerialPort({ path: 'COM3', baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

let heartRate = 0;
parser.on('data', (data) => {
  heartRate = parseInt(data, 10);
  console.log(`Heart rate data received: ${heartRate}`);
});

app.get('/api/heart-rate', (req, res) => {
  res.json({ heartRate });
});

//test
app.get('/api/some-endpoint', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
