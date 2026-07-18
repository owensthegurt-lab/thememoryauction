/*
    THE MEMORY AUCTION

    chapter2.js

    Chapter 2:
    The Man Who Remembered
*/



story.chapter2Start = {


text:`

<h2>
THE MAN WHO REMEMBERED
</h2>


<p>
Elias watches you carefully.
</p>


<p>
"You really don't remember."
</p>


<p>
Not a question.

A fact.
</p>


<p>
"I spent years looking for you."
</p>


<p>
"And now you don't even know why."
</p>


`,



choices:[


{

text:"Ask what happened.",

next:"eliasHistory",

effects:{

truth:2

}

},



{

text:"Ask why he cares.",

next:"eliasConnection",

effects:{

elias:{

trust:2

}

}

},



{

text:"Demand answers.",

next:"eliasPressure",

effects:{

evil:1,

elias:{

fear:2

}

}

}



]


};









story.eliasHistory = {


text:`

<h2>
BEFORE THE AUCTION
</h2>


<p>
"The auction wasn't always like this."
</p>


<p>
Elias looks around.
</p>


<p>
"At first, it was supposed to help people."
</p>


<p>
"Remove painful memories."

"Give people a second chance."
</p>


<p>
Then someone realized memories had value.
</p>


<p>
That person was you.
</p>


`,



choices:[


{

text:"I don't believe you.",

next:"hiddenArchive",

effects:{

truth:2

}

},



{

text:"Show me proof.",

next:"hiddenArchive",

effects:{

identity:2

}

},



{

text:"Maybe I was right.",

next:"acceptAuction",

effects:{

evil:3,

corruption:2

}

}


]


};









story.eliasConnection = {


text:`

<h2>
THE PERSON YOU FORGOT
</h2>


<p>
Elias looks away.
</p>


<p>
"We weren't just partners."
</p>


<p>
"We were friends."
</p>


<p>
"You trusted me."
</p>


<p>
"Then you erased yourself."
</p>


`,



choices:[


{

text:"Why would I do that?",

next:"hiddenArchive",

effects:{

truth:2

}

}



]


};









story.eliasPressure = {


text:`

<h2>
THE WRONG APPROACH
</h2>


<p>
Elias steps back.
</p>


<p>
For a moment...

he looks afraid.
</p>


<p>
Not of what you might do.

</p>


<p>
Of what you already did.
</p>


`,



choices:[


{

text:"Calm down.",

next:"hiddenArchive"

},



{

text:"Make him talk.",

next:"hiddenArchive",

effects:{

elias:{

fear:2

}

}

}



]


};









story.hiddenArchive = {


text:`

<h2>
THE HIDDEN ARCHIVE
</h2>


<p>
Elias leads you below the auction floor.
</p>


<p>
Behind a locked door are thousands of memories.
</p>


<p>
Not forgotten memories.
</p>


<p>
Stolen memories.
</p>


<p>
At the center sits a file.
</p>


<p>
Your name is written on it.
</p>


`,



choices:[


{

text:"Open the file.",

next:"playerTruth",

effects:{

truth:3

}

},



{

text:"Destroy the file.",

next:"destroyTruth",

effects:{

corruption:2

}

}



]


};









story.playerTruth = {


text:`

<h2>
THE MEMORY RETURNS
</h2>


<p>
You remember.
</p>


<p>
You and Elias built the auction.
</p>


<p>
You convinced yourself you were helping people.
</p>


<p>
But eventually...

</p>


<p>
You stopped asking for permission.
</p>


<p>
You started taking memories.
</p>


`,



choices:[


{

text:"Accept responsibility.",

next:"chapter3Start",

effects:{

good:3,

truth:3,

elias:{

trust:2

}

}

},



{

text:"It wasn't my fault.",

next:"chapter3Start",

effects:{

corruption:2

}

}



]


};









story.destroyTruth = {


text:`

<h2>
THE EASY CHOICE
</h2>


<p>
The file burns.
</p>


<p>
The memory disappears.
</p>


<p>
For a moment...

you feel peaceful.
</p>


<p>
Then you realize something.
</p>


<p>
You just erased the truth again.
</p>


`,



choices:[


{

text:"Continue.",

next:"chapter3Start",

effects:{

corruption:3

}

}



]


};









story.acceptAuction = {


text:`

<h2>
THE AUCTION CALLS
</h2>


<p>
The auction responds.
</p>


<p>
The lights flicker.
</p>


<p>
It remembers you.
</p>


<p>
"Welcome back."
</p>


`,



choices:[


{

text:"Continue.",

next:"chapter3Start"

}


]


};
