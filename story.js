/*
    THE MEMORY AUCTION

    story.js

    Chapter 1:
    The Forgotten Beginning
*/



const story={};







// =====================================
// INTRO
// =====================================


story.intro={



text:`


<h1>
THE MEMORY AUCTION
</h1>


<p>
You wake up in a room that does not exist.
</p>


<p>
The walls shift between places you recognize.
</p>


<p>
A childhood bedroom.
</p>


<p>
A hospital hallway.
</p>


<p>
A place you have never seen.
</p>


<p>
You cannot remember your name.
</p>


<p>
But you remember one thing.
</p>


<p>
You were here before.
</p>


`,



choices:[



{


text:
"Search the room.",


next:
"firstMemory",


effects:{


memory:
"forgotten_room"


}



},






{


text:
"Call out for someone.",


next:
"eliasArrival"


}



]



};









// =====================================
// FIRST MEMORY
// =====================================


story.firstMemory={



text:`


<h2>
THE FIRST FRAGMENT
</h2>


<p>
You find a small glass container.
</p>


<p>
Inside is a memory.
</p>


<p>
Your memory.
</p>


<p>
You see yourself standing beside a machine.
</p>


<p>
Someone is crying.
</p>


<p>
Someone you promised to protect.
</p>


<p>
You cannot remember who.
</p>


`,



choices:[



{


text:
"Keep the memory.",


next:
"eliasArrival",


effects:{


truth:1,


identity:1


}



},






{


text:
"Destroy the memory.",


next:
"eliasArrival",


effects:{


corruption:1


}



}



]



};









// =====================================
// ELIAS INTRODUCTION
// =====================================


story.eliasArrival={



text:`


<h2>
THE STRANGER WHO REMEMBERS
</h2>


<p>
A door opens.
</p>


<p>
A man steps inside.
</p>


<p>
He looks at you like he has been waiting years.
</p>


<p>
"You really don't remember me?"
</p>


<p>
His name is Elias.
</p>


<p>
And somehow...

you know he is telling the truth.
</p>


`,



choices:[



{


text:
"Trust Elias.",


next:
"firstConversation",


effects:{


elias:{


trust:2


}



}



},






{


text:
"Ask what he wants.",


next:
"firstConversation",


effects:{


elias:{


truth:1


}



}



},






{


text:
"Threaten him.",


next:
"firstConversation",


effects:{


evil:1,


elias:{


fear:2


}



}



}



]



};









// =====================================
// FIRST CONVERSATION
// =====================================


story.firstConversation={



text:`


<h2>
THE MAN WHO REMEMBERED YOU
</h2>


<p>
Elias explains that you entered the auction willingly.
</p>


<p>
You were searching for something.
</p>


<p>
Something painful enough that you wanted to forget.
</p>


<p>
"But you didn't just erase your memory."
</p>


<p>
"You erased yourself."
</p>


`,



choices:[



{


text:
"Ask what you lost.",


next:
"lostMemory",


effects:{


truth:2


}



},






{


text:
"Ask how to leave.",


next:
"lostMemory"


}



]



};









// =====================================
// LOST MEMORY
// =====================================


story.lostMemory={



text:`


<h2>
THE EMPTY SPACE
</h2>


<p>
Elias takes you deeper into the auction.
</p>


<p>
Every room contains a piece of someone.
</p>


<p>
Every memory has a price.
</p>


<p>
Some people paid to forget.
</p>


<p>
Others were forced to.
</p>


<p>
And you were the one who built it.
</p>


`,



choices:[



{


text:
"Find the truth.",


next:
"chapter3Start",


effects:{


truth:3,


special:{


discoveredTruth:true


}



}



},






{


text:
"Find a way out.",


next:
"chapter3Start"


}



]



};
