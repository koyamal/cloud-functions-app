const back = (handleBack) => {
  console.log('back start');
  handleBack && handleBack();
  console.log('back done');
}

exports.back = back;