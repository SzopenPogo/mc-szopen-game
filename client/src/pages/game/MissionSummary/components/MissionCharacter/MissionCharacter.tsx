import CharacterAvatar from "components/character/CharacterAvatar/CharacterAvatar";
import MissionAvatar from "pages/game/MissionSummary/components/MissionAvatar/MissionAvatar";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface Props {
  currentHealth: number;
  isHitted: boolean;
  enemyDamage: number;
}

const MissionCharacter = ({
  currentHealth,
  isHitted,
  enemyDamage
}: Props) => {
  const {name, health} = useSelector((state: RootState) => state.character.character);

  return (
    <MissionAvatar 
      max={health}
      current={currentHealth}
      name={name}
      isHitted={isHitted}
      receivedDamage={enemyDamage}
    >
      <CharacterAvatar />
    </MissionAvatar>
  )
}

export default MissionCharacter;