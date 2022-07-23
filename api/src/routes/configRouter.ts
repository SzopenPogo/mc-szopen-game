import { Router } from "express";
import getConfig from "../controllers/config/getConfig";

const configRouter = Router();

// TYPE: GET /config
// DESCRIPTION: Register new account
// ACCESS: PUBLIC
// RETURN PASSWORD_REG_EXP, PASSWORD_MIN_LENGTH
configRouter.get('/', getConfig);

export default configRouter;