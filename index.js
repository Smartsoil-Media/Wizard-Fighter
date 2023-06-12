const hero = {
   elementId: "hero",
   name: "Wizard",
   avatar: "/images/wizard.png",
   health: 60,
   diceRoll: [3, 1, 4],
   diceCount: 3
}

const monster = {
   elementId: "monster",
   name: "Orc",
   avatar: "/images/orc.png",
   health: 10,
   diceRoll: [4],
   diceCount: 1
}

const JMack = {
   elementId: "monster",
   name: "The Big Dog",
   avatar: "https://plus.unsplash.com/premium_photo-1682097238346-3f2a677ccfe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2FycmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
   health: 100,
   diceRoll: [4,3,1,5],
   diceCount: 4
}


function renderCharacter(data) {
   const { elementId, name, avatar, health, diceRoll, diceCount} = data;

   let diceHtml = ""

   for (let i = 0; i < diceCount; i++) {
      diceHtml += `<div class="dice">${diceRoll[i]}</div>`
   }

   document.getElementById(elementId).innerHTML += 
      `
      <div class="character-card">
         <h4 class="name"> ${name} </h4>
         <img class="avatar" src="${avatar}"/>
         <p class="health">health: <b> ${health} </b></p>
         <div class="dice-container">
           ${diceHtml}
         </div>
      </div>        
`
   
}




renderCharacter(hero)
renderCharacter(monster)

