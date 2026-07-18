/*
    THE MEMORY AUCTION
    game.js

    Main Game Engine
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
// ELIAS DATA
// =====================================


const elias = {


    trust: 0,

    fear: 0,

    truth: 0,


    remembers:false,

    betrayed:false


};




// =====================================
// GAME STATE
// =====================================


let currentScene = "intro";

let gameStarted = false;





// =====================================
// SCENE LOADING
// =====================================


function loadScene(id){


    const scene =
    story[id];



    if(!scene){


        console.error(
            "Scene not found:",
            id
        );


        return;


    }



    currentScene=id;



    const storyBox =
    document.getElementById("story");


    const choicesBox =
    document.getElementById("choices");



    storyBox.style.opacity=0;



    setTimeout(()=>{


        storyBox.innerHTML =
        scene.text;



        storyBox.style.opacity=1;



    },350);




    choicesBox.innerHTML="";



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



        button.onclick=()=>{


            playClick();



            applyEffects(
                choice.effects
            );



            checkAchievements();



            updateHUD();



            loadScene(
                choice.next
            );


        };



        choicesBox.appendChild(button);



    });



    updateHUD();



}






// =====================================
// APPLY EFFECTS
// =====================================


function applyEffects(effects){


    if(!effects)
    return;



    for(
        let effect in effects
    ){



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
            effect==="credits"
        ){


            player.credits += value;


        }





        // MEMORY

        else if(
            effect==="memory"
        ){


            if(
                !player.memories.includes(value)
            ){

                player.memories.push(value);

            }


        }





        // ELIAS

        else if(
            effect==="elias"
        ){



            for(
                let stat in value
            ){



                if(
                    elias[stat]
                    !==undefined
                ){


                    elias[stat]
                    += value[stat];


                }


            }


        }



    }



}







// =====================================
// REQUIREMENT SYSTEM
// =====================================


function checkRequirements(req){


    if(!req)
    return true;



    for(
        let key in req
    ){


        let needed =
        req[key];





        // player stats

        if(
            player.stats[key]
            !==undefined
        ){


            if(
                player.stats[key]
                <
                needed
            ){

                return false;

            }


        }





        // Elias stats

        else if(
            elias[key]
            !==undefined
        ){



            if(
                elias[key]
                <
                needed
            ){

                return false;

            }


        }





        // Memories

        else if(
            key==="memory"
        ){



            if(
                !player.memories.includes(
                    needed
                )
            ){

                return false;

            }


        }





        // Achievements

        else if(
            key==="achievement"
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
// ALIGNMENT
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
// SAVE SYSTEM
// =====================================


function saveGame(){


    const save = {


        player:player,

        elias:elias,

        achievements:achievements,

        scene:currentScene


    };



    localStorage.setItem(

        "memoryAuction",

        JSON.stringify(save)

    );


}







function loadGame(){



    const save =
    localStorage.getItem(
        "memoryAuction"
    );



    if(!save)
    return;



    const data =
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



    if(data.scene){

        currentScene=data.scene;

    }



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


    console.log(
        "ACHIEVEMENTS",
        achievements
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


    sound.volume=.25;


    sound.play()
    .catch(()=>{});


}






// =====================================
// START GAME
// =====================================


window.onload=()=>{


    loadGame();



    loadScene(
        currentScene
    );



    updateHUD();



    gameStarted=true;


};
