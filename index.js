const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const { auth } = require("./middlewares/authMiddleware");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/energyblog")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const allowedOrigins = ["http://localhost:4200"];
app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the origin is in the list of allowed origins
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Enable credentials (e.g., cookies, authorization headers)
  })
);

// app.use(cors());
// app.use(auth);

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });

app.get("/api", (req, res) => {
  res.send("RESTful service");
});

app.use(routes);

app.listen(3030, () =>
  console.log("RESTful server is listening on port 3030...")
);
