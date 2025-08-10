const look = (handleLook) => {
  console.log('look');
  handleLook && handleLook();
  console.log('look done');
}

const back = (handleBack) => {
  console.log('back');
  handleBack && handleBack();
  console.log('back done');
}
exports.libs = {
  look,
  back
};