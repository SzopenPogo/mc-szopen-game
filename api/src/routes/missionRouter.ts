import { Router } from "express";
import getRandomMission from "../controllers/mission/getRandomMission";
import auth from "../middleware/auth";

const misionRouter = Router();

// TYPE: GET /mission/random
// DESCRIPTION: Get 3 random missions data
// ACCESS: PRIVATE
misionRouter.get('/random', auth, getRandomMission);

export default misionRouter;