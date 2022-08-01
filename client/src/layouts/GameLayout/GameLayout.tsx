import { Dispatch } from "@reduxjs/toolkit";
import CharacterSelectModal from "components/modal/CharacterSelectModal/CharacterSelectModal";
import SpinnerFullscreen from "components/spinner/SpinnerFullscreen/SpinnerFullscreen";
import { CHARACTER_FAIL } from "data/constants/character/character";
import { GAME_CHARACTER_CREATE_ROUTE, LOGIN_ROUTE } from "data/routes/clientRoutes";
import GameLayoutHeader from "layouts/GameLayout/components/GameLayoutHeader/GameLayoutHeader";
import MainLayout from "layouts/MainLayout/MainLayout";
import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "store";
import { setCharacterCreateMode } from "store/character/actions/character-create-mode-actions";
import { getCharacter } from "store/character/actions/character-get-actions";
import { getMyCharacterById } from "store/character/actions/character-get-me-by-id-actions";

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
    actionType: characterActionType,
    isCreateMode,
    selectedCharacterId
  } = useSelector((state: RootState) => state.character);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isContent, setIsContent] = useState<boolean>(false);

  //Handle loading status
  useEffect(() => {
    if (accountLoading || characterLoading) {
      setIsLoading(true);
    }

    return () => setIsLoading(false);
  }, [accountLoading, characterLoading])

  //Handle content display
  useEffect(() => {
    if (character._id || isCreateMode) {
      setIsContent(true);
    }

    return () => setIsContent(false);
  }, [character._id, isCreateMode])
  

  useEffect(() => {
    if(!token) {
      navigate(LOGIN_ROUTE);
    }

    // Get character list if user is authenticated and no character has been selected
    if(token && !selectedCharacterId) {
      dispatch(getCharacter(token));
    }

    // Get selected character data
    if(selectedCharacterId) {
      dispatch(getMyCharacterById(token, selectedCharacterId));
    }
  }, [token, selectedCharacterId, navigate, dispatch])

  useEffect(() => {
    const windowUrl = window.location.pathname;
    //Check if is character create url
    if(windowUrl === GAME_CHARACTER_CREATE_ROUTE) {
      dispatch(setCharacterCreateMode(true));
    }

    if(windowUrl !== GAME_CHARACTER_CREATE_ROUTE) {
      dispatch(setCharacterCreateMode(false));
    }
  }, [dispatch])
  

  useEffect(() => {
    
    if(token) {
      //If accont don't have any character then navigate to character create screen
      if(characterActionType === CHARACTER_FAIL && characters.length <= 0) {
        navigate(GAME_CHARACTER_CREATE_ROUTE);
      }
    }
  }, [token, characters, characterActionType, navigate])
  
  
  //TODO Account manage button in top right
  return (
    <MainLayout>
      {!isLoading && <>
        {isContent && <>
          {children}
          <GameLayoutHeader />
        </>}
        <CharacterSelectModal 
          activate={characters.length > 0 && !character._id && !isCreateMode}
          timeout={100}
        />
      </>}

      {isLoading && <SpinnerFullscreen />}
    </MainLayout>
  )
}

export default GameLayout;