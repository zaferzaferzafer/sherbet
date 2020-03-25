const functions = require("firebase-functions");
const express = require("express");
const firebase = require("firebase");

const FBAuth = require("./util/fbAuth");

const { getGonderiler, addOneGonderi ,getGonderi ,commentOnScream} = require("./handlers/gonderiler");
const {
  signUp,
  login,
  uploadImage,
  addUserDetails,
  getAuthenicatedUser,
  
} = require("./handlers/users");

const app = express();
//gonderi routes
app.get("/getGonderiler", getGonderiler);
app.post("/addGonderi", FBAuth, addOneGonderi);
app.get("/addgonderi/:screamId", getGonderi)

//TODO:delete scream
//TODO:like a scream
//TODO:unlike  a scream
app.post("/addgonderi/:screamId/yorumlar", FBAuth,commentOnScream)


//users route
app.post("/signup", signUp);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);

app.get("/user", FBAuth, getAuthenicatedUser);

exports.service = functions.region("europe-west1").https.onRequest(app);
