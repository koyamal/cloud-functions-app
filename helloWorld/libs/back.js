const back = (handleBack) => {
  console.log('back start');
  handleBack && handleBack();
  handleBack && console.log('Hello This is World');
  console.log('back done');
}

exports.back = back;