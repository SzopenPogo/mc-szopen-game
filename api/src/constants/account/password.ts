//At least one lowercase letter, one uppercase letter and one number:
export const passwordRegExp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])');