/*
    THE MEMORY AUCTION

    ending.js

    Final 40 Ending Framework
*/



// =====================================
// ENDING CHECKER
// =====================================


function showEnding(){


let ending =
calculateEnding();



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
// CALCULATE ENDING
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




return endings[endings.length-1];



}









// =====================================
// ENDING DATABASE
// =====================================


const endings=[



// ================================
// SECRET ENDINGS
// ================================



{


id:"ending_final_memory",


name:"THE FINAL MEMORY",


priority:100,


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

"The final memory reveals the truth behind everything. The auction was never your prison. It was your last chance to remember who you truly were."

},







{


id:"ending_creator",


name:"THE CREATOR",


priority:95,


condition:()=>{


return (

player.stats.identity>=12

&&

player.stats.truth>=10

);



},


text:

"You finally understand why you created the auction. You were not trying to escape your past. You were trying to prevent your future."

},







{


id:"ending_dreamer",


name:"THE DREAMER",


priority:90,


condition:()=>{


return (

player.special.secretChapterUnlocked

&&

player.stats.truth>=15


);



},


text:

"The world outside the auction may not be real. The memories may not be yours. The only truth left is the choice you make."

},







// ================================
// ELIAS
// ================================



{


id:"ending_guardian_pair",


name:"THE GUARDIAN PAIR",


condition:()=>{


return (

elias.trust>=10

&&

player.stats.good>=8

);



},


text:

"You and Elias remain together. Not as owners of the auction, but as protectors of every person who enters."

},







{


id:"ending_last_friend",


name:"THE LAST FRIEND",


condition:()=>{


return (

elias.trust>=8

);



},


text:

"Elias remembers everything. You remember enough. Somehow, you both choose to stay."

},







{


id:"ending_broken_promise",


name:"THE BROKEN PROMISE",


condition:()=>{


return (

elias.fear>=8

);



},


text:

"The person who believed in you most becomes the person you hurt the most."

},







// ================================
// HERO
// ================================



{


id:"ending_memory_liberator",


name:"THE MEMORY LIBERATOR",


condition:()=>{


return (

player.special.destroyedAuction

&&

player.stats.good>=8

);



},


text:

"The auction falls. The truth returns. The world suffers, but it is finally free."

},







{


id:"ending_restorer",


name:"THE RESTORER",


condition:()=>{


return (

player.special.rebuiltAuction

&&

elias.trust>=5

);



},


text:

"You rebuild the auction into something better. A place where people choose what they remember."

},







{


id:"ending_burden_bearer",


name:"THE BURDEN BEARER",


condition:()=>{


return (

player.special.acceptedBurden

);



},


text:

"Everyone is free because you carry what everyone else wanted to forget."

},







// ================================
// EVIL
// ================================



{


id:"ending_new_auctioneer",


name:"THE NEW AUCTIONEER",


condition:()=>{


return (

player.special.controlledAuction

&&

player.stats.evil>=8

);



},


text:

"Memories become your weapon. Nobody can resist someone who controls their past."

},







{


id:"ending_memory_god",


name:"THE MEMORY GOD",


condition:()=>{


return (

player.stats.corruption>=12

);



},


text:

"You become the auction itself. Infinite knowledge. Infinite memories. No identity."

},







// ================================
// NEUTRAL
// ================================



{


id:"ending_watcher",


name:"THE WATCHER",


condition:()=>{


return (

player.stats.truth>=5

);



},


text:

"You leave the auction behind. Nobody knows if you saved the world or abandoned it."

},







{


id:"ending_balance",


name:"THE BALANCED PATH",


condition:()=>{


return true;


},


text:

"You refuse both extremes. Some things heal. Some things remain broken."

}



];
