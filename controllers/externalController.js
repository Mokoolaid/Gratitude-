const axios = require("axios");
const db = require("../models");

// Defining methods for the RapidController

// findAll searches the Radpid API and returns only the entries we haven't already saved

// It also makes sure that the qoutes returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get("https://rapidapi.com/collection/quote-generator-apis", {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
            result.quoteInfo.title &&
            result.quoteInfo.infoLink &&
            result.quoteInfo.authors &&
            result.quoteInfo.description &&
            result.quoteInfo.imageLinks &&
            result.quoteInfo.imageLinks.thumbnail
        )
      )
      .then(apiGratitude =>
        db.Gratitude.find().then(dbGratitude =>
          apiGratitude.filter(apiGratitude =>
            dbGratitude.every(
              dbGratitude => dbGratitude.googleId.toString() !== apiGratitude.id
            )
          )
        )
      )
      .then(gratitudes => res.json(gratitudes))
      .catch(err => res.status(422).json(err));
  },
  insertOne: function(data) {
    db.Gratitude.insertOne(data).then(response => res.json(response));
  }
};
// const { query: params } = req;
// fetch("https://healthruwords.p.rapidapi.com/v1/quotes/?id=731&t=Wisdom&maxR=1&size=medium", {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "healthruwords.p.rapidapi.com",
//         "x-rapidapi-key": "45da093d46msh009ff6cbf2c825bp121a16jsnbe612ecf89f5"
//     }
