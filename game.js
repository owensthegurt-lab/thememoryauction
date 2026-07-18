/*
    THE MEMORY AUCTION

    game.js

    Core Game Engine
*/



// =====================================
// PLAYER DATA
// =====================================


function createPlayer(){


return {


credits:500,


memories:[],


stats:{


good:0,

evil:0,

truth:0,

corruption:0,

identity:0


},



special:{


destroyedAuction:false,


controlledAuction:false,


rebuiltAuction:false,


acceptedBurden:false,


savedElias:false,


lostElias:false,


discoveredTruth:false,


collectedAllMemories:false


},



endingsUnlocked:[]



};



}









let player=createPlayer();







// =====================================
// ELIAS DATA
// =====================================


function createElias(){


return {


trust:0,


fear:0,


truth:0,


saved:false,


lost:false,


memoriesShared:0,


betrayed:false



};



}







let elias=createElias();







// =====================================
// GAME STATE
// =====================================


let currentScene="intro";








// =====================================
// START GAME
// =====================================


function startNewGame(){



player=createPlayer();


elias=createElias();



currentScene="intro";



openGame();



loadScene(
currentScene
);



updateHUD();



}








// =====================================
// LOAD STORY SCENE
// =====================================


function loadScene(id){



let scene=story[id];



if(!scene){


console.error(

"Missing scene:",
id

);


return;


}



currentScene=id;



document.getElementById(
"story"
).innerHTML=scene.text;



let choices=
document.getElementById(
"choices"
);



choices.innerHTML="";



scene.choices.forEach(choice=>{


let button=
document.createElement(
"button"
);



button.innerHTML=
choice.text;



button.onclick=()=>{


applyEffects(
choice.effects
);



if(choice.next){


loadScene(
choice.next
);


}

else{


showEnding();


}



};



choices.appendChild(button);



});



updateHUD();



}









// =====================================
// EFFECT SYSTEM
// =====================================


function applyEffects(effects){


if(!effects)
return;





Object.keys(effects).forEach(key=>{


let value=
effects[key];






// Elias changes

if(key==="elias"){



Object.keys(value).forEach(stat=>{


if(
typeof elias[stat] !== "number"
){

elias[stat]=0;


}



elias[stat]+=value[stat];



});



return;


}






// Special flags

if(key==="special"){



Object.keys(value).forEach(flag=>{


player.special[flag]=value[flag];


});



return;


}






// Memory collection

if(key==="memory"){



if(
!player.memories.includes(value)
){


player.memories.push(value);


}



return;


}






// Credits

if(key==="credits"){


player.credits+=value;


return;


}






// Normal stats

if(
player.stats[key] !== undefined
){


player.stats[key]+=value;


}



});



if(typeof checkAchievements==="function"){


checkAchievements();


}



updateHUD();



}









// =====================================
// ENDING UNLOCKS
// =====================================


function unlockEnding(id){



if(
!player.endingsUnlocked.includes(id)
){


player.endingsUnlocked.push(id);


}



}









// =====================================
// SAVE SYSTEM
// =====================================


function saveGame(slot=1){



let save={


player:player,


elias:elias,


scene:currentScene,


date:new Date().toLocaleString()


};



localStorage.setItem(

"memoryAuction_slot"+slot,

JSON.stringify(save)

);



updateSaveSlots();



}








function loadSlot(slot){



let data=
localStorage.getItem(

"memoryAuction_slot"+slot

);



if(!data)
return;



let save=
JSON.parse(data);



player=save.player;


elias=save.elias;


currentScene=save.scene;



openGame();



loadScene(
currentScene
);



}








function deleteSlot(slot){



localStorage.removeItem(

"memoryAuction_slot"+slot

);



updateSaveSlots();


}









// =====================================
// MENUS
// =====================================


function openGame(){



document.getElementById(
"titleScreen"
).style.display="none";



document.getElementById(
"saveScreen"
).style.display="none";



document.getElementById(
"game"
).style.display="block";



}






function openSaveSlots(){



document.getElementById(
"titleScreen"
).style.display="none";



document.getElementById(
"saveScreen"
).style.display="block";



updateSaveSlots();



}






function closeSaveSlots(){



document.getElementById(
"saveScreen"
).style.display="none";



document.getElementById(
"titleScreen"
).style.display="block";



}









function updateSaveSlots(){



for(
let i=1;
i<=3;
i++
){



let box=
document.getElementById(
"slot"+i
);



if(!box)
continue;



let save=
localStorage.getItem(

"memoryAuction_slot"+i

);



box.innerHTML=
save ?

"Memory Found"

:

"Empty";



}



}









// =====================================
// DEBUG
// =====================================


function testEnding(){



player.stats.good=10;


player.stats.truth=10;


player.special.destroyedAuction=true;



showEnding();



}







window.onload=()=>{


updateSaveSlots();


};
