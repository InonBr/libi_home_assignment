const express = require('express');
const app = express();
const cors = require('cors');
const createAdminIfNotExist = require('./lib/createAdminUser');
const users_routers = require('./routers/users_routers');

const connectDB = require('./db/db');

const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/api', users_routers);

connectDB().then(() => {
  console.log('🔵 MongoDB connected...');
  app.listen(port, () => {
    createAdminIfNotExist();
    console.log(`🟢 App listening at http://localhost:${port}`);
  });
});
