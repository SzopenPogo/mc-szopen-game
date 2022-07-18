import { LOGIN_ROUTE } from "data/routes/clientRoutes";
import MasterLayout from "layouts/MasterLayout/MasterLayout";
import Landing from "pages/Landing";
import Login from "pages/Login";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <MasterLayout>
      <Routes>
        <Route path='/' element={<Landing />} />
        
        <Route path={LOGIN_ROUTE} element={<Login />} />
      </Routes>
    </MasterLayout>
  );
}

export default App;
