const look = (handleLook) => {
  console.log('look start');
  handleLook? handleLook(): console.log('no functions');
  console.log('look done');
}

const back = (handleBack) => {
  console.log('back start');
  handleBack? handleBack(): console.log('no functions');
  console.log('back done');
}
exports.libs = {
  look,
  back
};