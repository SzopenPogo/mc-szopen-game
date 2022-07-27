export const isNumberInString = (string: string) => {
  return /[0-9]/g.test(string);
}