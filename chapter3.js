/*
    THE MEMORY AUCTION

    chapter3.js

    Chapter 3:
    The Truth Behind The Auction
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
Thousands of lives.

Thousands of regrets.

Thousands of choices.
</p>


<p>
Elias stands beside the machine beneath the floor.
</p>


<p>
"This is what you created."
</p>


`,



choices:[


{

text:"Ask what the machine really does.",

next:"auctionTruth",

effects:{

truth:2

}

},



{

text:"Ask how to destroy it.",

next:"destroyAuction",

effects:{

good:2

}

},



{

text:"Ask how to control it.",

next:"controlAuction",

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
The auction never erased pain.
</p>


<p>
It moved it.
</p>


<p>
Every memory removed from someone...

was stored here.
</p>


<p>
Every regret.

Every fear.

Every moment someone wanted to escape.
</p>


<p>
And someone had to carry all of it.
</p>


`,


choices:[


{

text:"Who carried it?",

next:"memoryBurden"

}


]


};









story.memoryBurden = {


text:`

<h2>
THE LOST YEARS
</h2>


<p>
Elias looks at you.
</p>


<p>
"You did."
</p>


<p>
Every memory.

Every scream.

Every person you saved and destroyed.
</p>


<p>
You carried them all.
</p>


<p>
That is why you erased yourself.
</p>


<p>
You weren't running from the truth.

You were running from the weight.
</p>


`,


choices:[


{

text:"Accept the burden.",

next:"finalDecision",

effects:{

good:3,

truth:3,

elias:{

trust:2

}

}

},



{

text:"Reject the burden.",

next:"finalDecision",

effects:{

evil:3,

corruption:3

}

}



]


};









story.destroyAuction = {


text:`

<h2>
THE END OF THE AUCTION
</h2>


<p>
The machine can be destroyed.
</p>


<p>
But Elias warns you.
</p>


<p>
"If it breaks..."

</p>


<p>
"Every stolen memory returns."
</p>


<p>
The world will remember everything.
</p>


<p>
Even the things people begged to forget.
</p>


`,


choices:[


{

text:"Destroy it anyway.",

next:"finalDecision",

effects:{

good:4,

truth:2

}

},



{

text:"Find another solution.",

next:"auctionTruth"

}



]


};









story.controlAuction = {


text:`

<h2>
THE PERFECT WORLD
</h2>


<p>
The auction recognizes you.
</p>


<p>
The creator has returned.
</p>


<p>
With control over the machine...

you could remove every painful memory.
</p>


<p>
No war.

No hatred.

No suffering.
</p>


<p>
But also...

no choice.
</p>


`,


choices:[


{

text:"Take control.",

next:"finalDecision",

effects:{

evil:5,

corruption:3

}

},



{

text:"Refuse the power.",

next:"finalDecision"

}



]


};









story.finalDecision = {


text:`

<h2>
THE LAST CHOICE
</h2>


<p>
The auction falls silent.
</p>


<p>
Elias watches you.
</p>


<p>
The machine waits.
</p>


<p>
For the first time...

the future belongs only to you.
</p>


`,


choices:[


{

text:"Destroy the Memory Auction.",

next:"ending",

effects:{

good:5

}

},



{

text:"Become the new Auctioneer.",

next:"ending",

effects:{

evil:5

}

},



{

text:"Leave the auction behind.",

next:"ending",

effects:{

truth:3

}

}



]


};









story.ending = {


text:`

<h2>
THE FINAL MEMORY
</h2>


<p>
The last memory unlocks.
</p>


<p>
Everything you did.

Everything you lost.

Everything you became.
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
