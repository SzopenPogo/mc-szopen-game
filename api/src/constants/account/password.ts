export const PASSWORD_REG_EXP = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])';
//At least one lowercase letter, one uppercase letter and one number:
export const passwordRegExp = new RegExp(PASSWORD_REG_EXP);

export const PASSWORD_MIN_LENGTH = 6;