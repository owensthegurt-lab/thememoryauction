/*
    THE MEMORY AUCTION
    Achievement System
*/


const achievements = {


    firstMemory: {

        name:"The First Fragment",

        description:
        "Recovered your first memory.",

        unlocked:false

    },


    forbiddenTouch: {

        name:"Do Not Open",

        description:
        "Touched Memory #000.",

        unlocked:false

    },


    metElias: {

        name:"A Familiar Stranger",

        description:
        "Met Elias again.",

        unlocked:false

    },


    trustedElias: {

        name:"Someone Still Remembers",

        description:
        "Built trust with Elias.",

        unlocked:false

    },


    fearedElias: {

        name:"The Look In His Eyes",

        description:
        "Made Elias afraid of you.",

        unlocked:false

    },


    truthSeeker: {

        name:"The Truth Hurts",

        description:
        "Chose the truth over comfort.",

        unlocked:false

    },


    memoryCollector: {

        name:"The Collector",

        description:
        "Purchased multiple memories.",

        unlocked:false

    },


    corruptionPath: {

        name:"A Beautiful Lie",

        description:
        "Accepted a false memory.",

        unlocked:false

    },


    founder: {

        name:"The First Seller",

        description:
        "Discovered your connection to the auction.",

        unlocked:false

    }


};



// =====================
// UNLOCK ACHIEVEMENT
// =====================


function unlockAchievement(id){


    if(
        achievements[id]
        &&
        !achievements[id].unlocked
    ){

        achievements[id].unlocked=true;


        console.log(
        "Achievement unlocked:",
        achievements[id].name
        );


    }


}



// =====================
// CHECK ACHIEVEMENTS
// =====================


function checkAchievements(){



    if(
        player.memories.length >= 1
    ){

        unlockAchievement(
        "firstMemory"
        );

    }



    if(
        hasMemory("000")
    ){

        unlockAchievement(
        "forbiddenTouch"
        );

    }



    if(
        elias.trust > 0
    ){

        unlockAchievement(
        "trustedElias"
        );

    }



    if(
        elias.fear >= 3
    ){

        unlockAchievement(
        "fearedElias"
        );

    }



    if(
        player.stats.truth >= 5
    ){

        unlockAchievement(
        "truthSeeker"
        );

    }



    if(
        player.memories.length >= 3
    ){

        unlockAchievement(
        "memoryCollector"
        );

    }



}



// =====================
// ACHIEVEMENT MENU
// =====================


function openAchievements(){


    const storyBox =
    document.getElementById("story");


    const choicesBox =
    document.getElementById("choices");



    storyBox.innerHTML = `

    <h2>
    MEMORY ARCHIVE
    </h2>

    `;



    Object.keys(achievements)
    .forEach(id=>{


        let a =
        achievements[id];


        storyBox.innerHTML += `

        <div>

        <h3>

        ${
        a.unlocked
        ?
        "◆ "+a.name
        :
        "???"
        }

        </h3>


        <p>

        ${
        a.unlocked
        ?
        a.description
        :
        "Unknown memory"

        }

        </p>

        </div>


        `;


    });



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
