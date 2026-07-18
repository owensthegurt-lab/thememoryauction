/*
    THE MEMORY AUCTION
    Elias System
*/


// =========================
// ELIAS DATA
// =========================


const elias = {


    trust:0,

    fear:0,

    truth:0,


    alive:true,


    remembers:false,


    betrayed:false



};



// =========================
// CHANGE RELATIONSHIP
// =========================


function changeElias(amounts){


    if(!amounts)
    return;



    Object.keys(amounts)
    .forEach(stat=>{


        if(
            elias[stat]
            !== undefined
        ){

            elias[stat]
            += amounts[stat];


        }


    });


}



// =========================
// ELIAS RESPONSES
// =========================


function getEliasMood(){


    if(elias.trust >= 5){


        return "Elias trusts you. He believes you can change.";


    }



    if(elias.fear >= 5){


        return "Elias is afraid of what you might become.";


    }



    if(elias.betrayed){


        return "Elias has stopped believing in you.";


    }



    return "Elias watches you carefully.";

}



// =========================
// ELIAS MEMORY CHECK
// =========================


function unlockEliasMemory(){


    if(

        player.stats.truth >= 5

        &&

        elias.trust >= 3

    ){


        elias.remembers = true;


        return true;


    }



    return false;


}



// =========================
// ELIAS ENDING FLAGS
// =========================


function checkEliasEnding(){



    // Redemption

    if(

        elias.trust >= 8

        &&

        player.stats.good >
        player.stats.evil

    ){


        return "eliasForgiven";


    }



    // Betrayal

    if(

        elias.fear >= 8

        ||

        elias.betrayed

    ){


        return "eliasBetrayal";


    }



    // Neutral

    return "eliasUnknown";


}
