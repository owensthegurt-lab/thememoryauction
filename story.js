/*
    THE MEMORY AUCTION
    story.js
*/


const story = {



intro: {


text:`

You wake up.

<br><br>

Not from sleep.

From nothing.

<br><br>

The first thing you notice is the silence.

<br><br>

A room without history.

<br><br>

The walls are covered with hundreds of glass containers.

Inside each one:

<br><br>

A moment.

A feeling.

A memory.

<br><br>

You reach into your own mind...

and find an empty space.

<br><br>

On the table sits a black envelope.

Your name is written on it.

<br><br>

You don't remember writing it.

`,


choices:[


{
text:"Open the envelope",

next:"letter",

effects:{
truth:1
}

},


{
text:"Search the room",

next:"search",

effects:{
identity:1
}

},


{
text:"Leave the room",

next:"hallway",

effects:{
chaos:1
}

}


]


},





letter:{


text:`

Inside the envelope is one piece of paper.

<br><br>

The handwriting is yours.

<br><br>

<i>
"If you are reading this, the procedure worked."
</i>

<br><br>

<i>
"Do not purchase Memory #000."
</i>

<br><br>

<i>
"Do not trust the auctioneer."
</i>

<br><br>

At the bottom:

<br><br>

<i>
"Most importantly..."

</i>

<br><br>

<i>
"Do not trust yourself."
</i>

`,


choices:[


{
text:"Read the hidden writing",

next:"hiddenNote",

effects:{
truth:2
}

},


{
text:"Ignore it and leave",

next:"hallway",

effects:{
chaos:1
}

}


]


},






hiddenNote:{


text:`

You hold the paper near the light.

<br><br>

A second message appears.

<br><br>

"Seven years ago you made a choice."

<br><br>

"You erased the memory."

<br><br>

"You erased yourself."

<br><br>

A date is written below.

<br><br>

The same day the memory auction opened.

`,


choices:[


{
text:"Try to remember",

next:"memoryFlash",

effects:{
identity:2
}

},


{
text:"Find the auction",

next:"hallway",

effects:{
truth:1
}

}


]


},






search:{


text:`

You search the room.

<br><br>

Most containers have names.

People you don't know.

Lives you don't recognize.

<br><br>

One container has no name.

<br><br>

Only a number.

<br><br>

#000

<br><br>

You touch the glass.

<br><br>

A voice whispers:

<br><br>

"Not yet."

`,


choices:[


{
text:"Pull away",

next:"hallway",

effects:{
truth:1
}

},


{
text:"Break the container",

next:"forbiddenAttempt",

effects:{
chaos:2,
corruption:1
}

}


]


},






forbiddenAttempt:{


text:`

The glass cracks.

<br><br>

For a moment you see something.

<br><br>

Your own face.

<br><br>

Covered in blood.

<br><br>

Then the memory disappears.

<br><br>

You feel sick.

<br><br>

Whatever happened...

you were there.

`,


choices:[


{
text:"Leave immediately",

next:"hallway",

effects:{
corruption:1
}

}

]


},






memoryFlash:{


text:`

A memory forces itself through.

<br><br>

A machine.

<br><br>

A warning alarm.

<br><br>

Someone screaming your name.

<br><br>

A man grabbing your arm.

<br><br>

"Don't erase this."

<br><br>

Then darkness.

`,


choices:[


{
text:"Follow the memory",

next:"hallway",

effects:{
truth:1
}

}

]


},






hallway:{


text:`

The door opens.

<br><br>

The hallway outside is endless.

<br><br>

At the end stands a man.

<br><br>

Dark coat.

Tired eyes.

<br><br>

He looks at you like he has been waiting years.

<br><br>

"You finally woke up."

`,


choices:[


{
text:"Ask who he is",

next:"eliasIntro",

effects:{
elias:{
trust:1
}
}

},


{
text:"Ask how he knows you",

next:"eliasIntro",

effects:{
elias:{
truth:1
}
}

},


{
text:"Threaten him",

next:"eliasIntro",

effects:{
evil:1,
elias:{
fear:2
}
}

}


]


},






eliasIntro:{


text:`

The man steps closer.

<br><br>

"My name is Elias."

<br><br>

You wait for something else.

A last name.

An explanation.

Anything.

<br><br>

Nothing comes.

<br><br>

"You don't remember me."

<br><br>

You feel uncomfortable.

<br><br>

Because he sounds hurt.

`,


choices:[


{
text:"Apologize",

next:"eliasTruth",

effects:{
good:1,
elias:{
trust:2
}
}

},


{
text:"Demand answers",

next:"eliasTruth",

effects:{
law:1,
elias:{
fear:1
}
}

},


{
text:"Accuse him of erasing you",

next:"eliasTruth",

effects:{
evil:1,
elias:{
fear:2,
betrayed:true
}
}

}


]


},






eliasTruth:{


text:`

Elias looks away.

<br><br>

"I helped you forget."

<br><br>

The words hurt more than they should.

<br><br>

"But I didn't make you do it."

<br><br>

"You asked me to."

<br><br>

Before you can respond, he opens a hidden door.

<br><br>

Beyond it:

<br><br>

THE MEMORY AUCTION.

`,


choices:[


{
text:"Enter with Elias",

next:"auction",

effects:{
elias:{
trust:1
}
}

},


{
text:"Enter alone",

next:"auction",

effects:{
chaos:1,
elias:{
fear:1
}
}

}


]


},






auction:{


text:`

The auction hall is impossible.

<br><br>

Thousands of memories float behind glass.

<br><br>

A childhood.

A war.

A first kiss.

A murder.

<br><br>

Anything a person wanted to forget...

was here.

<br><br>

The auctioneer looks at you.

<br><br>

Then smiles.

<br><br>

"Welcome back."

`,


choices:[


{
text:"Ask what he means",

next:"auctioneer",

effects:{
truth:2
}

},


{
text:"Look at the memories",

next:"memoryMarket"

}


]


},






auctioneer:{


text:`

The auctioneer laughs.

<br><br>

"You really don't remember."

<br><br>

He looks at Elias.

<br><br>

"How long until you tell him?"

<br><br>

Elias says nothing.

<br><br>

That scares you more.

`,


choices:[


{
text:"Demand the truth",

next:"memoryMarket",

effects:{
truth:2
}

}


]


},






memoryMarket:{


text:`

The auction begins.

<br><br>

Hundreds of memories become available.

<br><br>

Your past is waiting.

<br><br>

But some memories...

<br><br>

were never meant to be found.

`,


choices:[


{
text:"Browse memories",

next:"chapterEnd"

}


]


},






chapterEnd:{


text:`

CHAPTER ONE COMPLETE

<br><br>

You entered the Memory Auction.

<br><br>

You found Elias.

<br><br>

You discovered your past was hidden.

<br><br>

Now you must decide:

<br><br>

Do you want the truth...

or do you want peace?

`,


choices:[]

}



};
