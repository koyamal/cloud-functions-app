const look = require("./look");
console.log(typeof look);
console.log(look);
look.look(() => {
  console.log('This is look');
});