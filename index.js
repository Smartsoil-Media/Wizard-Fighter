
 
 const hero = {
   elementId: "hero",
   name: "Wizard",
   avatar: "/images/wizard.png",
   health: 60,
   diceCount: 3
}

const monster = {
   elementId: "monster",
   name: "Orc",
   avatar: "/images/orc.png",
   health: 10,
   diceCount: 1
}

const JMack = {
   elementId: "monster",
   name: "The Big Dog",
   avatar: "https://plus.unsplash.com/premium_photo-1682097238346-3f2a677ccfe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2FycmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
   health: 100,
   diceCount: 4
}

function Character(data) {
   this.elementId = data.elementId
   this.name = data.name
   this.avatar = data.avatar
   this.health = data.health
   this.diceCount = data.diceCount

   this.getCharacterHtml = function () {
      const {name, avatar, health, diceCount } = this;
      const diceHtml = getDiceHtml(diceCount)

      document.getElementById(this.elementId).innerHTML =
          `<div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}" />
          <div class="health">health: <b> ${health} </b></div>
          <div class="dice-container">    
              ${diceHtml}
          </div>
      </div>`;

  }

}
const wizard = new Character(hero)
const orc = new Character(monster)
wizard.getCharacterHtml()
orc.getCharacterHtml()


function getDiceRollArray(diceCount) {
   return new Array(diceCount).fill(0).map(function() {
      return Math.floor(Math.random()*6) + 1
  })


}
console.log(getDiceRollArray(3))

function getDiceHtml(diceCount) {
 return getDiceRollArray(diceCount).map(function(num){
   return `<div class="dice">${num}</div>`
 }).join('')
}


console.log(getDiceHtml(3))




