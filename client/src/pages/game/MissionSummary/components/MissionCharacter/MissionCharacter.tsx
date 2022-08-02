import CharacterAvatar from "components/character/CharacterAvatar/CharacterAvatar";
import MissionAvatar from "pages/game/MissionSummary/components/MissionAvatar/MissionAvatar";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface Props {
  currentHealth: number;
  isHitted: boolean;
}

const MissionCharacter = ({currentHealth, isHitted}: Props) => {
  const {name, health} = useSelector((state: RootState) => state.character.character);

  return (
    <MissionAvatar 
      max={health}
      current={currentHealth}
      name={name}
      isHitted={isHitted}
    >
      <CharacterAvatar />
    </MissionAvatar>
  )
}

export default MissionCharacter;