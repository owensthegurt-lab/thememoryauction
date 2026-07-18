/*
    THE MEMORY AUCTION
    game.js
*/


// =========================
// PLAYER DATA
// =========================

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



// Current scene

let currentScene = "intro";



// =========================
// LOAD SCENES
// =========================

function loadScene(id) {


    const scene = story[id];


    if (!scene) {

        console.error(
            "Scene does not exist:",
            id
        );

        return;

    }



    currentScene = id;



    const storyBox =
    document.getElementById("story");


    const choicesBox =
    document.getElementById("choices");



    // Fade effect

    storyBox.style.opacity = 0;



    setTimeout(()=>{


        storyBox.innerHTML =
        scene.text;


        storyBox.style.opacity = 1;


    },400);



    // Clear old buttons

    choicesBox.innerHTML = "";



    // Create new choices

    scene.choices.forEach(choice=>{


        const button =
        document.createElement("button");



        button.innerText =
        choice.text;



        button.onclick = ()=>{


            playClick();


            applyEffects(
                choice.effects
            );


            loadScene(
                choice.next
            );


        };



        choicesBox.appendChild(button);


    });


}



// =========================
// APPLY CHOICE EFFECTS
// =========================

function applyEffects(effects){


    if(!effects)
    return;



    Object.keys(effects).forEach(effect=>{


        let value =
        effects[effect];



        // Stats

        if(
            player.stats[effect]
            !== undefined
        ){

            player.stats[effect]
            += value;


        }



        // Credits

        else if(
            effect === "credits"
        ){

            player.credits
            += value;


        }



        // Memories

        else if(
            effect === "memory"
        ){

            if(
                !player.memories.includes(value)
            ){

                player.memories.push(value);

            }

        }



    });



}



// =========================
// MEMORY FUNCTIONS
// =========================


function hasMemory(memory){


    return player.memories.includes(memory);


}



function addMemory(memory){


    if(!hasMemory(memory)){

        player.memories.push(memory);

    }


}



// =========================
// ALIGNMENT CHECKS
// =========================


function getAlignment(){


    let morality;


    let order;



    // Good / Evil

    if(
        player.stats.good >
        player.stats.evil
    ){

        morality = "Good";

    }

    else if(
        player.stats.evil >
        player.stats.good
    ){

        morality = "Evil";

    }

    else {

        morality = "Neutral";

    }



    // Law / Chaos

    if(
        player.stats.law >
        player.stats.chaos
    ){

        order = "Lawful";

    }

    else if(
        player.stats.chaos >
        player.stats.law
    ){

        order = "Chaotic";

    }

    else {

        order = "Neutral";

    }



    return order + " " + morality;


}



// =========================
// DEBUG MENU
// =========================

function showStats(){


    console.log(
        "PLAYER:",
        player
    );


    console.log(
        "ALIGNMENT:",
        getAlignment()
    );


}



// =========================
// SOUND EFFECT
// =========================

function playClick(){


    try {


        const sound =
        new Audio(
            "assets/sounds/click.mp3"
        );


        sound.volume = 0.4;


        sound.play();



    }

    catch(error){


        // Ignore if sound missing

    }


}



// =========================
// START GAME
// =========================


window.onload = ()=>{


    loadScene(
        currentScene
    );


};
