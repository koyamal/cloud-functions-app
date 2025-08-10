const back = (handleBack) => {
  console.log('back');
  handleBack && handleBack();
  console.log('back done');
}

exports.back = back;