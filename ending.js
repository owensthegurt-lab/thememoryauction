/*
    THE MEMORY AUCTION

    ending.js

    Ending Engine
*/





// =====================================
// SHOW ENDING
// =====================================


function showEnding(){


    let endingID =
    calculateEnding();



    unlockEnding(
        endingID
    );



    let ending =
    endings[endingID];



    if(!ending){


        console.error(
            "Missing ending:",
            endingID
        );


        return;


    }




    currentScene=endingID;



    document.getElementById(
        "story"
    ).innerHTML=
    ending.text;



    let choices =
    document.getElementById(
        "choices"
    );



    choices.innerHTML="";



    let button =
    document.createElement("button");



    button.innerHTML=
    "Return to Title";



    button.onclick=()=>{


        location.reload();


    };



    choices.appendChild(button);



}









// =====================================
// ENDING CALCULATOR
// =====================================


function calculateEnding(){



    let s =
    player.stats;



    let sp =
    player.special;



    let e =
    elias;







    // =============================
    // SECRET ENDINGS
    // =============================



    if(

        sp.collectedAllMemories

        &&

        s.truth>=10

    ){

        return "ending_secret_true";

    }






    if(

        s.identity>=10

        &&

        s.truth>=8

    ){

        return "ending_secret_original";

    }







    if(

        e.trust>=8

        &&

        s.good>=8

    ){

        return "ending_elias_friend";

    }







    if(

        e.fear>=8

        &&

        s.evil>=8

    ){

        return "ending_elias_betrayal";

    }







    // =============================
    // HERO
    // =============================




    if(

        sp.destroyedAuction

        &&

        s.good>=8

        &&

        s.truth>=5

    ){

        return "ending_hero_liberator";

    }







    if(

        sp.rebuiltAuction

        &&

        e.trust>=5

    ){

        return "ending_hero_restorer";

    }







    if(

        sp.acceptedBurden

    ){

        return "ending_hero_burden";

    }








    if(

        s.good>=10

    ){

        return "ending_hero_secondChance";

    }







    // =============================
    // EVIL
    // =============================



    if(

        sp.controlledAuction

        &&

        s.evil>=8

    ){

        return "ending_evil_auctioneer";

    }







    if(

        s.corruption>=10

    ){

        return "ending_evil_brokenGod";

    }







    if(

        s.evil>=10

    ){

        return "ending_evil_emperor";

    }







    // =============================
    // NEUTRAL
    // =============================



    if(

        s.truth>=5

        &&

        s.good===s.evil

    ){

        return "ending_neutral_watcher";

    }





    return "ending_neutral_balance";



}









// =====================================
// ENDING DATABASE
// =====================================


const endings={







// =============================
// HERO
// =============================



ending_hero_liberator:{


text:`

<h1>
THE MEMORY LIBERATOR
</h1>


<p>
The auction is destroyed.
</p>


<p>
The world remembers everything.
</p>


<p>
The pain returns.
</p>


<p>
But so does the truth.
</p>


<p>
For the first time...

people are free to heal.
</p>

`

},







ending_hero_restorer:{


text:`

<h1>
THE GENTLE RESTORER
</h1>


<p>
The auction remains.
</p>


<p>
But it changes.
</p>


<p>
No more stolen memories.

No more forced forgetting.
</p>


<p>
People choose what they leave behind.
</p>

`

},







ending_hero_burden:{


text:`

<h1>
THE BURDEN BEARER
</h1>


<p>
Every stolen memory enters you.
</p>


<p>
Every regret.

Every loss.

Every scream.
</p>


<p>
Everyone else is free.
</p>


<p>
But you carry everything.
</p>

`

},







ending_hero_secondChance:{


text:`

<h1>
THE SECOND CHANCE
</h1>


<p>
You forgive yourself.
</p>


<p>
The person who created the disaster...

becomes the person who repairs it.
</p>

`

},







// =============================
// ELIAS
// =============================



ending_elias_friend:{


text:`

<h1>
THE LAST FRIEND
</h1>


<p>
Elias remembers everything.
</p>


<p>
The mistakes.

The damage.

The betrayal.
</p>


<p>
And still...

he stays.
</p>


`

},







ending_elias_betrayal:{


text:`

<h1>
THE FINAL BETRAYAL
</h1>


<p>
The last person who trusted you...

was the first person you sacrificed.
</p>


<p>
Elias was right to be afraid.
</p>

`

},







// =============================
// EVIL
// =============================



ending_evil_auctioneer:{


text:`

<h1>
THE NEW AUCTIONEER
</h1>


<p>
The machine obeys you.
</p>


<p>
The world forgets what you want it to forget.
</p>


<p>
Nobody can oppose someone they cannot remember.
</p>

`

},







ending_evil_emperor:{


text:`

<h1>
THE MEMORY EMPEROR
</h1>


<p>
You rule through memories.
</p>


<p>
Every person becomes a story you can rewrite.
</p>

`

},







ending_evil_brokenGod:{


text:`

<h1>
THE BROKEN GOD
</h1>


<p>
You become the auction itself.
</p>


<p>
A machine that remembers everything...

except who you were.
</p>

`

},







// =============================
// NEUTRAL
// =============================



ending_neutral_watcher:{


text:`

<h1>
THE WATCHER
</h1>


<p>
You leave.
</p>


<p>
The auction continues.
</p>


<p>
Some are saved.

Some are lost.
</p>


<p>
You never learn if you chose correctly.
</p>

`

},







ending_neutral_balance:{


text:`

<h1>
THE BALANCED PATH
</h1>


<p>
You accept that some things cannot be fixed.
</p>


<p>
The auction remains.

So does humanity.
</p>

`

},







// =============================
// SECRET
// =============================



ending_secret_true:{


text:`

<h1>
THE TRUE MEMORY
</h1>


<p>
You found every lost piece.
</p>


<p>
The final memory reveals the truth.
</p>


<p>
The auction was never about forgetting.
</p>


<p>
It was about choosing who you become.
</p>

`

},







ending_secret_original:{


text:`

<h1>
THE ORIGINAL MEMORY
</h1>


<p>
You discover why you erased yourself.
</p>


<p>
The original you was afraid of what you were becoming.
</p>

`

}



};
