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
// =====================================
// HERO ENDINGS
// =====================================



{


id:

"ending_memory_liberator",


category:

"hero",


priority:

70,


name:

"THE MEMORY LIBERATOR",



condition:()=>{


return(

player.special.destroyedAuction

&&

player.stats.good>=8

&&

player.stats.truth>=5

);



},



text:

"The auction collapses. The memories return. The world suffers through the truth, but it is finally free."

},








{


id:

"ending_restorer",


category:

"hero",


priority:

68,


name:

"THE RESTORER",



condition:()=>{


return(

player.special.rebuiltAuction

&&

elias.trust>=5

);



},



text:

"You rebuild what was broken. The auction no longer steals memories. It protects them."

},








{


id:

"ending_burden_bearer",


category:

"hero",


priority:

66,


name:

"THE BURDEN BEARER",



condition:()=>{


return(

player.special.acceptedBurden

);



},



text:

"Everyone else is free. Every forgotten memory now lives inside you."

},








{


id:

"ending_protector",


category:

"hero",


priority:

64,


name:

"THE PROTECTOR",



condition:()=>{


return(

player.special.savedElias

&&

player.stats.good>=10

);



},



text:

"You couldn't save everyone. But you saved the person who saved you."

},








{


id:

"ending_forgotten_hero",


category:

"hero",


priority:

62,


name:

"THE FORGOTTEN HERO",



condition:()=>{


return(

player.stats.good>=12

&&

player.stats.identity<5

);



},



text:

"The world remembers your sacrifice. You do not remember your own name."

},








{


id:

"ending_mercy",


category:

"hero",


priority:

60,


name:

"THE MERCY ENDING",



condition:()=>{


return(

player.stats.good>=8

&&

player.stats.truth>=8

&&

!player.special.destroyedAuction

);



},



text:

"You erase only the suffering. The memories worth keeping survive."

},








{


id:

"ending_silent_savior",


category:

"hero",


priority:

58,


name:

"THE SILENT SAVIOR",



condition:()=>{


return(

player.stats.good>=10

&&

elias.trust<3

);



},



text:

"Nobody knows what you did. Nobody knows what you sacrificed. But everyone lives."

},








{


id:

"ending_impossible_choice",


category:

"hero",


priority:

56,


name:

"THE IMPOSSIBLE CHOICE",



condition:()=>{


return(

player.stats.good>=15

&&

player.special.acceptedBurden

);



},



text:

"You choose the path nobody else could survive."

},








{


id:

"ending_second_chance",


category:

"hero",


priority:

54,


name:

"SECOND CHANCE",



condition:()=>{


return(

player.stats.good>=10

&&

player.stats.identity>=5

);



},



text:

"The past cannot be repaired. But the future can still be written."

},








{


id:

"ending_last_guardian",


category:

"hero",


priority:

52,


name:

"THE LAST GUARDIAN",



condition:()=>{


return(

player.stats.good>=12

&&

elias.trust>=8

);



},



text:

"You remain forever watching over the memories of others."

},









// =====================================
// EVIL ENDINGS
// =====================================



{


id:

"ending_new_auctioneer",


category:

"evil",


priority:

50,


name:

"THE NEW AUCTIONEER",



condition:()=>{


return(

player.special.controlledAuction

&&

player.stats.evil>=8

);



},



text:

"The auction no longer chooses who loses memories. You do."

},








{


id:

"ending_memory_emperor",


category:

"evil",


priority:

48,


name:

"THE MEMORY EMPEROR",



condition:()=>{


return(

player.stats.evil>=15

);



},



text:

"Every mind becomes your kingdom. Every memory becomes your law."

},








{


id:

"ending_broken_god",


category:

"evil",


priority:

46,


name:

"THE BROKEN GOD",



condition:()=>{


return(

player.stats.corruption>=12

);



},



text:

"You become everything the auction was created to prevent."

},








{


id:

"ending_collector",


category:

"evil",


priority:

44,


name:

"THE COLLECTOR",



condition:()=>{


return(

player.memories.length>=15

&&

player.stats.evil>=5

);



},



text:

"Every memory belongs to you. Every secret. Every regret."

},








{


id:

"ending_false_savior",


category:

"evil",


priority:

42,


name:

"THE FALSE SAVIOR",



condition:()=>{


return(

player.stats.good>=5

&&

player.stats.corruption>=8

);



},



text:

"You convince everyone you saved them. They never realize what was taken."

},








{


id:

"ending_perfect_prison",


category:

"evil",


priority:

40,


name:

"THE PERFECT PRISON",



condition:()=>{


return(

player.stats.corruption>=10

&&

player.stats.truth>=5

);



},



text:

"You remove pain from the world. Along with everything else."

},








{


id:

"ending_puppet_master",


category:

"evil",


priority:

38,


name:

"THE PUPPET MASTER",



condition:()=>{


return(

elias.fear>=10

&&

player.stats.evil>=8

);



},



text:

"Even Elias forgets he ever had a choice."

},








{


id:

"ending_eternal_auction",


category:

"evil",


priority:

36,


name:

"THE ETERNAL AUCTION",



condition:()=>{


return(

player.special.controlledAuction

&&

player.memories.length>=10

);



},



text:

"The doors never close. The auction never ends."

},








{


id:

"ending_empty_king",


category:

"evil",


priority:

34,


name:

"THE EMPTY KING",



condition:()=>{


return(

player.stats.evil>=12

&&

player.stats.identity<=2

);



},



text:

"You gained everything. Except yourself."

},








{


id:

"ending_final_corruption",


category:

"evil",


priority:

32,


name:

"THE FINAL CORRUPTION",



condition:()=>{


return(

player.stats.corruption>=15

);



},



text:

"You became the monster you feared."

},
// =====================================
// NEUTRAL ENDINGS
// =====================================



{


id:

"ending_watcher",


category:

"neutral",


priority:

30,


name:

"THE WATCHER",



condition:()=>{


return(

player.stats.truth>=8

&&

player.stats.good<8

&&

player.stats.evil<8

);



},



text:

"You learn the truth but refuse to decide what should happen next."

},








{


id:

"ending_balance",


category:

"neutral",


priority:

0,


name:

"THE BALANCED PATH",



condition:()=>{


return true;


},



text:

"You refuse both extremes. Some things heal. Some things remain broken."

},








{


id:

"ending_wanderer",


category:

"neutral",


priority:

28,


name:

"THE WANDERER",



condition:()=>{


return(

player.memories.length>=5

&&

player.stats.good<8

&&

player.stats.evil<8

);



},



text:

"You leave carrying pieces of a life you are still trying to understand."

},








{


id:

"ending_forgotten_traveler",


category:

"neutral",


priority:

26,


name:

"THE FORGOTTEN TRAVELER",



condition:()=>{


return(

player.stats.identity<=2

);



},



text:

"You escape. But you cannot remember what you escaped from."

},








{


id:

"ending_observer",


category:

"neutral",


priority:

24,


name:

"THE OBSERVER",



condition:()=>{


return(

player.stats.truth>=10

);



},



text:

"You see everything. You change nothing."

},








{


id:

"ending_survivor",


category:

"neutral",


priority:

22,


name:

"THE SURVIVOR",



condition:()=>{


return(

player.memories.length>=3

);



},



text:

"You escape the auction alive. Sometimes survival is enough."

},








{


id:

"ending_unfinished_story",


category:

"neutral",


priority:

20,


name:

"THE UNFINISHED STORY",



condition:()=>{


return(

player.chapter===3

);



},



text:

"You walk away before the final answer is discovered."

},








{


id:

"ending_last_question",


category:

"neutral",


priority:

18,


name:

"THE LAST QUESTION",



condition:()=>{


return(

player.stats.truth>=12

&&

player.stats.identity<8

);



},



text:

"You found the truth. You never found peace."

},









// =====================================
// ELIAS ENDINGS
// =====================================



{


id:

"ending_last_friend",


category:

"elias",


priority:

29,


name:

"THE LAST FRIEND",



condition:()=>{


return(

elias.trust>=8

);



},



text:

"Elias remembers everything. You remember enough. Somehow, you both stay."

},








{


id:

"ending_guardian_pair",


category:

"elias",


priority:

27,


name:

"THE GUARDIAN PAIR",



condition:()=>{


return(

elias.trust>=10

&&

player.stats.good>=8

);



},



text:

"Together, you protect the memories of everyone who enters."

},








{


id:

"ending_shared_burden",


category:

"elias",


priority:

25,


name:

"THE SHARED BURDEN",



condition:()=>{


return(

elias.trust>=10

&&

player.special.acceptedBurden

);



},



text:

"Neither of you carries the memories alone."

},








{


id:

"ending_broken_promise",


category:

"elias",


priority:

23,


name:

"THE BROKEN PROMISE",



condition:()=>{


return(

elias.fear>=8

);



},



text:

"The person who believed in you most becomes the person you hurt."

},








{


id:

"ending_elias_betrayal",


category:

"elias",


priority:

21,


name:

"THE BETRAYAL",



condition:()=>{


return(

elias.betrayed

);



},



text:

"You abandon the one person who never forgot you."

},








{


id:

"ending_lost_companion",


category:

"elias",


priority:

19,


name:

"THE LOST COMPANION",



condition:()=>{


return(

elias.lost

);



},



text:

"The last person who remembered you disappears."

},








{


id:

"ending_final_goodbye",


category:

"elias",


priority:

17,


name:

"THE FINAL GOODBYE",



condition:()=>{


return(

player.special.savedElias

&&

player.special.destroyedAuction

);



},



text:

"You save Elias by letting the world he belonged to disappear."

},








// =====================================
// ABSOLUTE FINAL ENDING
// =====================================



{


id:

"ending_the_last_memory",


category:

"secret",


priority:

101,


name:

"THE LAST MEMORY",



condition:()=>{


return(

player.endingsUnlocked.length>=39

);



},



text:

"You have seen every possible future. The final memory is not about what happened. It is about what you choose after knowing everything."

}



];





