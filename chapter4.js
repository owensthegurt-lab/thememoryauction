/*
    THE MEMORY AUCTION

    chapter4.js

    Chapter 4:
    The Memory That Was Never Lost
*/





// =====================================
// SECRET CHAPTER START
// =====================================


story.chapter4Start={



text:`


<h2>
CHAPTER FOUR
</h2>


<h1>
THE MEMORY THAT WAS NEVER LOST
</h1>


<p>
The auction begins to collapse.
</p>


<p>
Rooms disappear.
</p>


<p>
Memories break apart like glass.
</p>


<p>
But one door remains.
</p>


<p>
A door with your name written on it.
</p>


`,



choices:[



{


text:
"Open the door.",


next:
"originalMemory",


effects:{


truth:3,


identity:2


}



},





{


text:
"Ask Elias first.",


next:
"eliasFinalMemory"


}



]



};









// =====================================
// ORIGINAL MEMORY
// =====================================


story.originalMemory={



text:`


<h2>
THE ORIGINAL MEMORY
</h2>


<p>
You enter the room.
</p>


<p>
Inside is the first version of yourself.
</p>


<p>
Not a copy.
</p>


<p>
Not a dream.
</p>


<p>
The person you were before the auction.
</p>


<p>
You finally remember why you created it.
</p>


<p>
You were not trying to erase pain.
</p>


<p>
You were trying to stop becoming someone worse.
</p>


`,



choices:[



{


text:
"Accept who you were.",


next:
"creatorTruth",


effects:{


good:3,


special:{


discoveredTruth:true


}



}



},





{


text:
"Reject your old self.",


next:
"creatorTruth",


effects:{


corruption:3


}



}



]



};









// =====================================
// ELIAS FINAL MEMORY
// =====================================


story.eliasFinalMemory={



text:`


<h2>
THE FRIEND WHO REMEMBERED
</h2>


<p>
Elias opens his final memory.
</p>


<p>
It shows the day everything went wrong.
</p>


<p>
You did not abandon Elias.
</p>


<p>
You asked him to stop you if you ever lost yourself.
</p>


<p>
He was never your enemy.
</p>


<p>
He was your safeguard.
</p>


`,



choices:[



{


text:
"Thank Elias.",


next:
"creatorTruth",


effects:{


elias:{


trust:5


},


good:2


}



},





{


text:
"Blame Elias.",


next:
"creatorTruth",


effects:{


evil:2,


elias:{


fear:3


}



}



}



]



};









// =====================================
// CREATOR TRUTH
// =====================================


story.creatorTruth={



text:`


<h2>
THE LAST REVELATION
</h2>


<p>
The auction was never built to erase memories.
</p>


<p>
It was built to separate the person you were...
</p>


<p>
from the person you feared becoming.
</p>


<p>
The final memory waits.
</p>


<p>
The choice is no longer about the auction.
</p>


<p>
It is about you.
</p>


`,



choices:[



{


text:
"Merge with your memories.",


next:null,


effects:{


truth:5,


identity:5,


special:{


collectedAllMemories:true


}



}



},





{


text:
"Destroy the final memory.",


next:null,


effects:{


good:2,


special:{


destroyedAuction:true


}



}



},





{


text:
"Become the auction.",


next:null,


effects:{


evil:5,


corruption:5,


special:{


controlledAuction:true


}



}



}



]



};
