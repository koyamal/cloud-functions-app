// const libs = require("./look");
const { libs } = require("./look");
console.log(libs);
libs.libs.look(() => {
  console.log('This is look');
});

libs.libs.back(() => {
  console.log('This is back');
});