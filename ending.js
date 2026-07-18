/*
    THE MEMORY AUCTION

    ending.js

    Final Ending Framework
*/


// =====================================
// SHOW ENDING
// =====================================


function showEnding(){


let ending = calculateEnding();



unlockEnding(
ending.id
);



document.getElementById("story").innerHTML = `

<h1>
${ending.name}
</h1>


<p>
${ending.text}
</p>


<p>
Ending Type:
${ending.category}
</p>

`;



let choices =
document.getElementById("choices");



choices.innerHTML="";



let button =
document.createElement("button");



button.innerHTML =
"Return To Title";



button.onclick=()=>{

location.reload();

};



choices.appendChild(button);



}









// =====================================
// FIND ENDING
// =====================================


function calculateEnding(){



for(
let ending of endings
){


if(
ending.condition()
){


return ending;


}


}




return endings.find(

e=>e.id==="ending_balance"

);



}









// =====================================
// ENDING UNLOCK
// =====================================


function unlockEnding(id){



if(
!player.endingsUnlocked.includes(id)
){


player.endingsUnlocked.push(id);


}



}









// =====================================
// ENDING TRACKING
// =====================================


function getEndingProgress(){



let total =
endings.length;



let found =
player.endingsUnlocked.length;



return {


found,

total,

percent:

Math.floor(
(found/total)*100
)


};



}









function getCategoryProgress(category){



let total =
endings.filter(

e=>e.category===category

).length;



let found =
endings.filter(

e=>

e.category===category

&&

player.endingsUnlocked.includes(e.id)

).length;



return {


found,

total


};



}









// =====================================
// 40 ENDING DATABASE
// =====================================


const endings=[



// =====================================
// SECRET ENDINGS
// =====================================



{


id:"ending_final_memory",

category:"secret",

name:"THE FINAL MEMORY",


condition:()=>{


return (

player.special.collectedAllMemories

&&

player.stats.truth>=15

&&

player.stats.identity>=10

);


},


text:

"The final memory reveals everything. The auction was never meant to destroy you. It was waiting for you to remember yourself."

},







{


id:"ending_creator",

category:"secret",

name:"THE CREATOR",


condition:()=>{


return (

player.stats.identity>=12

&&

player.stats.truth>=10

);


},


text:

"You discover why you built the auction. You were not escaping your past. You were stopping your future."

},







{


id:"ending_dreamer",

category:"secret",

name:"THE DREAMER",


condition:()=>{


return (

player.special.secretChapterUnlocked

&&

player.stats.truth>=15

);


},


text:

"The world outside the auction may not be real. The only truth left is the choice you make."

},







// =====================================
// HERO ENDINGS
// =====================================



{


id:"ending_memory_liberator",

category:"hero",

name:"THE MEMORY LIBERATOR",


condition:()=>{


return (

player.special.destroyedAuction

&&

player.stats.good>=8

);


},


text:

"The auction falls. The truth returns. Humanity finally remembers."

},







{


id:"ending_restorer",

category:"hero",

name:"THE RESTORER",


condition:()=>{


return (

player.special.rebuiltAuction

&&

elias.trust>=5

);


},


text:

"You rebuild the auction into something better."

},







{


id:"ending_burden",

category:"hero",

name:"THE BURDEN BEARER",


condition:()=>{


return (

player.special.acceptedBurden

);


},


text:

"Everyone is free because you carry every forgotten memory."

},







// =====================================
// EVIL
// =====================================



{


id:"ending_new_auctioneer",

category:"evil",

name:"THE NEW AUCTIONEER",


condition:()=>{


return (

player.special.controlledAuction

&&

player.stats.evil>=8

);


},


text:

"Memories become your weapon."

},







// =====================================
// NEUTRAL
// =====================================



{


id:"ending_watcher",

category:"neutral",

name:"THE WATCHER",


condition:()=>{


return (

player.stats.truth>=5

);


},


text:

"You walk away and leave the world wondering."

},







{


id:"ending_balance",

category:"neutral",

name:"THE BALANCED PATH",


condition:()=>{


return true;


},


text:

"Some things heal. Some things never will."

}



];
