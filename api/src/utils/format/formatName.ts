import removeNumbers from "./removeNumbers";
import removeWhiteSpaces from "./removeWhiteSpaces";

const formatName = (name: string) => {
  //Remove all numbars and whitespaces
  const clearedName = removeNumbers(removeWhiteSpaces(name));
  //Set first letter to upper case
  const firstLetter = clearedName[0].toUpperCase();
  //Set other letters to lower case
  const otherLetters = clearedName.slice(1, clearedName.length).toLocaleLowerCase();
  //Return formated string
  return firstLetter.concat(otherLetters);
}

export default formatName;