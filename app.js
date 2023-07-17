const http = require("http");
const prompt = require("prompt-sync")();

http
  .createServer()
  .listen(3000, () => {
    console.log(`Server running on port: 3000`);

    const token = "eadf170f639a37c4af927c256da7f74e82a0c0a46bdcf03ef5b6744ce6d04c45b5e9469cf7d888cd2e286626e752a112fd3c8324b9a79ab0611b0b1ce3b99f9e";
    const inputKey = prompt("Please enter your auth key.  ");
    if (inputKey === token) {
      console.log("Authorization successful! Ending session.");
      process.exit();
    } else {
      console.log("Error incorrect key used. Ending session.");
      process.exit();
    }
  });
