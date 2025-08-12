const back = (handleBack) => {
  console.log('back start');
  handleBack? handleBack(): console.log('no functions');
  handleBack? console.log('Hello This is World'): console.log('No World');
  console.log('back done');
}

exports.back = back;