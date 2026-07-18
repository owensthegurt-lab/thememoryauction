/*
    THE MEMORY AUCTION
    game.js

    Main Engine
*/


// =====================================
// PLAYER DATA
// =====================================


const player = {

    name: "Unknown",

    credits: 5000,

    memories: [],


    stats: {

        identity: 0,

        truth: 0,

        corruption: 0,


        good: 0,

        evil: 0,


        law: 0,

        chaos: 0

    }


};



// =====================================
// ELIAS SYSTEM
// =====================================


const elias = {

    trust: 0,

    fear: 0,

    truth: 0,

    remembers: false,

    betrayed: false

};



// =====================================
// GAME STATE
// =====================================


let currentScene = "intro";

let gameStarted = false;



// =====================================
// LOAD SCENE
// =====================================


function loadScene(sceneID){


    const scene =
    story[sceneID];



    if(!scene){

        console.error(
            "Scene missing:",
            sceneID
        );

        return;

    }



    currentScene = sceneID;



    const storyBox =
    document.getElementById("story");


    const choicesBox =
    document.getElementById("choices");



    // dream fade effect

    storyBox.style.opacity = "0";



    setTimeout(()=>{


        storyBox.innerHTML =
        scene.text;



        storyBox.style.opacity =
        "1";


    },400);



    choicesBox.innerHTML = "";



    scene.choices.forEach(choice=>{


        if(
            !checkRequirements(
                choice.requirements
            )
        ){

            return;

        }



        let button =
        document.createElement("button");



        button.innerHTML =
        choice.text;



        button.onclick = ()=>{


            playClick();



            applyEffects(
                choice.effects
            );



            checkAchievements();



            loadScene(
                choice.next
            );


        };



        choicesBox.appendChild(button);


    });



}



// =====================================
// APPLY EFFECTS
// =====================================


function applyEffects(effects){


    if(!effects)
    return;



    Object.keys(effects)
    .forEach(effect=>{


        let value =
        effects[effect];



        // PLAYER STATS

        if(
            player.stats[effect]
            !== undefined
        ){

            player.stats[effect]
            += value;

        }



        // MONEY

        else if(
            effect === "credits"
        ){

            player.credits += value;

        }



        // MEMORY

        else if(
            effect === "memory"
        ){


            if(
                !player.memories.includes(value)
            ){

                player.memories.push(value);

            }


        }



        // ELIAS

        else if(
            effect === "elias"
        ){


            Object.keys(value)
            .forEach(stat=>{


                if(
                    elias[stat]
                    !== undefined
                ){

                    elias[stat]
                    += value[stat];

                }


            });


        }



    });



}



// =====================================
// REQUIREMENT CHECKER
// =====================================


function checkRequirements(requirements){


    if(!requirements)
    return true;



    for(
        let requirement in requirements
    ){


        let needed =
        requirements[requirement];



        // player stats

        if(
            player.stats[requirement]
            !== undefined
        ){

            if(
                player.stats[requirement]
                < needed
            ){

                return false;

            }


        }



        // Elias stats

        else if(
            elias[requirement]
            !== undefined
        ){


            if(
                elias[requirement]
                < needed
            ){

                return false;

            }


        }



        // memories

        else if(
            requirement === "memory"
        ){


            if(
                !player.memories.includes(
                    needed
                )
            ){

                return false;

            }


        }



        // achievements

        else if(
            requirement === "achievement"
        ){


            if(
                !achievements[needed]
                ||
                !achievements[needed].unlocked
            ){

                return false;

            }


        }


    }



    return true;


}



// =====================================
// ALIGNMENT SYSTEM
// =====================================


function getAlignment(){


    let morality;


    let order;



    if(
        player.stats.good >
        player.stats.evil
    ){

        morality="Good";

    }

    else if(
        player.stats.evil >
        player.stats.good
    ){

        morality="Evil";

    }

    else{

        morality="Neutral";

    }



    if(
        player.stats.law >
        player.stats.chaos
    ){

        order="Lawful";

    }

    else if(
        player.stats.chaos >
        player.stats.law
    ){

        order="Chaotic";

    }

    else{

        order="True";

    }



    return order+" "+morality;


}



// =====================================
// SAVE FOUNDATION
// =====================================


function saveGame(){


    const saveData = {

        player,

        elias,

        achievements

    };



    localStorage.setItem(

        "memoryAuctionSave",

        JSON.stringify(saveData)

    );


}



function loadGame(){


    let save =
    localStorage.getItem(
        "memoryAuctionSave"
    );



    if(!save)
    return;



    let data =
    JSON.parse(save);



    Object.assign(
        player,
        data.player
    );



    Object.assign(
        elias,
        data.elias
    );



    Object.assign(
        achievements,
        data.achievements
    );


}



// =====================================
// DEBUG
// =====================================


function debug(){


    console.log(
        "PLAYER",
        player
    );


    console.log(
        "ELIAS",
        elias
    );


    console.log(
        "ALIGNMENT",
        getAlignment()
    );


}



// =====================================
// SOUND
// =====================================


function playClick(){


    let sound =
    new Audio(
        "assets/sounds/click.mp3"
    );


    sound.volume = 0.3;


    sound.play()
    .catch(()=>{});


}



// =====================================
// START
// =====================================


window.onload = ()=>{


    loadGame();


    loadScene(
        currentScene
    );


    gameStarted=true;


};
