import { Router } from "express";
import characterBuyStat from "../controllers/character/characterBuyStat";
import characterCreate from "../controllers/character/characterCreate";
import characterGetMy from "../controllers/character/characterGetMy";
import characterGetMyById from "../controllers/character/characterGetMyById";
import auth from '../middleware/auth';

const characterRouter = Router();

// TYPE: POST /character/create
// DESCRIPTION: Create new character
// ACCESS: PRIVATE
characterRouter.post('/create', auth, characterCreate);

// TYPE: GET /character/my/:id
// DESCRIPTION: Get user character by id
// ACCESS: PRIVATE
characterRouter.get('/my/:id', auth, characterGetMyById);

// TYPE: GET /character/my
// DESCRIPTION: Get all user characters
// ACCESS: PRIVATE
characterRouter.get('/my', auth, characterGetMy);

// TYPE: POST /character/my/buyStat/:id
// DESCRIPTION: Buy character one statistic point
// DESCRIPTION: Available stats: stamina, hitPoints, criticalStrike
// ACCEPT: Array<{statName: string, amount: number}>
// ACCESS: PRIVATE
characterRouter.post('/my/buyStat/:id', auth, characterBuyStat);




export default characterRouter;