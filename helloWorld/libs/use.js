const { libs } = require("./look");
const { again } = require("./again");
again(() => {
  console.log("this")
});
console.log(libs);
libs.look(() => {
  console.log('This is look from libs');
});

libs.back(() => {
  console.log('This is back');
});

libs.back(() => {
  console.log('This is back');
});