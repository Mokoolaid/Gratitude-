const axios = require("axios");
const db = require("../models");

// Defining methods for the RapidController

// findAll searches the Radipd API and returns only the entries we haven't already saved

// It also makes sure that the gratitudes returned from the API all contain a title, author, link, description, and image
module.exports = {
    findAll: function (req, res) {
        const { query: params } = req;
        axios
            .get("https://rapidapi.com/collection/quote-generator-apis", {
                params
            })
            .then(results =>
                results.data.items.filter(
                    result =>
                        result.volumeInfo.title &&
                        result.volumeInfo.infoLink &&
                        result.volumeInfo.authors &&
                        result.volumeInfo.description &&
                        result.volumeInfo.imageLinks &&
                        result.volumeInfo.imageLinks.thumbnail
                )
            )
            .then(apiBooks =>
                db.Gratitude.find().then(dbGratitudes =>
                    apiGratitude.filter(apiGratitude =>
                        dbGratitude.every(dbGratitude => dbGratitude.googleId.toString() !== apiBook.id)
                    )
                )
            )
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    }
};
