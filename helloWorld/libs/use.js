const { libs } = require("./look");
console.log(libs);
libs.look(() => {
  console.log('This is look');
});

libs.back(() => {
  console.log('This is back');
});