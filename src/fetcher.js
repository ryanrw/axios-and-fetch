const axios = require("axios");
const fetch = require("node-fetch");

// When using `Axios` to call bad API
// Axios will throw an Error
// with 5xx response message
axios.get("http://localhost:8080/not-ok").then(res => {
  console.log(res);
});

// But `Fetch` response without throw any error
// so you need to handle the error by yourself
fetch("http://localhost:8080/not-ok")
  .then(res => {
    console.log(res);
    return res.json();
  })
  .then(data => console.log(data));
