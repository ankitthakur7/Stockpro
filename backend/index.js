require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Models
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

// =======================
// MIDDLEWARE
// =======================
app.use(cors());
app.use(express.json()); // 🔴 MOST IMPORTANT

// =======================
// ROUTES
// =======================

// ---------- HOLDINGS ----------
app.get("/allHoldings", async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.json(holdings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- POSITIONS ----------
app.get("/allPositions", async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- ADD ORDER ----------
app.post("/newOrder", async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Request body missing" });
  }

  const { name, qty, price, mode } = req.body;

  if (!name || !qty || !price || !mode) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();
    res.json({ message: "Order saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- FETCH ORDERS ----------
app.get("/allOrders", async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =======================
// DATABASE CONNECTION
// =======================
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("✅ DB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err.message);
  });
