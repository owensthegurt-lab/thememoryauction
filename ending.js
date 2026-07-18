/*
    THE MEMORY AUCTION

    ending.js

    FINAL ENDING SYSTEM
*/


// =====================================
// ENDING ENGINE
// =====================================


function showEnding(){


let ending = calculateEnding();



unlockEnding(ending.id);



if(typeof checkEndingAchievements === "function"){

checkEndingAchievements();

}



let story =
document.getElementById("story");


let choices =
document.getElementById("choices");



story.innerHTML = `

<div class="ending">

<h1>
${ending.name}
</h1>


<h3>
${ending.category.toUpperCase()} ENDING
</h3>


<p>
${ending.text}
</p>


</div>

`;



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
// ENDING CALCULATOR
// =====================================


function calculateEnding(){



let possible =
endings.sort(

(a,b)=>

b.priority-a.priority

);



for(let ending of possible){


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
// UNLOCK ENDING
// =====================================


function unlockEnding(id){



if(
!player.endingsUnlocked.includes(id)

){


player.endingsUnlocked.push(id);



}



}









// =====================================
// ENDING PROGRESS
// =====================================


function getEndingProgress(){


return{


found:

player.endingsUnlocked.length,


total:

endings.length,


percent:

Math.floor(

(player.endingsUnlocked.length /

endings.length)

*100

)



};



}









function getCategoryProgress(category){



let total =
endings.filter(

e=>

e.category===category

).length;



let found =
endings.filter(

e=>

e.category===category

&&

player.endingsUnlocked.includes(e.id)

).length;



return{


found,

total


};



}









// =====================================
// ENDING DATABASE
// =====================================


const endings=[







// =====================================
// SECRET ENDINGS
// =====================================



{


id:

"ending_absolute_memory",


category:

"secret",


priority:

100,


name:

"THE ABSOLUTE MEMORY",



condition:()=>{


return(

player.memories.length>=20

&&

player.stats.truth>=20

&&

player.stats.identity>=15

&&

elias.trust>=10

);



},



text:

"You remember everything. The auction opens its final door. The truth was never hidden from you. It was waiting for you."

},








{


id:

"ending_final_memory",


category:

"secret",


priority:

95,


name:

"THE FINAL MEMORY",



condition:()=>{


return(

player.special.collectedAllMemories

&&

player.stats.truth>=15

&&

player.stats.identity>=10

);



},



text:

"Every forgotten fragment returns. Every choice. Every mistake. Every promise."

},








{


id:

"ending_creator",


category:

"secret",


priority:

90,


name:

"THE CREATOR",



condition:()=>{


return(

player.stats.identity>=12

&&

player.stats.truth>=10

);



},



text:

"You discover why you built the auction. You were not escaping yourself. You were trying to save yourself."

},








{


id:

"ending_creator_of_dreams",


category:

"secret",


priority:

85,


name:

"THE CREATOR OF DREAMS",



condition:()=>{


return(

player.special.secretChapterUnlocked

&&

player.stats.identity>=15

&&

player.stats.good>=10

);



},



text:

"The auction was never a prison. It was a second chance."

},








{


id:

"ending_dreamer",


category:

"secret",


priority:

80,


name:

"THE DREAMER",



condition:()=>{


return(

player.special.secretChapterUnlocked

&&

player.stats.truth>=15

);



},



text:

"You discover that reality itself may only be another memory."

},






