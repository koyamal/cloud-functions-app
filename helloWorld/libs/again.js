const again = (handleAgain) => {
  console.log('again start');
  handleAgain && handleAgain();
  console.log('again done');
}

exports.again = again;