import { createErrorMessage } from "../messages/createErrorMessage";
import { createInfoMessage } from "../messages/createInfoMessage";

export const validateUpdateOperator = (
  allowedUpdates: Array<string>,
  updates: Array<string>
  ) => {
  
  const isValidOperator = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperator) {
    const errorMessage = createErrorMessage(400, 'Invalid operator');
    return {isValid: false, message: errorMessage};
  }

  const infoMessage = createInfoMessage(200, 'Update valid');
  return {isValid: true, message: infoMessage};
}