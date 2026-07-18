/*
    THE MEMORY AUCTION

    story.js

    Chapter 1:
    The Beginning
*/


const story = {



intro:{


text:`

<h2>
THE EMPTY ROOM
</h2>


<p>
You wake up somewhere impossible.
</p>


<p>
There are no walls.

No ceiling.

No door.
</p>


<p>
Only a table.
</p>


<p>
On the table sits a single memory.
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

text:"Touch the memory.",

next:"firstMemory",

effects:{

truth:1

}

},



{

text:"Leave it alone.",

next:"ignoreMemory",

effects:{

corruption:1

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
The world disappears.
</p>


<p>
You see yourself.
</p>


<p>
Older.

Broken.

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

text:"Search the memory.",

next:"auctionDoor",

effects:{

identity:2,

truth:2

}

},



{

text:"Forget what you saw.",

next:"auctionDoor",

effects:{

corruption:1

}

}


]


},







ignoreMemory:{


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
But something noticed.
</p>


`,


choices:[


{

text:"Continue.",

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
A sign hangs above it.
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

text:"Enter.",

next:"meetElias"

}


]


},







meetElias:{


text:`

<h2>
THE STRANGER
</h2>


<p>
Inside stands a man.
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

text:"Ask who he is.",

next:"chapter2Start",

effects:{

elias:{

trust:2,

truth:1

}

}

},



{

text:"Threaten him.",

next:"chapter2Start",

effects:{

evil:2,

elias:{

fear:2

}

}

},



{

text:"Walk away.",

next:"chapter2Start"

}


]


}





};
