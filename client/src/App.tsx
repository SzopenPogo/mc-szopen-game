import { GAME_CHARACTER_ROUTE, GAME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "data/routes/clientRoutes";
import MasterLayout from "layouts/MasterLayout/MasterLayout";
import Login from "pages/authentication/Login";
import Register from "pages/authentication/Register";
import Character from "pages/game/Character";
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
        <Route path={GAME_CHARACTER_ROUTE} element={<Character />} />
      </Routes>
    </MasterLayout>
  );
}

export default App;
