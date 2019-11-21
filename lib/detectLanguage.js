const Axios = require("axios");
const config = require("../config.js")

module.exports = language => {
  const header = {
    headers: { Authorization:  }
  };

  let query = {
    q: language
  };

  return Axios.post("http://ws.detectlanguage.com/0.2/detect", query, header);
};
