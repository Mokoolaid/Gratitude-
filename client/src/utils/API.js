import axios from "axios";

export default {
  // Gets all gratitudes
  getgratitudes: function() {
    return axios.get("/api/gratitudes");
  },
  // // Gets the gratitude item with the given id
  getInspiration: function() {
    return axios.get("/api/external/");
  },
  // Deletes the gratitude item with the given id

  deleteGratitude: function(id) {
    return axios.delete("/api/gratitudes/" + id);
  },
  // Saves a gratitude to the database
  saveGratitude: function(gratitudeData) {
    return axios.post("/api/gratitudes", gratitudeData);
  }
  //Inserts the sentence
};
