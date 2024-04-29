// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;
// const mongoose = require("mongoose");
// const createUserRouter = require("./routes/CreateUser");

// mongoose.connect('mongodb://localhost:27017/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Failed to connect to MongoDB:', error.message);
//   });

// app.get('/', (req, res) => {
//   res.send('running');
// });

// app.use(express.json());
// app.use('/api', createUserRouter);

// app.listen(port, () => {
//   console.log('Server is running on port ' + port);
// });







const express = require('express');


const app =express();
const port =process.env.PORT ||5000;
const mongoDB = require('./db');
const mongoose = require("mongoose");
const createUserRouter = require("../Routes/CreateUser");
mongoDB().then(() => {

app.get('/',(req,res)=>{
  res.send('running');
});

app.use(express.json());
app.use('/api', createUserRouter);



app.listen(port,()=>{
    console.log('set');
});
})
.catch((error) => {
  console.error('Failed to connect to MongoDB:', error.message);
});