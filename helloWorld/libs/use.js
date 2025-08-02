const look = require("./look");
console.log(typeof look);
look(() => {
  console.log('This is look');
});