const axios = require("axios");
const db = require("../models");

// Defining methods for the RapidController

// findAll searches the Radpid API and returns only the entries we haven't already saved

// It also makes sure that the qoutes returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    axios.get("https://type.fit/api/quotes").then(function(results) {
      res.json(results.data);
    });
  },
  insertOne: function(data) {
    db.Inspiration.insertOne(data).then(response => res.json(response));
  }
};
// const { query: params } = req;
// fetch("https://healthruwords.p.rapidapi.com/v1/quotes/?id=731&t=Wisdom&maxR=1&size=medium", {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "healthruwords.p.rapidapi.com",
//         "x-rapidapi-key": "45da093d46msh009ff6cbf2c825bp121a16jsnbe612ecf89f5"
//     }
