import { Router } from "express";
import finishMission from "../controllers/mission/finishMission";
import getActiveMission from "../controllers/mission/getActiveMission";
import getRandomMission from "../controllers/mission/getRandomMission";
import startMission from "../controllers/mission/startMission";
import auth from "../middleware/auth";
import authMission from "../middleware/authMission";

const misionRouter = Router();

// TYPE: GET /mission/random
// DESCRIPTION: Get 3 random missions data
// ACCESS: PRIVATE
// HEADER: Authorization, characterId
misionRouter.get('/random', auth, authMission, getRandomMission);

// TYPE: POST /mission/start
// DESCRIPTION: Start mission
// ACCESS: PRIVATE
// BODY: characterActiveMissionIndex
// HEADER: Authorization, characterId
misionRouter.post('/start', auth, authMission, startMission);

// TYPE: GET /mission/active
// DESCRIPTION: Get character active mission
// ACCESS: PRIVATE
// HEADER: Authorization, characterId
misionRouter.get('/active', auth, authMission, getActiveMission);

// TYPE: POST /mission/finish/:id
// DESCRIPTION: Finish mission
// ACCESS: PRIVATE
// HEADER: Authorization, characterId
misionRouter.post('/finish/:id', auth, authMission, finishMission);

export default misionRouter;