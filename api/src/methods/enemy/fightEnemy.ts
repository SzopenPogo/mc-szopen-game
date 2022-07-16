import { ICharacterModel } from "../../interfaces/character/ICharacterModel";
import { IEnemyCombat } from "../../interfaces/enemy/IEnemyCombat";
import { IEnemyModel } from "../../interfaces/enemy/IEnemyModel";

const fightEnemy = async (
  enemy: IEnemyModel, 
  character: ICharacterModel
) => {
  let characterHealth = character.health;
  let enemyHealth = enemy.health;
  let isCharacterWin = false;
  let isFinished = false;

  while (!isFinished) {
    //Character deal damage to enemy
    const characterDamage = character.dealDamage();
    enemyHealth -= characterDamage;

    //Enemy deal damage to character
    const enemyDamage = enemy.dealDamage();
    characterHealth -= enemyDamage;

    //Combat log
    const combatData: IEnemyCombat = {
      characterHealth,
      characterDamage,
      enemyHealth,
      enemyDamage
    }
    enemy.combatLog.push(combatData);
    
    if(enemyHealth <= 0) {
      isCharacterWin = true;
      await enemy.setDefeated();
      break;
    }

    if(enemyHealth <= 0 || characterHealth <= 0) {
      isFinished = true;
    }
  }
  
  await enemy.save();
  return isCharacterWin;
}

export default fightEnemy;