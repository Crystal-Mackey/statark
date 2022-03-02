import express, { response, urlencoded } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { Dino } from "./dinoSchema";
import { userModel } from "./UserSchema";
import { dinoSchema } from "./dinoSchema";
import dotenv from "dotenv";
import mongodb, { Db } from "mongodb";
import { uploader, uploadDirectory, getUploadedFiles, findUploadedFiles } from "./upload";
import { findUploadedFile } from "./utils";
import path from 'path'
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/uploader", express.static(uploadDirectory));

const { MongoClient } = require("mongodb").MongoClient;

const uri = process.env.DB_CONNECTION;
mongoose.Promise = global.Promise;
const client = mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true });

app.get("/", (req, res) => {
  res.send("WELCOME");
});

// app.post("/signup", (req, res) => {
//   //Done
//   const myData = new userModel(req.body);
//   myData
//     .save()
//     .then((item) => {
//       res.send("item saved to database");
//     })
//     .catch((err) => {
//       res.status(400).send("unable to save to database");
//     });
// });

// app.get("/login/:email", async (req, res) => {
//   //Done
//   const doc = await userModel.findOne({ email: req.params.email });
//   res.send(doc.id);
// });

// app.get("/user", async (req, res) => {
//   //Done
//   const files = await getUploadedFiles()
//   res.json(files);
// });

app.get("/library/:yourID", async (req, res) => {
  //Done
  const userDoc = await userModel.findOne({ id: req.params.yourID });
  const displayDino = userDoc.dinos;
  res.json(displayDino);
});

app.post("/library/", async (req, res) => {
  //Done
  const myData = new Dino(req.body.dinoData);
  console.log(req.body.userID);
  const userDoc = await userModel.findOne({ id: req.body.userID });
  userDoc.dinos.push(myData);
  userDoc
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

app.delete("/library/:yourID", async (req, res) => { }); //working on

// app.delete("/library/:user", (req, res) => {
//   res.send("DELETE Request Called");
// Delete request done in backend.
// Send the id of the dino you want to delete to the backend.
//You would need to find the user who has the dino with that id and just slice it off of the array.
// });

app.get("/user", async (req, res) => {
  try {
    const files = await getUploadedFiles();
    const fileData = files.map((file) => `/uploader/${file}`);
    res.json(fileData)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/user/:filename", async (req, res) => {
  try {
    const { birthtime, size } = await findUploadedFile(req.params.filename);
    res.json({ birthtime, size });
  } catch (err) {
    res.status(404).json({ message: "unable to find file" });
  }
});

app.get("/user-hard-mode", async (req, res) => {
  try {
    const files = await getUploadedFiles();
    const fileData = files.map((file) => path.join(".", uploadDirectory, file));
    if (req.query.size) {
      res.json(fileData);
      return;
    }
    const size = Number.parseInt(req.query.size, 10);
    const promises = files.map(file => findUploadedFile(file))
    const results = await Promise.all(promises);
    const photos = [];
    results.forEach((data, i) => {
      if (data.size <= size) {
        photos.push(data[i]);
      }
    });
    res.json(photos);
    res.json(result);
  } catch {
    res.status(500).json({ message: err.message });
  }
});
app.post("/user", uploader.single("file"), (req, res) => {
  res.json({
    file: req.file.path,
  });
});

app.get("*", (req, res) => {
  //Done
  res.status(404).json({
    message: "Sorry, Page not found!",
  });
});

app.listen(4000, () => {
  //Done
  console.log("Express server is now running on port 4000");
});
export { };
