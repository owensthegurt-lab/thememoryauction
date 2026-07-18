/*
    THE MEMORY AUCTION

    chapter2.js

    Chapter 2:
    The Rooms That Remember
*/





// =====================================
// CHAPTER 2 START
// =====================================


story.chapter2Start={



text:`


<h2>
CHAPTER TWO
</h2>


<h1>
THE ROOMS THAT REMEMBER
</h1>


<p>
The auction opens its deeper floors.
</p>


<p>
Each room contains a memory that someone abandoned.
</p>


<p>
Elias watches you carefully.
</p>


<p>
"You need to understand what this place does."
</p>


<p>
"Before you decide what happens to it."
</p>


`,



choices:[



{


text:
"Explore the memory vaults.",


next:
"memoryVault"


},





{


text:
"Stay with Elias.",


next:
"eliasTalk"


}



]



};









// =====================================
// MEMORY VAULT
// =====================================


story.memoryVault={



text:`


<h2>
THE MEMORY VAULT
</h2>


<p>
Thousands of glass containers line the walls.
</p>


<p>
Every one holds a life.
</p>


<p>
A lost childhood.

A forgotten love.

A buried mistake.
</p>


<p>
You feel something familiar.
</p>


<p>
One of these memories belongs to you.
</p>


`,



choices:[



{


text:
"Take a memory.",


next:
"personalMemory",


effects:{


memory:
"unknown_memory",


truth:1


}



},






{


text:
"Leave them untouched.",


next:
"eliasTalk",


effects:{


good:1


}



}



]



};









// =====================================
// PERSONAL MEMORY
// =====================================


story.personalMemory={



text:`


<h2>
THE MEMORY OF FIRE
</h2>


<p>
You touch the glass.
</p>


<p>
The world disappears.
</p>


<p>
You see yourself.
</p>


<p>
Standing in front of the auction.
</p>


<p>
Someone is trapped inside.
</p>


<p>
Someone who trusted you.
</p>


<p>
The memory ends before you see who.
</p>


`,



choices:[



{


text:
"Search for the person.",


next:
"hiddenRoom",


effects:{


identity:2


}



},





{


text:
"Forget what you saw.",


next:
"eliasTalk",


effects:{


corruption:1


}



}



]



};









// =====================================
// ELIAS TALK
// =====================================


story.eliasTalk={



text:`


<h2>
ELIAS' MEMORY
</h2>


<p>
Elias sits beside the machine.
</p>


<p>
"I remember everything."
</p>


<p>
"Even the things you wanted me to forget."
</p>


<p>
He shows you a memory.
</p>


<p>
A promise you made.
</p>


<p>
You promised you would fix the auction.
</p>


`,



choices:[



{


text:
"Promise to fix it.",


next:
"hiddenRoom",


effects:{


good:2,


elias:{


trust:2


}



}



},





{


text:
"Ask what you did wrong.",


next:
"hiddenRoom",


effects:{


truth:2,


elias:{


truth:2


}



}



},






{


text:
"Say Elias is lying.",


next:
"hiddenRoom",


effects:{


evil:2,


elias:{


fear:2


}



}



}



]



};









// =====================================
// HIDDEN ROOM
// =====================================


story.hiddenRoom={



text:`


<h2>
THE LOCKED MEMORY
</h2>


<p>
Behind the vaults is a hidden room.
</p>


<p>
No auction records exist here.
</p>


<p>
Only one memory remains.
</p>


<p>
Yours.
</p>


<p>
A warning was written beside it:
</p>


<p>
"DO NOT REMEMBER THIS."
</p>


`,



choices:[



{


text:
"Open the memory.",


next:
"chapter3Start",


effects:{


memory:
"forbidden_memory",


truth:3,


special:{


collectedAllMemories:true


}



}



},





{


text:
"Leave it closed.",


next:
"chapter3Start"


}



]



};
