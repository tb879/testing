const express = require('express');
const app = express();
const db = require('./model');
const userRoutes = require('./routes/user');

app.use(express.json());
app.use('/api/users', userRoutes);

// Sync DB
db.sequelize.sync().then(() => {
  console.log('DB Synced');
  app.listen(3000, () => console.log('Server running on port 3000'));
});