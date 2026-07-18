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

        "A childhood memory. A voice calls your name.",



        effects:{

            identity:2,

            good:1

        },


        fake:false,


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


        fake:false,


        unlocked:true


    },





    "003": {


        name:"The Locked Door",

        rarity:"RARE",

        cost:2500,


        description:

        "A door you opened even though someone begged you not to.",



        effects:{

            truth:4,

            corruption:1

        },


        fake:false,


        unlocked:true


    },






    "004": {


        name:"Someone Else's Life",

        rarity:"CORRUPTED",

        cost:900,


        description:

        "A perfect memory. Except it belongs to someone else.",



        effects:{

            corruption:3,

            evil:1

        },


        fake:true,


        unlocked:true


    },







    "005": {


        name:"The Last Conversation",

        rarity:"LEGENDARY",

        cost:7000,


        description:

        "The final conversation before everything went wrong.",



        effects:{

            truth:5,

            identity:3

        },


        fake:false,


        unlocked:false


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


        fake:false,


        unlocked:false


    }



};







// =====================================
// OPEN AUCTION
// =====================================


function openAuction(){


    checkMemoryUnlocks();



    const storyBox =
    document.getElementById("story");


    const choicesBox =
    document.getElementById("choices");



    storyBox.innerHTML = `


    <h2>
    MEMORY AUCTION
    </h2>


    <p>

    Credits:
    ${player.credits}

    </p>


    <p>

    Choose carefully.

    Some memories remember you back.

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



        button.innerHTML = `

        ${memory.name}

        <br>

        ${memory.rarity}

        <br>

        ${memory.cost}
        credits

        `;



        button.onclick=()=>{


            purchaseMemory(id);


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


function purchaseMemory(id){



    let memory =
    memoryDatabase[id];



    if(
        !memory
    )
    return;





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



    checkAchievements();



    updateHUD();




    revealMemory(memory);



}








// =====================================
// MEMORY REVEAL
// =====================================


function revealMemory(memory){



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

        Something feels wrong.

        <br><br>

        This memory was never yours.

        </p>


        `;


    }






    if(
        memory.rarity==="FORBIDDEN"
    ){


        storyBox.innerHTML += `


        <p>

        Your hands are shaking.

        <br><br>

        You remember why you erased this.

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


function checkMemoryUnlocks(){



    // Elias connection


    if(

        elias.trust >=5

        ||

        elias.truth >=3

    ){


        memoryDatabase["005"]
        .unlocked=true;


    }






    // Forbidden Memory


    if(

        player.stats.truth >=8

        &&

        player.stats.identity >=5

    ){


        memoryDatabase["000"]
        .unlocked=true;


    }



}







// =====================================
// MESSAGE
// =====================================


function showAuctionMessage(message){


    alert(message);


}
