import { GAME_CHARACTER_CREATE_ROUTE, GAME_CHARACTER_ROUTE, GAME_CLUBHOUSE_ROUTE, GAME_MISSION_ROUTE, GAME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "data/routes/clientRoutes";
import MasterLayout from "layouts/MasterLayout/MasterLayout";
import Login from "pages/authentication/Login";
import Register from "pages/authentication/Register";
import ActiveMission from "pages/game/ActiveMission";
import Character from "pages/game/Character";
import Clubhouse from "pages/game/Clubhouse";
import CreateCharacter from "pages/game/CreateCharacter";
import Game from "pages/game/Game";
import Landing from "pages/Landing";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <MasterLayout>
      <Routes>
        <Route path='/' element={<Landing />} />
        
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={REGISTER_ROUTE} element={<Register />} />

        <Route path={GAME_ROUTE} element={<Game />} />
        <Route path={GAME_CHARACTER_CREATE_ROUTE} element={<CreateCharacter />} />
        <Route path={GAME_CHARACTER_ROUTE} element={<Character />} />
        <Route path={GAME_CLUBHOUSE_ROUTE} element={<Clubhouse />} />
        <Route path={GAME_MISSION_ROUTE} element={<ActiveMission />} />
      </Routes>
    </MasterLayout>
  );
}

export default App;
