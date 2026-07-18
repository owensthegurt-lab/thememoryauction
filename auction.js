/*
    THE MEMORY AUCTION
    auction.js

    Memory marketplace system
*/


// =========================
// MEMORY DATABASE
// =========================


const memoryDatabase = {


    memory001: {

        id:"001",

        name:"The First Day",

        description:
        "A childhood memory. A schoolyard. Someone calling your name.",

        cost:500,

        rarity:"Common",

        danger:false,

        fake:false,


        effects:{

            identity:2,

            truth:1

        }

    },



    memory002: {

        id:"002",

        name:"The Hospital Room",

        description:
        "A memory of a conversation you cannot remember having.",

        cost:1200,

        rarity:"Uncommon",

        danger:false,

        fake:false,


        effects:{

            truth:3,

            identity:1

        }

    },



    memory003: {

        id:"003",

        name:"The Locked Door",

        description:
        "You stand outside a door you were never supposed to open.",

        cost:2000,

        rarity:"Rare",

        danger:true,

        fake:false,


        effects:{

            truth:3,

            corruption:1

        }

    },



    memory004: {

        id:"004",

        name:"Someone Else's Life",

        description:
        "A memory that feels familiar. But it does not belong to you.",

        cost:800,

        rarity:"Unknown",

        danger:false,

        fake:true,


        effects:{

            corruption:3

        }

    },



    memory005: {

        id:"005",

        name:"The Last Conversation",

        description:
        "A conversation with someone who knows what you became.",

        cost:5000,

        rarity:"Legendary",

        danger:true,

        fake:false,


        effects:{

            truth:5,

            identity:3,

            corruption:2

        }

    },



    memory000: {

        id:"000",

        name:"The Forbidden Memory",

        description:
        "The memory you erased yourself.",

        cost:99999,

        rarity:"FORBIDDEN",

        danger:true,

        fake:false,


        effects:{

            truth:10,

            identity:10,

            corruption:5

        }

    }


};



// =========================
// OPEN AUCTION
// =========================


function openAuction(){


    const story =
    document.getElementById("story");


    const choices =
    document.getElementById("choices");



    story.innerHTML = `

    <h2>THE MEMORY AUCTION</h2>

    <p>
    Available memories appear before you.
    </p>

    <p>
    Credits:
    ${player.credits}
    </p>

    `;



    choices.innerHTML="";



    Object.keys(memoryDatabase)
    .forEach(key=>{


        let memory =
        memoryDatabase[key];



        let button =
        document.createElement("button");



        button.innerHTML = `

        ${memory.name}

        <br>

        <small>

        ${memory.cost} credits

        </small>

        `;



        button.onclick=()=>{


            purchaseMemory(
                key
            );


        };



        choices.appendChild(button);



    });



}



// =========================
// BUY MEMORY
// =========================


function purchaseMemory(id){


    const memory =
    memoryDatabase[id];



    if(
        player.memories.includes(id)
    ){

        alert(
        "You already own this memory."
        );

        return;

    }



    if(
        player.credits <
        memory.cost
    ){


        alert(
        "Not enough credits."
        );


        return;


    }



    player.credits -=
    memory.cost;



    player.memories.push(id);



    applyEffects(
        memory.effects
    );



    showMemory(memory);



}



// =========================
// MEMORY REVEAL
// =========================


function showMemory(memory){


    const story =
    document.getElementById("story");


    const choices =
    document.getElementById("choices");



    story.innerHTML = `

    <h2>
    MEMORY RESTORED
    </h2>


    <h3>
    ${memory.name}
    </h3>


    <p>
    ${memory.description}
    </p>


    `;



    if(memory.fake){


        story.innerHTML += `

        <p>
        Something feels wrong.

        <br><br>

        This memory belongs to someone else.

        </p>

        `;


    }



    if(memory.danger){


        story.innerHTML += `

        <p>

        Your body reacts before your mind does.

        <br><br>

        You were afraid of this memory.

        </p>

        `;


    }



    choices.innerHTML="";



    let button =
    document.createElement("button");



    button.innerText =
    "Return to auction";



    button.onclick=()=>{


        openAuction();


    };



    choices.appendChild(button);



}



// =========================
// CHECK MEMORY
// =========================


function hasMemory(id){


    return player.memories.includes(id);


}



// =========================
// SECRET MEMORY UNLOCKS
// =========================


function unlockForbiddenMemory(){


    if(

        player.stats.truth >= 8

        &&

        player.stats.identity >= 5

    ){


        memoryDatabase.memory000.cost =
        0;


        memoryDatabase.memory000.description =

        "The memory is waiting for you.";



    }


}
