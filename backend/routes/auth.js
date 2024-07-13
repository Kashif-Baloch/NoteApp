// initialize modules Variables
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const fetchUser = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");

// Initialize jwt token string
const autha = "k@shifAuthentication";
let Success = false;

// Initialize sign in route path
router.post(
  "/sign-up",
  [
    // Initialize objects for validations
    body("name", "Enter a name at least 3 character").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a password at least 6 character").isLength({
      min: 4,
    }),
  ],
  async (req, res) => {
    // Check validations rrrors
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ Success, errors: errors.array() });
    }

    //Handle any error by try except sentance
    try {
      //Initialize bcrypt salt for advance password protection
      let salt = await bcrypt.genSalt(10);
      let SecPass = await bcrypt.hash(req.body.password, salt);

      //Find the email. Means email is present in database or not
      let user = await User.findOne({ email: req.body.email });

      //If email present in database then send json response as error
      if (user) {
        return res
          .status(400)
          .json({ Success, error: "This Email Already Exists" });
      }

      //Create a document in database
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: SecPass,
      });

      //Intialize data for jwt token
      let data = {
        user: {
          id: user.id,
        },
      };

      Success = true;
      //Sign the values to genrate jwt token
      let token = jwt.sign(data, autha);
      res.json({ Success, token });
    } catch (error) {
      console.log(error.message);
      return res.status(400).send({ error: "Internal Server Error" });
    }
  }
);

//Initialize login route path
router.post(
  "/login",
  [
    // Initialize objects for validations
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a password at least 6 character").isLength({
      min: 4,
    }),
  ],
  async (req, res) => {
    // Check validations rrrors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ Success, errors: errors.array() });
    }
    //Getting email and password from database by destruction method
    const { email, password } = await req.body;

    //Handle any error by try except sentance
    try {
      //Find the email. Means email is present in database or not
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send(Success, "Please Enter Correct Tradations");
      }

      //Compare the database password and post request password
      let comparePass = await bcrypt.compare(password, user.password);
      if (!comparePass) {
        return res.status(400).json({
          Success,
          error: "Please try to login with correct credentials",
        });
      }

      //Intialize data for jwt token
      data = {
        user: {
          id: user.id,
        },
      };

      Success = true;
      //Sign the values to genrate jwt token
      const token = jwt.sign(data, autha);
      res.json({ Success, token });
    } catch (error) {
      console.log(error.message);
      return res.status(400).send({ errors: "Internal Server Error" });
    }
  }
);

//Initialize getuser route path and using fetchUser middleware
router.post("/getuser", fetchUser, async (req, res) => {
  //Handling the error
  try {
    //Getting the id from req.user
    let userId = req.user.id;

    //Find a document by his id
    let user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error.message);
    return res.status(400).send({ errors: "Internal Server Error" });
  }
});

module.exports = router;
