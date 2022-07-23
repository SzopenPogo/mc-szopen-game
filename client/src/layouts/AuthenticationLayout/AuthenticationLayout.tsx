import SpinnerFullscreen from "components/spinner/SpinnerFullscreen/SpinnerFullscreen";
import { GAME_ROUTE } from "data/routes/clientRoutes";
import MainLayout from "layouts/MainLayout/MainLayout";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "store";

interface Props {
  children: ReactNode;
}


const AuthenticationLayout = ({children}: Props) => {
  const navigate = useNavigate();

  const {loading, token} = useSelector((state: RootState) => state.account);

  useEffect(() => {
    if(token) {
      navigate(GAME_ROUTE);
    }
  }, [token, navigate])
  

  return (
    <MainLayout>
      {children}
      {loading && <SpinnerFullscreen />}
    </MainLayout>
  )
}

export default AuthenticationLayout;