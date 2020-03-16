import axios from "axios";

export default {
  // Gets all gratitudes
  getgratitudes: function() {
    return axios.get("/api/gratitudes");
  },
  // // Gets the gratitude item with the given id
  // getgratitudes: function(id) {
  //   return axios.get("/api/gratitiudes/" + id);
  // },
  // Deletes the gratitude item with the given id
  deletegratitudes: function() {
    return axios.delete("/api/gratitudes");
    // deleteGratitude: function(id) {
    //   return axios.delete("/api/gratitudes/" + id);
  },
  // Saves a gratitude to the database
  saveGratitude: function(gratitudeData) {
    return axios.post("/api/gratitudes", gratitudeData);
  }
  //Inserts the sentence
};
