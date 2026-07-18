/*
    THE MEMORY AUCTION

    achievements.js

    Achievement System
*/



// =====================================
// ACHIEVEMENT DATABASE
// =====================================


const achievements = {


    firstFragment: {

        name:"The First Fragment",

        description:
        "Recovered your first memory.",

        unlocked:false,

        hidden:false

    },



    forbiddenMemory: {

        name:"Do Not Remember",

        description:
        "Recovered Memory #000.",

        unlocked:false,

        hidden:true

    },



    familiarStranger: {

        name:"A Familiar Stranger",

        description:
        "Met Elias again.",

        unlocked:false,

        hidden:false

    },



    trustedElias: {

        name:"Someone Still Remembers",

        description:
        "Earned Elias' trust.",

        unlocked:false,

        hidden:false

    },



    fearedElias: {

        name:"The Look In His Eyes",

        description:
        "Made Elias afraid of you.",

        unlocked:false,

        hidden:false

    },



    truthSeeker: {

        name:"The Truth Hurts",

        description:
        "Chose truth over comfort.",

        unlocked:false,

        hidden:false

    },



    memoryCollector: {

        name:"Collector",

        description:
        "Collected five memories.",

        unlocked:false,

        hidden:false

    },



    corruptedMemory: {

        name:"A Beautiful Lie",

        description:
        "Accepted a false memory.",

        unlocked:false,

        hidden:false

    },



    auctionOwner: {

        name:"The New Owner",

        description:
        "Discovered your connection to the auction.",

        unlocked:false,

        hidden:true

    },



    forgottenHero: {

        name:"Nobody Remembers",

        description:
        "Saved everyone at the cost of yourself.",

        unlocked:false,

        hidden:true

    }


};





// =====================================
// UNLOCK FUNCTION
// =====================================


function unlockAchievement(id){


    let achievement =
    achievements[id];



    if(
        !achievement
    )
    return;



    if(
        achievement.unlocked
    )
    return;



    achievement.unlocked=true;



    showAchievementPopup(
        achievement
    );



}







// =====================================
// CHECK ALL ACHIEVEMENTS
// =====================================


function checkAchievements(){



    // First memory

    if(
        player.memories.length >=1
    ){

        unlockAchievement(
            "firstFragment"
        );

    }




    // Elias met

    if(
        elias.trust > 0
        ||
        elias.fear >0
    ){

        unlockAchievement(
            "familiarStranger"
        );

    }





    // Elias trust

    if(
        elias.trust >=5
    ){

        unlockAchievement(
            "trustedElias"
        );

    }





    // Elias fear

    if(
        elias.fear >=5
    ){

        unlockAchievement(
            "fearedElias"
        );

    }





    // Truth

    if(
        player.stats.truth >=5
    ){

        unlockAchievement(
            "truthSeeker"
        );

    }





    // Collector

    if(
        player.memories.length >=5
    ){

        unlockAchievement(
            "memoryCollector"
        );

    }





    // Corrupted memory

    if(
        hasCorruptedMemory()
    ){

        unlockAchievement(
            "corruptedMemory"
        );

    }





    // Forbidden memory

    if(
        player.memories.includes("000")
    ){

        unlockAchievement(
            "forbiddenMemory"
        );

    }




}






// =====================================
// MEMORY CHECK
// =====================================


function hasCorruptedMemory(){


    for(
        let id of player.memories
    ){


        let memory =
        memoryDatabase[id];



        if(
            memory
            &&
            memory.fake
        ){

            return true;

        }


    }



    return false;


}






// =====================================
// ACHIEVEMENT PAGE
// =====================================


function openAchievements(){



    const storyBox =
    document.getElementById("story");


    const choicesBox =
    document.getElementById("choices");



    storyBox.innerHTML=`

    <h2>
    MEMORY ARCHIVE
    </h2>

    `;



    let unlocked=0;



    Object.keys(achievements)
    .forEach(id=>{


        let a =
        achievements[id];



        if(
            a.unlocked
        ){

            unlocked++;



            storyBox.innerHTML += `


            <div class="memoryCard">

            <h3>
            ◆ ${a.name}
            </h3>


            <p>
            ${a.description}
            </p>


            </div>


            `;


        }



        else if(
            !a.hidden
        ){


            storyBox.innerHTML += `


            <div class="memoryCard">


            <h3>
            Locked
            </h3>


            <p>
            Unknown memory
            </p>


            </div>


            `;


        }



    });





    storyBox.innerHTML += `


    <br>

    Progress:

    ${unlocked}

    /

    ${Object.keys(achievements).length}


    `;





    choicesBox.innerHTML="";



    let button =
    document.createElement("button");



    button.innerText =
    "Return";



    button.onclick=()=>{


        loadScene(
            currentScene
        );


    };



    choicesBox.appendChild(button);



}






// =====================================
// POPUP
// =====================================


function showAchievementPopup(a){


    console.log(

        "Achievement Unlocked:",

        a.name

    );



}
