//Floats are not allowed!
const getPercent = (number: number, percent: number) => {
  let percentAsString = percent.toFixed().toString();

  if(percentAsString.length > 2) {
    const percentNumber = percentAsString.slice(0, percentAsString.length - 2);
    const percentDecimals = percentAsString.slice(-2);
    percentAsString = `${percentNumber}.${percentDecimals}`;
  }

  if(percentAsString.length === 2) {
    percentAsString = `0.${percentAsString}`;
  }

  if(percentAsString.length < 2) {
    percentAsString = `0.0${percentAsString}`;
  }

  const percentValue = +percentAsString;

  return number*percentValue;
}

export default getPercent;