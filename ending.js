/*
    THE MEMORY AUCTION

    ending.js

    Ending Engine
*/





// =====================================
// SHOW ENDING
// =====================================


function showEnding(){


let endingID =
calculateEnding();



unlockEnding(
endingID
);



if(typeof checkAchievements==="function"){

checkAchievements();

}



let ending =
endings[endingID];



if(!ending){


console.error(
"Missing ending:",
endingID
);


return;


}



currentScene=endingID;



document.getElementById(
"story"
).innerHTML=
ending.text;



let choices=
document.getElementById(
"choices"
);



choices.innerHTML="";



let button=
document.createElement(
"button"
);



button.innerHTML=
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



let s =
player.stats;



let sp =
player.special;



let e =
elias;







// ================================
// SECRET ENDINGS
// ================================



if(

sp.collectedAllMemories

&&

s.truth>=10

){

return "ending_secret_true";

}







if(

s.identity>=10

&&

s.truth>=8

){

return "ending_secret_original";

}









// ================================
// ELIAS ENDINGS
// ================================



if(

e.trust>=8

&&

s.good>=8

){

return "ending_elias_friend";

}







if(

e.fear>=8

&&

s.evil>=8

){

return "ending_elias_betrayal";

}







if(

e.lost

&&

e.trust>=5

){

return "ending_elias_brokenPromise";

}







// ================================
// HERO ENDINGS
// ================================



if(

sp.destroyedAuction

&&

s.good>=8

&&

s.truth>=5

){

return "ending_hero_liberator";

}







if(

sp.rebuiltAuction

&&

e.trust>=5

){

return "ending_hero_restorer";

}







if(

sp.acceptedBurden

){

return "ending_hero_burden";

}







if(

s.good>=10

){

return "ending_hero_secondChance";

}







// ================================
// EVIL ENDINGS
// ================================



if(

sp.controlledAuction

&&

s.evil>=8

){

return "ending_evil_auctioneer";

}







if(

s.corruption>=10

){

return "ending_evil_brokenGod";

}







if(

s.evil>=10

){

return "ending_evil_emperor";

}







// ================================
// NEUTRAL
// ================================



if(

s.truth>=5

){

return "ending_neutral_watcher";

}





return "ending_neutral_balance";



}









// =====================================
// ENDING DATABASE
// =====================================


const endings={







// ================================
// HERO
// ================================


ending_hero_liberator:{


text:`

<h1>
THE MEMORY LIBERATOR
</h1>


<p>
The auction is destroyed.
</p>


<p>
Every stolen memory returns.
</p>


<p>
The world suffers from remembering.
</p>


<p>
But humanity finally has the truth.
</p>


<p>
For the first time...

people can heal honestly.
</p>

`

},








ending_hero_restorer:{


text:`

<h1>
THE GENTLE RESTORER
</h1>


<p>
The auction survives.
</p>


<p>
But it changes forever.
</p>


<p>
No more stolen memories.

No more forced forgetting.
</p>


<p>
People choose their own healing.
</p>

`

},








ending_hero_burden:{


text:`

<h1>
THE BURDEN BEARER
</h1>


<p>
You take every stolen memory into yourself.
</p>


<p>
Every regret.

Every loss.

Every scream.
</p>


<p>
Everyone else is free.
</p>


<p>
But you carry the world.
</p>

`

},








ending_hero_secondChance:{


text:`

<h1>
THE SECOND CHANCE
</h1>


<p>
You accept what you did.
</p>


<p>
The person who created the disaster...

repairs it.
</p>

`

},








// ================================
// ELIAS
// ================================


ending_elias_friend:{


text:`

<h1>
THE LAST FRIEND
</h1>


<p>
Elias remembers everything.
</p>


<p>
The mistakes.

The pain.

The betrayal.
</p>


<p>
But he stays.
</p>


`

},








ending_elias_betrayal:{


text:`

<h1>
THE FINAL BETRAYAL
</h1>


<p>
The person who believed in you...

becomes your first victim.
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
But the person who helped you most...

paid the price.
</p>


<p>
Elias disappears knowing you tried.
</p>

`

},








// ================================
// EVIL
// ================================


ending_evil_auctioneer:{


text:`

<h1>
THE NEW AUCTIONEER
</h1>


<p>
The machine obeys.
</p>


<p>
Memories become your weapon.
</p>


<p>
Nobody can fight someone they cannot remember.
</p>

`

},








ending_evil_emperor:{


text:`

<h1>
THE MEMORY EMPEROR
</h1>


<p>
Every mind becomes a kingdom.
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

Infinite power.
</p>


<p>
One problem.
</p>


<p>
You no longer remember yourself.
</p>

`

},








// ================================
// NEUTRAL
// ================================


ending_neutral_watcher:{


text:`

<h1>
THE WATCHER
</h1>


<p>
You walk away.
</p>


<p>
The auction remains.
</p>


<p>
The world continues without knowing whether you were right.
</p>

`

},








ending_neutral_balance:{


text:`

<h1>
THE BALANCED PATH
</h1>


<p>
You refuse extremes.
</p>


<p>
Some things are fixed.

Some things remain broken.
</p>


<p>
Life continues.
</p>

`

},








// ================================
// SECRET
// ================================


ending_secret_true:{


text:`

<h1>
THE TRUE MEMORY
</h1>


<p>
You collected every fragment.
</p>


<p>
The final memory reveals everything.
</p>


<p>
The auction was never about forgetting.
</p>


<p>
It was about deciding who you become.
</p>

`

},








ending_secret_original:{


text:`

<h1>
THE ORIGINAL MEMORY
</h1>


<p>
You finally understand why you erased yourself.
</p>


<p>
The truth was not lost.
</p>


<p>
It was hidden.
</p>

`

}



};
