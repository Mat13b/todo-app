const express = require("express");
import { MongoClient, ObjectId } from "mongodb";
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("dist"));
app.use(express.json());

const url =
  "mongodb+srv://mathieuschmitt53:q7UPLtcqbzEmHiNU@clusterurl/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(url);

const todos = [
  {
    id: 1,
    title: "Buy milk",
    completed: false,
  },
  {
    id: 2,
    title: "Buy eggs",
    completed: false,
  },
  {
    id: 3,
    title: "Buy bread",
    completed: false,
  },
];

app.get("/api/tasks", (req, res) => {
  res.send(todos);
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}\nvia http://localhost:8080`);
});