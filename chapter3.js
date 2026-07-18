/*
    THE MEMORY AUCTION

    chapter3.js

    Chapter 3:
    The Final Choice
*/



story.chapter3Start = {


text:`

<h2>
CHAPTER THREE
</h2>


<h3>
THE MACHINE THAT REMEMBERS
</h3>


<p>
The auction changes.
</p>


<p>
The walls begin showing memories.
</p>


<p>
Not just yours.
</p>


<p>
Everyone's.
</p>


<p>
Elias stands beside the machine beneath the floor.
</p>


<p>
"This is what you built."
</p>


`,


choices:[


{


text:"Ask what the auction truly is.",

next:"auctionTruth",

effects:{

truth:2,

special:{

discoveredTruth:true

}

}

},



{


text:"Destroy the auction.",

next:"destroyChoice",

effects:{

good:2

}

},



{


text:"Take control of the auction.",

next:"controlChoice",

effects:{

evil:2

}

}



]


};









story.auctionTruth = {


text:`

<h2>
THE PRICE OF FORGETTING
</h2>


<p>
The auction never destroyed memories.
</p>


<p>
It stored them.
</p>


<p>
Every painful moment removed from someone...

went somewhere.
</p>


<p>
Here.
</p>


<p>
Inside the machine.
</p>


<p>
Inside you.
</p>


`,


choices:[


{


text:"Accept what you did.",

next:"acceptBurden",

effects:{

truth:3,

special:{

acceptedBurden:true

}

}

},



{


text:"Reject the truth.",

next:"finalDecision",

effects:{

corruption:2

}

}



]


};









story.acceptBurden = {


text:`

<h2>
THE WEIGHT OF EVERYTHING
</h2>


<p>
The memories return.
</p>


<p>
Every person.

Every mistake.

Every choice.
</p>


<p>
You remember why you erased yourself.
</p>


<p>
The truth was too heavy.
</p>


<p>
But now you are strong enough to carry it.
</p>


`,


choices:[


{


text:"Save everyone by carrying the burden.",

next:"finalDecision",

effects:{

good:3

}

}



]


};









story.destroyChoice = {


text:`

<h2>
THE END OF THE AUCTION
</h2>


<p>
The machine can be destroyed.
</p>


<p>
But if it breaks...

all stolen memories return.
</p>


<p>
Millions of forgotten moments.

Millions of painful truths.
</p>


<p>
Elias looks at you.
</p>


<p>
"This may hurt everyone."
</p>


<p>
"But maybe people deserve the truth."
</p>


`,


choices:[


{


text:"Destroy it.",

next:"finalDecision",

effects:{

good:3,

special:{

destroyedAuction:true

}

}

},



{


text:"Find a safer way.",

next:"auctionTruth"

}



]


};









story.controlChoice = {


text:`

<h2>
THE PERFECT WORLD
</h2>


<p>
The machine recognizes you.
</p>


<p>
Its creator has returned.
</p>


<p>
With enough power...

you could erase suffering forever.
</p>


<p>
No war.

No grief.

No pain.
</p>


<p>
But nobody would be free.
</p>


`,


choices:[


{


text:"Become the Auctioneer.",

next:"finalDecision",

effects:{

evil:4,

corruption:3,

special:{

controlledAuction:true

}

}

},



{


text:"Reject the power.",

next:"finalDecision"

}



]


};









story.finalDecision = {


text:`

<h2>
THE FINAL MEMORY
</h2>


<p>
The auction waits.
</p>


<p>
Elias waits.
</p>


<p>
The future waits.
</p>


<p>
For once...

the choice belongs entirely to you.
</p>


`,


choices:[


{


text:"Repair the auction.",

next:"ending",

effects:{

good:3,

special:{

rebuiltAuction:true

},

elias:{

trust:3

}

}

},



{


text:"Leave everything behind.",

next:"ending",

effects:{

truth:2

}

},



{


text:"Finish what you started.",

next:"ending",

effects:{

evil:3,

special:{

controlledAuction:true

}

}

}



]


};









story.ending = {


text:`

<h2>
THE LAST MEMORY
</h2>


<p>
The final memory unlocks.
</p>


<p>
Every choice leads here.
</p>


<p>
There is nowhere left to hide.
</p>


`,


choices:[


{


text:"Accept your fate.",

next:null

}



]


};
