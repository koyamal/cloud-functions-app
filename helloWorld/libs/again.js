const again = (handleAgain) => {
  console.log('again');
  handleAgain();
  console.log('again done');
}

exports.again = again;