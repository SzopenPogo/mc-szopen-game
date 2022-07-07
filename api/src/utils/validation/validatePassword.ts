import bcryptjs from 'bcryptjs';
import { createErrorMessage } from '../messages/createErrorMessage';
import { createInfoMessage } from '../messages/createInfoMessage';

export const validatePassword = async (currentPassword: string, accountPassword: string) => {
  const isPasswordValid = await bcryptjs.compare(currentPassword, accountPassword);

  if (!isPasswordValid) {
    const errorMessage = createErrorMessage(400, 'Invalid password');
    return {isValid: false, message: errorMessage};
  }

  const infoMessage = createInfoMessage(200, 'Password valid')
  return {isValid: true, message: infoMessage};
}