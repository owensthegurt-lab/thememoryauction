/*
    THE MEMORY AUCTION
    ending.js

    Ending Calculation System
*/



// =====================================
// ENDING DATABASE
// =====================================


const endings = {



    // ==========================
    // HERO ENDINGS
    // ==========================


    eliasForgiven: {


        title:
        "The Last Guardian",


        text:`

        You finally remember everything.

        <br><br>

        You were not a victim.

        You were the person who started this.

        <br><br>

        But Elias stayed.

        Even after knowing the truth.

        <br><br>

        "I don't forgive what you did."

        <br><br>

        "I forgive what you choose now."

        <br><br>

        The auction burns behind you.

        <br><br>

        The memories are free.

        `,


        requirement:{

            good:5,

            truth:8

        }


    },





    // ==========================
    // BITTERSWEET
    // ==========================


    forgottenHero:{


        title:

        "The Person Nobody Remembers",



        text:`

        You saved everyone.

        <br><br>

        You destroyed the auction.

        <br><br>

        You returned every stolen memory.

        <br><br>

        Except yours.

        <br><br>

        The world remembers what you did.

        <br><br>

        Nobody remembers who did it.

        <br><br>

        Not even you.

        `,


        requirement:{

            good:7,

            corruption:0

        }


    },





    // ==========================
    // EVIL
    // ==========================


    auctionMaster:{


        title:

        "The New Auctioneer",



        text:`

        You finally understand.

        <br><br>

        Memories are not a curse.

        They are currency.

        <br><br>

        People will pay anything

        to forget their pain.

        <br><br>

        And you will be there.

        Waiting.

        <br><br>

        The auction continues.

        <br><br>

        But now...

        you own it.

        `,


        requirement:{

            evil:8,

            corruption:5

        }


    },





    // ==========================
    // ELIAS BETRAYAL
    // ==========================


    eliasBetrayal:{


        title:

        "The Man Who Remembered",



        text:`

        Elias trusted you.

        <br><br>

        You used that trust.

        <br><br>

        When he finally remembered everything,

        he understood.

        <br><br>

        The worst thing you did

        was not erasing your memory.

        <br><br>

        It was convincing him to help.

        <br><br>

        Elias leaves.

        <br><br>

        This time...

        he doesn't come back.

        `,


        requirement:{

            evil:5,

            fear:5

        }


    },





    // ==========================
    // TRUE NEUTRAL
    // ==========================


    memoryWanderer:{


        title:

        "The Forgotten Witness",



        text:`

        You never chose good.

        You never chose evil.

        <br><br>

        You only wanted the truth.

        <br><br>

        And the truth was worse

        than any lie.

        <br><br>

        The auction disappears.

        <br><br>

        You disappear with it.

        `,


        requirement:{

            truth:7

        }


    }


};





// =====================================
// CHECK ENDINGS
// =====================================


function getEnding(){


    let possible=[];



    for(
        let id in endings
    ){



        let ending =
        endings[id];



        if(
            checkEndingRequirement(
                ending.requirement
            )
        ){


            possible.push(id);


        }


    }




    if(
        possible.length===0
    ){


        return "memoryWanderer";


    }




    // highest priority first


    return possible[
        possible.length-1
    ];



}







// =====================================
// REQUIREMENTS
// =====================================


function checkEndingRequirement(req){


    for(
        let stat in req
    ){



        let amount =
        req[stat];



        if(
            player.stats[stat]
            !==undefined
        ){


            if(
                player.stats[stat]
                <
                amount
            ){

                return false;

            }


        }



        else if(
            elias[stat]
            !==undefined
        ){


            if(
                elias[stat]
                <
                amount
            ){

                return false;

            }


        }


    }



    return true;


}






// =====================================
// DISPLAY ENDING
// =====================================


function showEnding(){



    let endingID =
    getEnding();



    let ending =
    endings[endingID];



    const storyBox =
    document.getElementById("story");


    const choicesBox =
    document.getElementById("choices");



    storyBox.innerHTML=`


    <h1>

    ${ending.title}

    </h1>


    <p>

    ${ending.text}

    </p>


    `;



    choicesBox.innerHTML="";


}
