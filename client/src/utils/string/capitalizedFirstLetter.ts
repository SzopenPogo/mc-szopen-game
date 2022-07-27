export const capitalizedFirstLetter = (string: string) => {
  const firstLetter = string[0].toUpperCase();
  const otherLetters = string.slice(1, string.length).toLocaleLowerCase();
  return firstLetter.concat(otherLetters);
}