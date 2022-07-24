import { Dispatch } from "@reduxjs/toolkit";
import CharacterSelectModal from "components/modal/CharacterSelectModal/CharacterSelectModal";
import SpinnerFullscreen from "components/spinner/SpinnerFullscreen/SpinnerFullscreen";
import { CHARACTER_SUCCESS } from "data/constants/character/character";
import { GAME_CHARACTER_CREATE_ROUTE, LOGIN_ROUTE } from "data/routes/clientRoutes";
import MainLayout from "layouts/MainLayout/MainLayout";
import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "store";
import { getCharacter } from "store/character/actions/character-get-actions";

interface Props {
  children: ReactNode;
}


const GameLayout = ({children}: Props) => {
  const dispatch = useDispatch() as Dispatch<any>;
  const navigate = useNavigate();

  const {loading: accountLoading, token} = useSelector((state: RootState) => state.account);
  const {loading: characterLoading, 
    characters,
    character,
    actionType: characterActionType
  } = useSelector((state: RootState) => state.character);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Handle loading status
  useEffect(() => {
    if (accountLoading || characterLoading) {
      setIsLoading(true);
    }

    return () => setIsLoading(false);
  }, [accountLoading, characterLoading])
  

  useEffect(() => {
    if(!token) {
      navigate(LOGIN_ROUTE);
    }

    if(token) {
      dispatch(getCharacter(token));
    }
  }, [token, navigate, dispatch])

  useEffect(() => {
    
    if(token) {
      //If accont don't have any character then navigate to character create screen
      if(characterActionType === CHARACTER_SUCCESS && characters.length <= 0) {
        navigate(GAME_CHARACTER_CREATE_ROUTE);
      }
    }
  }, [token, characters, characterActionType, navigate])
  
  
  //TODO Account manage button in top right
  return (
    <MainLayout>
      {!isLoading && <>
        {character._id && children}
        <CharacterSelectModal 
          activate={!character._id}
          timeout={100}
        />
      </>}

      {isLoading && <SpinnerFullscreen />}
    </MainLayout>
  )
}

export default GameLayout;