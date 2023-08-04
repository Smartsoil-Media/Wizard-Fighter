import characterData from "./data.js"
import Character from "./character.js"



let monstersArray = ["orc", "demon", "goblin"];
let isWaiting = false


function attack() {
   if (!isWaiting) {
      wizard.getDiceHtml()
      monster.getDiceHtml()
      wizard.takeDamage(monster.currentDiceScore)
      monster.takeDamage(wizard.currentDiceScore)
      render()
      if(wizard.dead) {
         endGame()
      } else if (monster.dead) {
         isWaiting = true
            if (monstersArray.length > 0) {
               setTimeout(() => {
                  monster = getNewMonster()
                  render()
                  isWaiting = false
               }, 1500)
            } else {
               endGame()
            }
      }
   }
}

function getNewMonster(){
   const nextMonsterdata = characterData[monstersArray.shift()]
   return nextMonsterdata ? new Character(nextMonsterdata) : {}
 
}

function endGame() {
   isWaiting = true
   const endMsg = wizard.health === 0 && monster.health === 0 ?
   "Both creatures are dead" :
   wizard.health > 0 ? "The wizard wins " : "The monster is victorious"
   const endEmojji = wizard.health > 0 ? "🔮" : "☠️"
   setTimeout(() => {
      document.body.innerHTML = 
      `<div class="end-game">
         <h2>Game Over</h2>
         <h3>${endMsg}</h3>
         <p class="end-emoji">${endEmojji}</p>
       </div>` 
   }, 1500)

}


document.getElementById("attack-button").addEventListener('click', attack)

function render(){  
   document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
   document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

const wizard = new Character(characterData.hero)
let monster = getNewMonster()

render()










