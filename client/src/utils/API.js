import axios from "axios";

export default {
  // Gets all gratitudes
  getgratitudes: function() {
    return axios.get("/api/gratitudes");
  },
  // Gets the book with the given id
  getgratitudes: function(id) {
    return axios.get("/api/gratitiudes/" + id);
  },
  // Deletes the book with the given id
  deleteGratitude: function(id) {
    return axios.delete("/api/gratitudes/" + id);
  },
  // Saves a book to the database
  saveGratitude: function(gratitudeData) {
    return axios.post("/api/gratitudes", gratitudeData);
  }
};
