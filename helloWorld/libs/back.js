const back = (handleBack) => {
  console.log('back start');
  handleBack? handleBack(): console.log('no functions');
  console.log('back done');
}

exports.back = back;