const express = require("express")
const firebase = require("firebase")
const bodyParser = require("body-parser")

const app = express();
const port = 8000;

const config = {
  apiKey: "AIzaSyAj9lpubh4xJl8Cdg0kyM862gIRM5p3xG0",
  authDomain: "smallgardens-88a3e.firebaseapp.com",
  databaseURL: "https://smallgardens-88a3e.firebaseio.com",
  projectId: "smallgardens-88a3e",
  storageBucket: "smallgardens-88a3e.appspot.com",
  messagingSenderId: "157738393736"
};



firebase.initializeApp(config);


app.use(bodyParser.urlencoded({extended: false}));


app.post("/login", (req, res) => {
  email = req.body.username
  password = req.body.password

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log(`- a user has logged in: ${email}`);
      res.sendStatus(200)
    })
    .catch((error) => {
      res.sendStatus(403)
    });
});


app.post("/register", (req, res) => {
  email = req.body.username
  password = req.body.password

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log(`- a new user has been created: ${email}`);
      res.sendStatus(200)
    })
    .catch((error) => {
      res.sendStatus(403)
    });
});


app.listen(port, () => console.log(`server listening on port ${port}`))
