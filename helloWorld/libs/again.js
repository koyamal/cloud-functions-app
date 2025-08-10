const again = (handleAgain) => {
  console.log('again');
  handleAgain && handleAgain();
  console.log('again done');
}

exports.again = again;