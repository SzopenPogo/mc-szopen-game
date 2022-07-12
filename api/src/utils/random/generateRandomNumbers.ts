const generateRandomNumbers = (
  numbersAmount: number,
  maxNumber: number
) => {
  const generatedNumbers: Array<number> = [];

  while (generatedNumbers.length < numbersAmount) {
    const randomNumber =  Math.floor(Math.random() * maxNumber);

    const isInAray = generatedNumbers.includes(randomNumber);
    if(!isInAray) {
      generatedNumbers.push(+randomNumber);
    }
  }

  return generatedNumbers;
}

export default generateRandomNumbers;