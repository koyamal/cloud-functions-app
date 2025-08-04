const look = (handleLook) => {
  console.log('look');
  handleLook();
  console.log('look done');
}

const back = (handleBack) => {
  console.log('back');
  handleBack();
  console.log('back done');
}
exports.look = {
  look,
  back
};