const again = (handleAgain) => {
  console.log('again');
  handleAgain();
  console.log('again done');

  return 0;
}

export {again};