const look = (handleLook) => {
  console.log('look start');
  handleLook? handleLook(): console.log('no function');
  console.log('look done');
}

const back = (handleBack) => {
  console.log('back start');
  handleBack? handleBack(): console.log('no function');
  console.log('back done');
}
exports.libs = {
  look,
  back
};