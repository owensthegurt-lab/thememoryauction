/*
    THE MEMORY AUCTION
    auction.js

    Memory Marketplace System
*/


// =====================================
// MEMORY DATABASE
// =====================================


const memoryDatabase = {


    "001": {

        name:"The First Day",

        rarity:"COMMON",

        cost:500,

        description:
        "A childhood memory. A forgotten voice calls your name.",


        effects:{

            identity:2,

            good:1

        },


        unlocked:true

    },



    "002": {

        name:"The Hospital Room",

        rarity:"UNCOMMON",

        cost:1200,

        description:
        "A conversation you remember having, but nobody else does.",


        effects:{

            truth:3

        },


        unlocked:true

    },



    "003": {

        name:"The Locked Door",

        rarity:"RARE",

        cost:2500,

        description:
        "You stand outside a door that should never have opened.",


        effects:{

            truth:4,

            corruption:1

        },


        unlocked:true

    },



    "004": {

        name:"Someone Else's Life",

        rarity:"CORRUPTED",

        cost:900,

        description:
        "A memory that feels like yours. It isn't.",


        effects:{

            corruption:3

        },


        fake:true,


        unlocked:true

    },



    "005": {

        name:"The Last Conversation",

        rarity:"LEGENDARY",

        cost:7000,

        description:
        "Someone begs you not to make the choice you already made.",


        effects:{

            truth:5,

            identity:3

        },


        unlocked:true

    },



    "000": {

        name:"The Forbidden Memory",

        rarity:"FORBIDDEN",

        cost:99999,

        description:
        "The memory you erased yourself.",


        effects:{

            truth:10,

            identity:10,

            corruption:5

        },


        unlocked:false

    }


};





// =====================================
// OPEN AUCTION
// =====================================


function openAuction(){


    unlockAuctionMemories();



    const storyBox =
    document.getElementById("story");


    const choicesBox =
    document.getElementById("choices");



    storyBox.innerHTML = `


    <h2>
    THE MEMORY AUCTION
    </h2>


    <p>

    Credits:
    ${player.credits}

    </p>


    <p>

    Every memory has a price.

    Some prices are not paid with money.

    </p>


    `;



    choicesBox.innerHTML="";



    Object.keys(memoryDatabase)
    .forEach(id=>{


        let memory =
        memoryDatabase[id];



        if(
            !memory.unlocked
        )
        return;



        let button =
        document.createElement("button");



        button.innerHTML=`

        ${memory.name}

        <br>

        <small>

        ${memory.rarity}

        -

        ${memory.cost} credits

        </small>

        `;



        button.onclick=()=>{


            buyMemory(id);


        };



        choicesBox.appendChild(button);


    });



    let leave =
    document.createElement("button");


    leave.innerText =
    "Leave Auction";


    leave.onclick=()=>{


        loadScene(
        currentScene
        );


    };


    choicesBox.appendChild(leave);



}





// =====================================
// PURCHASE MEMORY
// =====================================


function buyMemory(id){


    let memory =
    memoryDatabase[id];



    if(
        player.memories.includes(id)
    ){


        showAuctionMessage(
        "You already own this memory."
        );


        return;


    }



    if(
        player.credits <
        memory.cost
    ){


        showAuctionMessage(
        "You cannot afford this memory."
        );


        return;


    }



    player.credits -=
    memory.cost;



    player.memories.push(id);



    applyEffects(
        memory.effects
    );



    unlockAchievement(
        "firstMemory"
    );



    if(
        memory.fake
    ){


        unlockAchievement(
        "corruptionPath"
        );


    }



    showMemoryReveal(
        memory
    );


}





// =====================================
// MEMORY REVEAL
// =====================================


function showMemoryReveal(memory){


    const storyBox =
    document.getElementById("story");


    const choicesBox =
    document.getElementById("choices");



    storyBox.innerHTML = `


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


        storyBox.innerHTML += `


        <p>

        Something is wrong.

        <br><br>

        This memory does not belong to you.

        </p>


        `;


    }



    choicesBox.innerHTML="";



    let button =
    document.createElement("button");


    button.innerText =
    "Return to Auction";


    button.onclick=()=>{


        openAuction();


    };


    choicesBox.appendChild(button);



}





// =====================================
// SECRET UNLOCKS
// =====================================


function unlockAuctionMemories(){



    // Memory 000


    if(

        player.stats.truth >=8

        &&

        player.stats.identity >=5

    ){


        memoryDatabase["000"]
        .unlocked=true;


    }



    // Elias path unlock


    if(

        elias.trust >=5

    ){


        memoryDatabase["005"]
        .unlocked=true;


    }



}





// =====================================
// MESSAGE
// =====================================


function showAuctionMessage(message){


    alert(message);


}
