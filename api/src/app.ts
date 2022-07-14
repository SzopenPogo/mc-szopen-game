import cors from "cors";
import express from "express";
import path from "path";
import { PORT } from "./constants/app/app";
import 'colors';
import connectDatabase from "./config/database";
import routeNotFound from "./middleware/routeNotFound";
import accountRouter from "./routes/accountRouter";
import characterRouter from "./routes/characterRouter";
import misionRouter from "./routes/missionRouter";

const app = express();

//APP CONFIG
connectDatabase();
app.use(cors());
app.use(express.json());

//ROUTES
// ACCOUNT 
// register, login, logout, logoutAll, getMe, editMe
app.use('/account', accountRouter);

// CHARACTER
// create, getMe, getMeById, addStatisticPoint
app.use('/character', characterRouter);

// MISSION
// getRandomMission, startMission, getActiveMission, finishMission
app.use('/mission', misionRouter);

//SERVE IMAGES FROM SERVER (SERVER_URL/images/...)
const dirname = path.resolve();
app.use('/images', express.static(path.join(dirname, '/images')));

//ROUTE NOT FOUND
app.use(routeNotFound);

app.listen(PORT, () => {
  console.log(`>> Server running on PORT: ${PORT}`.yellow.bgBlack.bold);
});