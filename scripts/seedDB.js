const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactgratitudeitems"
);

const gratitudeSeed = [
  {
    sentence: "I am grateful for my two gifts, my eyes when I wake up in the morning",
    author: "Dianna",
    date: new Date(Date.now())
  },
  {
    sentence: "I am grateful for my two gifts, my eyes when I wake up in the morning",
    author: "Dianna",
    date: new Date(Date.now())
  },
  {
    sentence: "I am grateful for my two gifts, my eyes when I wake up in the morning",
    author: "Dianna",
    date: new Date(Date.now())
  },
  {
    sentence: "I am grateful for my two gifts, my eyes when I wake up in the morning",
    author: "Dianna",
    date: new Date(Date.now())
  },
  {
    sentence: "I am grateful for my two gifts, my eyes when I wake up in the morning",
    author: "Dianna",
    date: new Date(Date.now())
  },
  {
    sentence: "I am grateful for my two gifts, my eyes when I wake up in the morning",
    author: "Dianna",
    date: new Date(Date.now())
  },
  {
    sentence: "I am grateful for my two gifts, my eyes when I wake up in the morning",
    author: "Dianna",
    date: new Date(Date.now())
  },
  {
    sentence: "I am grateful for my two gifts, my eyes when I wake up in the morning",
    author: "Dianna",
    date: new Date(Date.now())
  },
  {
    sentence: "I am grateful for my two gifts, my eyes when I wake up in the morning",
    author: "Dianna",
    date: new Date(Date.now())
  },
  {
    sentence: "I am grateful for my two gifts, my eyes when I wake up in the morning",
    author: "Dianna",
    date: new Date(Date.now())
  },
  {
    sentence: "I am grateful for my two gifts, my eyes when I wake up in the morning",
    author: "Dianna",
    date: new Date(Date.now())
  },
  {
    sentence: "I am grateful for my two gifts, my eyes when I wake up in the morning",
    author: "Dianna",
    date: new Date(Date.now())
  },
  {
    sentence: "I am grateful for my two gifts, my eyes when I wake up in the morning",
    author: "Dianna",
    date: new Date(Date.now())
  },
  {
    sentence: "I am grateful for my two gifts, my eyes when I wake up in the morning",
    author: "Dianna",
    date: new Date(Date.now())
  },
  {
    sentence: "I am grateful for my two gifts, my eyes when I wake up in the morning",
    author: "Dianna",
    date: new Date(Date.now())
  },
  {
    sentence: "I am grateful for my two gifts, my eyes when I wake up in the morning",
    author: "Dianna",
    date: new Date(Date.now())
  }
];

db.Gratitude
  .remove({})
  .then(() => db.Gratitude.collection.insertMany(gratitudeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
