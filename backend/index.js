const express = require('express');
const connectDB = require('./utils/conn');
const cors = require('cors');

const app = express();
const port = 3000;

connectDB();

app.use(cors({
  origin: "https://hostel-pro.vercel.app",
  methods: ["POST", "GET"], // Methods should be an array of strings
  credentials: true
}));

app.get('/', (req, res) => {
  console.log('welcome to hostelPro backend');
  res.send('hostelPro response to Frontend'); // Send a response to the client
});

app.use(express.json({ extended: false }));

// Define your routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/student', require('./routes/studentRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/complaint', require('./routes/complaintRoutes'));
app.use('/api/invoice', require('./routes/invoiceRoutes'));
app.use('/api/messoff', require('./routes/messoffRoutes'));
app.use('/api/request', require('./routes/requestRoutes'));
app.use('/api/attendance', require('./routes/attendanceRoutes'));
app.use('/api/suggestion', require('./routes/suggestionRoutes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
