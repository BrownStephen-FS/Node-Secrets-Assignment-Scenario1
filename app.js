const http = require("http");
const prompt = require("prompt-sync")();

http
  .createServer()
  .listen(3000, () => {
    console.log(`Server running on port: 3000`);

    const token = "dont-tell-anyone";
    const inputKey = prompt("Please enter your auth key.  ");
    if (inputKey === token) {
      console.log("Authorization successful! Ending session.");
      process.exit();
    } else {
      console.log("Error incorrect key used. Ending session.");
      process.exit();
    }
  });
