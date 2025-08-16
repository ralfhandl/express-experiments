const axios = require("axios");

axios
  .request({
    url: "http://localhost:3000",
    method: "QUERY",
    headers: { foo: "b&r" },
  })
  .then(function (response) {
    // handle success
    console.log(response.status);
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
