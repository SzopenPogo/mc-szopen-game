import { Request, Response } from "express";
import { PASSWORD_MIN_LENGTH, PASSWORD_REG_EXP } from "../../constants/account/password";
import { createErrorMessage } from "../../utils/messages/createErrorMessage";

const getConfig = async (req: Request, res: Response) => {
  try {
    const configData = {
      PASSWORD_REG_EXP,
      PASSWORD_MIN_LENGTH
    }

    res.status(200).send(configData);
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Get config failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default getConfig;