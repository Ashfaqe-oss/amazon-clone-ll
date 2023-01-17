const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HBg2WCiYqYOwGbbVvZkgidOigCbtrLPswuXxl3CSFOgGzzaNBgEdSaLceUDuW59NuB2FRnZ5m6Zw6LR3z5dwQZj00O0DIlB6k"
);

//API

//app config
const app = express();
//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get("/", (req, res) => res.status(200).send("healing world"));

app.post("/payments/create", async (req, res) => {
  const total = Math.round(req.query.total);

  console.log("payment req received Bitch ! for: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(total * 73.2),
    currency: "inr",
    metadata: {integration_check: 'accept_a_payment'},
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//listen command
exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/clone-ii-db6b7/us-central1/api
