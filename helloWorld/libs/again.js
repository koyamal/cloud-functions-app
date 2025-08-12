const again = (handleAgain) => {
  console.log('again start');
  handleAgain? handleAgain(): console.log('no function');
  console.log('again done');
}

exports.again = again;