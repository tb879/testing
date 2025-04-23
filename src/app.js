const express = require("express");
require('dotenv').config();
const app = express();
const db = require("./model");
const userRoutes = require("./routes/user");

app.use(express.json());
app.use("/api/users", userRoutes);

// Sync DB
(async () => {
  try {
    await db.sequelize.sync();
    console.log("DB Synced");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (error) {
    console.error("DB connection failed:", error);
  }
})();