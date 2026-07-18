/*
    THE MEMORY AUCTION
    story.js
*/


const story = {


intro: {

text: `
You wake up.

Not from sleep.

From nothing.

<br><br>

The first thing you notice is the silence.

Not peaceful silence.

The kind of silence that feels like something is missing.

<br><br>

You are lying in a white room.

The walls are covered with hundreds of glass containers.

Inside every container is a glowing fragment of something.

A laugh.

A face.

A moment.

A memory.

<br><br>

You reach for your own past...

and find an empty space.

<br><br>

On the table beside you is a small black envelope.

Your name is written on it.

You don't remember your name.

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
next:"searchRoom",
effects:{
identity:1
}
},

{
text:"Leave immediately",
next:"hallway",
effects:{
chaos:1
}
}

]

},



letter: {

text:`

Inside the envelope is a single piece of paper.

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
"Do not ask why."
</i>

<br><br>

At the bottom:

<br><br>

<i>
"Trust yourself less than anyone else."
</i>

`,

choices:[

{
text:"Read the back",
next:"letterBack",
effects:{
truth:1
}
},

{
text:"Ignore the note",
next:"hallway",
effects:{
chaos:1
}
}

]

},



letterBack: {

text:`

The back contains a date.

<br><br>

Seven years ago.

<br><br>

Below it:

<br><br>

MEMORY PURCHASE:
#000

<br><br>

BUYER:
YOU

<br><br>

You purchased a memory.

Then you erased it.

<br><br>

Why would someone erase their own memory?

`,

choices:[

{
text:"Try to remember",
next:"memoryFlash",
effects:{
identity:1
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



searchRoom: {

text:`

You search the room.

Most containers are labeled with names you don't recognize.

<br><br>

One container is different.

<br><br>

It has no name.

Only a number.

<br><br>

#000

<br><br>

You reach toward it.

The glass cracks.

<br><br>

A voice whispers:

<br><br>

"Not yet."

`,

choices:[

{
text:"Pull your hand away",
next:"hallway",
effects:{
truth:1
}
}

]

},



memoryFlash: {

text:`

For a second...

you remember.

<br><br>

A crowded room.

A machine.

Someone shouting.

<br><br>

A man grabbing your shoulder.

<br><br>

"Don't do this."

<br><br>

Then everything disappears.

<br><br>

You wake up on the floor.

<br><br>

Someone else has been here.

Recently.

`,

choices:[

{
text:"Leave the room",
next:"hallway",
effects:{
identity:1
}
}

]

},



hallway: {

text:`

The door opens.

<br><br>

A long hallway stretches ahead.

At the end stands a man wearing a dark coat.

<br><br>

He looks at you.

Not surprised.

Not afraid.

Relieved.

<br><br>

"You finally woke up."

<br><br>

You don't recognize him.

But something inside you does.

`,

choices:[

{
text:"Ask who he is",
next:"elias",
effects:{
truth:1
}
},

{
text:"Ask how he knows you",
next:"elias",
effects:{
suspicion:1
}
}

]

},



elias: {

text:`

The man approaches slowly.

<br><br>

"My name is Elias."

<br><br>

He studies your face.

<br><br>

"You don't remember me."

<br><br>

It isn't a question.

<br><br>

You ask:

<br><br>

"Should I?"

<br><br>

Elias looks away.

<br><br>

"That's the problem."

`,

choices:[

{
text:"Ask what happened",
next:"auctionEntrance",
effects:{
truth:1
}
},

{
text:"Ask if he erased your memories",
next:"auctionEntrance",
effects:{
corruption:1
}
}

]

},



auctionEntrance: {

text:`

Elias leads you through the building.

<br><br>

The walls slowly change.

The white clinic disappears.

The hallway becomes something older.

Something hidden.

<br><br>

A massive door opens.

<br><br>

Beyond it:

<br><br>

THE MEMORY AUCTION.

<br><br>

Thousands of memories wait behind glass.

<br><br>

Elias whispers:

<br><br>

"Whatever you do..."

<br><br>

"Do not buy back your past."

`,

choices:[

{
text:"Enter the auction",
next:"auction",
effects:{
truth:1
}
}

]

},



auction: {

text:`

The auction hall is silent.

Too silent.

<br><br>

The auctioneer looks at you.

<br><br>

Then smiles.

<br><br>

"Welcome back."

<br><br>

You freeze.

<br><br>

"I've never been here."

<br><br>

The auctioneer laughs softly.

<br><br>

"That's what you said last time."

`,

choices:[

{
text:"Continue",
next:"chapterEnd"
}

]

},



chapterEnd: {

text:`

CHAPTER ONE COMPLETE

<br><br>

The auction has begun.

<br><br>

Your memories are waiting.

<br><br>

The question is:

<br><br>

Are they yours?

`,

choices:[]

}



};
