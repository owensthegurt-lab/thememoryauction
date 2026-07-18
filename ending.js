/*
    THE MEMORY AUCTION

    ending.js

    Complete Ending System
*/





// =====================================
// SHOW ENDING
// =====================================


function showEnding(){


let endingID = calculateEnding();



unlockEnding(endingID);



if(typeof checkAchievements === "function"){

checkAchievements();

}



let ending = endings[endingID];



if(!ending){

console.error(
"Missing ending:",
endingID
);

return;

}



document.getElementById("story").innerHTML =
ending.text;



let choices =
document.getElementById("choices");



choices.innerHTML="";



let button =
document.createElement("button");



button.innerHTML =
"Return To Title";



button.onclick = ()=>{


location.reload();


};



choices.appendChild(button);



}









// =====================================
// ENDING CALCULATOR
// =====================================


function calculateEnding(){



let s = player.stats;

let sp = player.special;

let e = elias;





// ================================
// SECRET ENDINGS
// ================================



if(

sp.collectedAllMemories

&&

s.truth >= 12

&&

s.identity >= 8

){


return "ending_true_memory";


}





if(

s.identity >= 10

&&

s.truth >= 10

){


return "ending_original_self";


}







if(

e.trust >= 8

&&

sp.discoveredTruth

&&

s.good >= 5

){


return "ending_elias_guardian";


}







if(

sp.controlledAuction

&&

s.corruption >= 8

){


return "ending_memory_god";


}







// ================================
// ELIAS ENDINGS
// ================================



if(

e.trust >= 8

&&

s.good >= 8

){


return "ending_elias_friend";


}





if(

e.fear >= 8

&&

s.evil >= 5

){


return "ending_elias_betrayal";


}





if(

e.lost

&&

e.trust >= 5

){


return "ending_elias_brokenPromise";


}







// ================================
// HERO ENDINGS
// ================================



if(

sp.destroyedAuction

&&

s.good >= 8

&&

s.truth >= 5

){


return "ending_hero_liberator";


}





if(

sp.rebuiltAuction

&&

e.trust >= 5

){


return "ending_hero_restorer";


}





if(

sp.acceptedBurden

){


return "ending_hero_burden";


}





if(

s.good >= 10

){


return "ending_hero_secondChance";


}







// ================================
// EVIL ENDINGS
// ================================



if(

sp.controlledAuction

&&

s.evil >= 8

){


return "ending_evil_auctioneer";


}





if(

s.corruption >= 10

){


return "ending_evil_brokenGod";


}





if(

s.evil >= 10

){


return "ending_evil_emperor";


}







// ================================
// NEUTRAL ENDINGS
// ================================



if(

s.truth >= 5

){


return "ending_neutral_watcher";


}



return "ending_neutral_balance";



}









// =====================================
// ENDING DATABASE
// =====================================


const endings={




ending_true_memory:{


text:`

<h1>
THE TRUE MEMORY
</h1>

<p>
Every forgotten fragment returns.
</p>

<p>
Every choice.
Every mistake.
Every promise.
</p>

<p>
You finally understand the auction.
</p>

<p>
It was never meant to erase you.
</p>

<p>
It was waiting for you to remember yourself.
</p>

`

},







ending_original_self:{


text:`

<h1>
THE ORIGINAL SELF
</h1>

<p>
You remember who you were.
</p>

<p>
Not the monster you feared becoming.
</p>

<p>
Not the person you tried to destroy.
</p>

<p>
Just yourself.
</p>

`

},







ending_elias_guardian:{


text:`

<h1>
THE LAST GUARDIAN
</h1>

<p>
Elias stays.
</p>

<p>
Not because he has to.
</p>

<p>
Because he chooses to.
</p>

<p>
Together you protect the memories of the world.
</p>

`

},







ending_memory_god:{


text:`

<h1>
THE MEMORY GOD
</h1>

<p>
The auction becomes part of you.
</p>

<p>
Every memory.
Every thought.
Every regret.
</p>

<p>
You have infinite knowledge.
</p>

<p>
But you no longer know which memories belonged to you.
</p>

`

},







ending_elias_friend:{


text:`

<h1>
THE LAST FRIEND
</h1>

<p>
Elias remembers the past.
</p>

<p>
You remember the pain.
</p>

<p>
But neither of you leave.
</p>

`

},







ending_elias_betrayal:{


text:`

<h1>
THE FINAL BETRAYAL
</h1>

<p>
The person who trusted you most becomes your first victim.
</p>

<p>
Elias was right to fear you.
</p>

`

},







ending_elias_brokenPromise:{


text:`

<h1>
THE BROKEN PROMISE
</h1>

<p>
You tried to save everyone.
</p>

<p>
You failed the one person who saved you.
</p>

`

},







ending_hero_liberator:{


text:`

<h1>
THE MEMORY LIBERATOR
</h1>

<p>
The auction falls.
</p>

<p>
The truth returns.
</p>

<p>
The world suffers...
</p>

<p>
but it is finally free.
</p>

`

},







ending_hero_restorer:{


text:`

<h1>
THE RESTORER
</h1>

<p>
The auction survives.
</p>

<p>
But no longer steals.
</p>

<p>
People choose what they remember.
</p>

`

},







ending_hero_burden:{


text:`

<h1>
THE BURDEN BEARER
</h1>

<p>
Everyone is free.
</p>

<p>
Except you.
</p>

<p>
You carry every forgotten memory.
</p>

`

},







ending_hero_secondChance:{


text:`

<h1>
SECOND CHANCE
</h1>

<p>
You repair what you broke.
</p>

<p>
The past cannot change.
</p>

<p>
But the future can.
</p>

`

},







ending_evil_auctioneer:{


text:`

<h1>
THE NEW AUCTIONEER
</h1>

<p>
Memories become weapons.
</p>

<p>
Nobody can fight what they cannot remember.
</p>

`

},







ending_evil_emperor:{


text:`

<h1>
THE MEMORY EMPEROR
</h1>

<p>
Every mind becomes your kingdom.
</p>

<p>
Every memory becomes your law.
</p>

`

},







ending_evil_brokenGod:{


text:`

<h1>
THE BROKEN GOD
</h1>

<p>
You become the auction itself.
</p>

<p>
Infinite memories.
</p>

<p>
No identity.
</p>

`

},







ending_neutral_watcher:{


text:`

<h1>
THE WATCHER
</h1>

<p>
You leave the auction behind.
</p>

<p>
The world continues.
</p>

<p>
Nobody knows if you saved it or doomed it.
</p>

`

},







ending_neutral_balance:{


text:`

<h1>
THE BALANCED PATH
</h1>

<p>
You refuse both extremes.
</p>

<p>
Some things heal.
</p>

<p>
Some things never will.
</p>

`

}



};
