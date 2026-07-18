/*
    THE MEMORY AUCTION

    game.js

    Main Game Engine
*/





// =====================================
// PLAYER CREATION
// =====================================


function createPlayer(){


return {


credits:500,



chapter:1,



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

collectedAllMemories:false,


secretChapterUnlocked:false


},




endingsUnlocked:[]



};



}









function createElias(){


return {


trust:0,

fear:0,

truth:0,


saved:false,

lost:false,


betrayed:false,


memoriesShared:0


};



}









let player=createPlayer();

let elias=createElias();



let currentScene="intro";









// =====================================
// START
// =====================================


function startNewGame(){



player=createPlayer();


elias=createElias();



currentScene="intro";



openGame();



loadScene(currentScene);



updateHUD();



}









// =====================================
// LOAD SCENE
// =====================================


function loadScene(id){



let scene=story[id];



if(!scene){


console.error(

"Scene missing:",
id

);


return;


}







currentScene=id;



document.getElementById("story").innerHTML=
scene.text;



let choices=
document.getElementById("choices");



choices.innerHTML="";






scene.choices.forEach(choice=>{



let button =
document.createElement("button");



button.innerHTML=
choice.text;



button.onclick=()=>{


applyEffects(choice.effects);



if(choice.next){



// Chapter progression check


if(
choice.next==="chapter3Start"
){

player.chapter=3;


}



if(
choice.next==="chapter4Start"
){


if(
player.special.secretChapterUnlocked
){


player.chapter=4;


}

else{


return;


}



}




loadScene(choice.next);



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


let value=effects[key];







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







if(key==="special"){



Object.keys(value).forEach(flag=>{


player.special[flag]=value[flag];


});



return;


}







if(key==="memory"){



if(
!player.memories.includes(value)
){


player.memories.push(value);


}



return;


}







if(key==="credits"){


player.credits+=value;


return;


}







if(
player.stats[key] !== undefined
){


player.stats[key]+=value;


}



});






// unlock secret chapter



if(

player.special.discoveredTruth

&&

player.memories.length>=3

){


player.special.secretChapterUnlocked=true;


}







if(typeof checkAchievements==="function"){


checkAchievements();


}



updateHUD();



}









// =====================================
// ENDINGS
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


player,

elias,

currentScene


};



localStorage.setItem(

"memoryAuction_slot_"+slot,

JSON.stringify(save)

);



updateSaveSlots();



}









function loadSlot(slot){



let data =
localStorage.getItem(

"memoryAuction_slot_"+slot

);



if(!data)
return;



let save =
JSON.parse(data);



player=save.player;


elias=save.elias;


currentScene=save.currentScene;



openGame();



loadScene(currentScene);



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
let i=1;i<=3;i++
){



let box =
document.getElementById(
"slot"+i
);



if(!box)
continue;



let save =
localStorage.getItem(

"memoryAuction_slot_"+i

);



box.innerHTML =
save ?

"Memory Saved"

:

"Empty";



}



}









// =====================================
// DEBUG
// =====================================


function unlockSecret(){



player.special.secretChapterUnlocked=true;



console.log(
"Secret Chapter Unlocked"
);



}
