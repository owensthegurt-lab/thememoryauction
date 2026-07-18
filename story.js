/*
    THE MEMORY AUCTION

    story.js

    Chapter 1
*/



const story = {



intro:{


text:`

<h2>
THE EMPTY ROOM
</h2>


<p>

You wake up somewhere that does not exist.

</p>


<p>

There are no walls.

No doors.

Only a table.

</p>


<p>

On the table sits a single object.

A memory.

</p>


<p>

You reach for it...

and realize something terrifying.

</p>


<p>

You do not know your own name.

</p>

`,


choices:[


{

text:
"Touch the memory.",


next:"firstMemory",


effects:{

truth:1

}


},



{

text:
"Leave it alone.",


next:"leaveMemory",


effects:{

law:1

}

}


]


},






firstMemory:{


text:`

<h2>
THE FIRST MEMORY
</h2>


<p>

The moment your hand touches it,

the room disappears.

</p>


<p>

You see yourself.

</p>


<p>

Older.

Tired.

Afraid.

</p>


<p>

A voice whispers:

</p>


<p>

"Do not trust the auction."

</p>


`,


choices:[


{


text:
"Try to remember more.",


next:"auctionDoor",


effects:{


identity:2,


truth:2


}


},



{


text:
"Forget what you saw.",


next:"auctionDoor",


effects:{


corruption:1


}


}



]


},







leaveMemory:{


text:`

<h2>
THE SILENCE
</h2>


<p>

You turn away.

</p>


<p>

The memory disappears.

</p>


<p>

But something watches you leave.

</p>


`,


choices:[


{


text:
"Continue forward.",


next:"auctionDoor"


}


]


},







auctionDoor:{


text:`

<h2>
THE MEMORY AUCTION
</h2>


<p>

A door appears.

</p>


<p>

Behind it is a place that feels familiar.

</p>


<p>

A sign reads:

</p>


<h3>

MEMORY AUCTION

</h3>


<p>

"Sell what hurts.

Buy what was lost."

</p>


`,


choices:[


{


text:
"Enter the auction.",


next:"meetElias",


effects:{


memory:"001"


}


}


]


},







meetElias:{


text:`

<h2>
THE STRANGER</h2>


<p>

Inside the auction stands a man watching you.

</p>


<p>

He looks relieved.

</p>


<p>

Then terrified.

</p>


<p>

"You..."

</p>


<p>

"You are alive."

</p>


<p>

His name is Elias.

</p>


`,


choices:[



{


text:
"Ask who he is.",


next:"eliasTruth",


effects:{


elias:{

trust:2,

truth:1

}


}


},





{


text:
"Threaten him.",


next:"eliasFear",


effects:{


evil:2,


elias:{

fear:2

}


}


},





{


text:
"Walk away.",


next:"auctionRoom"


}



]


},







eliasTruth:{


text:`

<h2>
ELIAS</h2>


<p>

"I have been looking for you."

</p>


<p>

"You erased yourself."

</p>


<p>

"I don't know why."

</p>


`,


choices:[


{


text:
"Believe him.",


next:"auctionRoom",


effects:{


elias:{

trust:2

}


}


},



{


text:
"Demand proof.",


next:"auctionRoom",


effects:{


truth:2

}


}


]


},







eliasFear:{


text:`

<h2>
FEAR</h2>


<p>

Elias steps back.

</p>


<p>

Not because he fears your strength.

</p>


<p>

Because he remembers what you did.

</p>


`,


choices:[


{


text:
"Enter the auction.",


next:"auctionRoom"


}


]


},







auctionRoom:{


text:`

<h2>
THE AUCTION FLOOR</h2>


<p>

Hundreds of memories float above you.

</p>


<p>

Every one belongs to someone.

</p>


<p>

Every one has a price.

</p>


`,


choices:[


{


text:
"Browse memories.",


next:"memoryChoice"


},



{


text:
"Ask Elias what happened.",


next:"eliasQuestion"


}



]


},







memoryChoice:{


text:`

<h2>
MEMORIES WAITING</h2>


<p>

The auction begins.

</p>


<p>

You feel something pulling you toward one memory.

</p>


`,


choices:[


{


text:
"Purchase a memory.",


next:"afterMemory",


effects:{

credits:-500,

memory:"001"

}


},



{


text:
"Refuse the memory.",


next:"afterMemory"


}


]


},







afterMemory:{


text:`

<h2>
THE FIRST CHOICE</h2>


<p>

The auctioneer smiles.

</p>


<p>

"Good."

</p>


<p>

"Now you are ready."

</p>


`,


choices:[


{


text:
"Continue.",


next:"chapter2"


}


]


},







chapter2:{


text:`

<h2>
CHAPTER ONE COMPLETE</h2>


<p>

The real memories are still hidden.

</p>


<p>

But someone knows the truth.

</p>


<p>

Elias.

</p>


`,


choices:[


{


text:
"Continue the story.",


next:"auctionRoom"


}


]


}



};
