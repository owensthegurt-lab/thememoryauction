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
The auction floor changes.
</p>


<p>
The walls begin showing memories.
</p>


<p>
Not yours.
</p>


<p>
Everyone's.
</p>


<p>
Elias looks at the machine beneath the auction.
</p>


<p>
"This is what you built."
</p>


`,


choices:[


{


text:"Ask what the machine does.",

next:"auctionTruth",

effects:{

truth:2

}

},



{


text:"Ask how to destroy it.",

next:"destroyPlan",

effects:{

good:2

}

},



{


text:"Ask how to control it.",

next:"controlPlan",

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
The auction does not remove pain.
</p>


<p>
It moves it.
</p>


<p>
Every memory taken from someone...

has to go somewhere.
</p>


<p>
The machine stores every lost emotion.
</p>


<p>
Every regret.

Every fear.

Every broken moment.
</p>


<p>
And someone has to carry it.
</p>


`,


choices:[


{


text:"Who carries it?",

next:"playerBurden"


}



]


};









story.playerBurden = {


text:`

<h2>
THE FINAL MEMORY
</h2>


<p>
Elias looks at you.
</p>


<p>
"You did."
</p>


<p>
Every memory stolen.

Every person changed.

</p>


<p>
You carried all of it.
</p>


<p>
That is why you erased yourself.
</p>


<p>
Not because you forgot.

</p>


<p>
Because you couldn't survive remembering.
</p>


`,


choices:[


{


text:"Accept the burden.",

next:"finalChoice",

effects:{

good:3,

truth:3

}

},



{


text:"Reject the burden.",

next:"finalChoice",

effects:{

evil:3,

corruption:2

}

}



]


};









story.destroyPlan = {


text:`

<h2>
BREAK THE MACHINE
</h2>


<p>
The auction can be destroyed.
</p>


<p>
But Elias warns you.
</p>


<p>
"If you destroy it..."

</p>


<p>
"Everyone gets their memories back."
</p>


<p>
"Even the memories they begged to forget."
</p>


<p>
Some people may not survive the truth.
</p>


`,


choices:[


{


text:"Destroy it anyway.",

next:"finalChoice",

effects:{

good:3,

truth:2

}

},



{


text:"Find another way.",

next:"auctionTruth"

}



]


};









story.controlPlan = {


text:`

<h2>
THE NEW AUCTION
</h2>


<p>
The machine responds to you.
</p>


<p>
It recognizes its creator.
</p>


<p>
With control...

you could rewrite anyone's memories.
</p>


<p>
Remove wars.

Remove suffering.

Remove choice.
</p>


<p>
Forever.
</p>


`,


choices:[


{


text:"Take control.",

next:"finalChoice",

effects:{

evil:4,

corruption:3

}

},



{


text:"Walk away.",

next:"finalChoice"

}



]


};









story.finalChoice = {


text:`

<h2>
THE LAST DECISION
</h2>


<p>
The auction waits.
</p>


<p>
Elias waits.
</p>


<p>
The machine waits.
</p>


<p>
For the first time...

the choice is completely yours.
</p>


`,


choices:[


{


text:"Destroy the auction.",

next:"ending",

effects:{

good:5

}

},



{


text:"Become the new auctioneer.",

next:"ending",

effects:{

evil:5

}

},



{


text:"Leave and let it remain.",

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
THE END
</h2>


<p>
The final memory returns.
</p>


<p>
Everything you chose brought you here.
</p>


`,


choices:[


{


text:"See your fate.",

next:null

}



]


};
