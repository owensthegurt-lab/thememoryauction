/*
    THE MEMORY AUCTION

    ending.js

    Ending Judgment System
*/



// =====================================
// ENDING DATABASE
// =====================================


const endings = {


    // =================================
    // SECRET HERO ENDING
    // =================================


    lastGuardian:{


        title:
        "The Last Guardian",


        priority:100,


        requirements:{


            truth:8,

            good:6,


            achievement:
            "trustedElias"


        },


        text:`

        You remember everything.

        <br><br>

        Every stolen memory.

        Every person you hurt.

        Every lie you told yourself.

        <br><br>

        Elias stands beside you.

        Not because he forgot.

        Because he remembered.

        <br><br>

        Together, you destroy the auction.

        <br><br>

        The world gets its memories back.

        <br><br>

        But you keep yours.

        Every single one.

        `


    },





    // =================================
    // BITTERSWEET HERO
    // =================================


    forgottenHero:{


        title:
        "The Person Nobody Remembers",


        priority:90,


        requirements:{


            good:8,

            corruption:0


        },


        text:`

        You saved everyone.

        <br><br>

        The auction disappears.

        The stolen memories return.

        <br><br>

        But the final memory was yours.

        <br><br>

        The price of saving everyone...

        was yourself.

        <br><br>

        The world remembers the miracle.

        <br><br>

        Nobody remembers the person who made it happen.

        `


    },







    // =================================
    // ELIAS BETRAYAL
    // =================================


    brokenTrust:{


        title:
        "The Man Who Remembered",


        priority:85,


        requirements:{


            evil:5,

            fear:5


        },


        text:`

        Elias trusted you.

        <br><br>

        That was his mistake.

        <br><br>

        He spent years searching for the truth.

        <br><br>

        When he finally found it...

        he wished he hadn't.

        <br><br>

        You didn't erase your memory because you forgot.

        <br><br>

        You erased it because you knew.

        `


    },







    // =================================
    // EVIL ENDING
    // =================================


    auctionMaster:{


        title:
        "The New Auctioneer",


        priority:80,


        requirements:{


            evil:8,

            corruption:5


        },


        text:`

        You finally understand the auction.

        <br><br>

        Memories are not sacred.

        They are valuable.

        <br><br>

        People will pay anything to forget.

        <br><br>

        You simply provide the service.

        <br><br>

        The old auctioneer is gone.

        <br><br>

        The new one has arrived.

        `


    },







    // =================================
    // CORRUPTION ENDING
    // =================================


    beautifulLie:{


        title:
        "A Beautiful Lie",


        priority:70,


        requirements:{


            corruption:8


        },


        text:`

        The memories are fake.

        <br><br>

        You know that.

        <br><br>

        But they are better than reality.

        <br><br>

        Eventually you stop asking:

        "Is this real?"

        <br><br>

        You only ask:

        "Does it hurt?"

        <br><br>

        And the answer is no.

        `


    },







    // =================================
    // TRUTH ENDING
    // =================================


    truthSeeker:{


        title:
        "The Forgotten Witness",


        priority:50,


        requirements:{


            truth:7


        },


        text:`

        You found the truth.

        <br><br>

        It was not justice.

        It was not revenge.

        <br><br>

        It was simply the truth.

        <br><br>

        The auction disappears.

        <br><br>

        But the memories remain.

        <br><br>

        Someone has to remember.

        <br><br>

        So you do.

        `


    },







    // =================================
    // DEFAULT
    // =================================


    emptyMemory:{


        title:
        "The Empty Memory",


        priority:0,


        requirements:{},


        text:`

        The auction closes.

        <br><br>

        You walk away.

        <br><br>

        Not healed.

        Not broken.

        <br><br>

        Just different.

        <br><br>

        Somewhere deep inside...

        a memory waits.

        `


    }



};







// =====================================
// GET BEST ENDING
// =====================================


function getEnding(){


    let possible=[];



    for(
        let id in endings
    ){


        let ending =
        endings[id];



        if(
            checkEndingRequirements(
                ending.requirements
            )
        ){


            possible.push(ending);


        }


    }





    possible.sort(

        (a,b)=>

        b.priority-a.priority

    );



    return possible[0];


}








// =====================================
// REQUIREMENT CHECK
// =====================================


function checkEndingRequirements(req){


    for(
        let key in req
    ){


        let value =
        req[key];



        if(
            key==="achievement"
        ){


            if(

                !achievements[value]

                ||

                !achievements[value].unlocked

            ){


                return false;


            }


            continue;


        }





        if(
            player.stats[key]
            !==undefined
        ){


            if(
                player.stats[key]
                <
                value
            ){

                return false;

            }


            continue;


        }





        if(
            elias[key]
            !==undefined
        ){


            if(
                elias[key]
                <
                value
            ){

                return false;

            }


        }


    }



    return true;


}







// =====================================
// SHOW ENDING
// =====================================


function showEnding(){



    let ending =
    getEnding();



    const storyBox =
    document.getElementById("story");


    const choicesBox =
    document.getElementById("choices");



    storyBox.innerHTML = `


    <h1>

    ${ending.title}

    </h1>


    <p>

    ${ending.text}

    </p>


    `;



    choicesBox.innerHTML="";



}
