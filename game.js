/*
    THE MEMORY AUCTION
    game.js
*/


// =============================
// PLAYER DATA
// =============================


const player = {

    name:"Unknown",

    credits:5000,

    memories:[],


    stats:{

        identity:0,
        truth:0,
        corruption:0,


        good:0,
        evil:0,


        law:0,
        chaos:0

    }


};



// =============================
// ELIAS DATA
// =============================


const elias = {


    trust:0,

    fear:0,

    truth:0,

    remembers:false,

    betrayed:false


};



// =============================
// CURRENT SCENE
// =============================


let currentScene="intro";



// =============================
// LOAD SCENE
// =============================


function loadScene(id){


    const scene = story[id];


    if(!scene){

        console.error(
            "Missing scene:",
            id
        );

        return;

    }



    currentScene=id;



    const storyBox =
    document.getElementById("story");


    const choicesBox =
    document.getElementById("choices");



    // memory fade effect

    storyBox.style.opacity="0";



    setTimeout(()=>{


        storyBox.innerHTML =
        scene.text;


        storyBox.style.opacity="1";


    },400);



    choicesBox.innerHTML="";



    scene.choices.forEach(choice=>{


        // Check requirements

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


            loadScene(
                choice.next
            );


        };



        choicesBox.appendChild(button);


    });


}



// =============================
// APPLY EFFECTS
// =============================


function applyEffects(effects){


    if(!effects)
    return;



    Object.keys(effects)
    .forEach(type=>{


        let value =
        effects[type];



        // Player stats

        if(
            player.stats[type]
            !==undefined
        ){


            player.stats[type]
            += value;


        }



        // Credits

        else if(
            type==="credits"
        ){


            player.credits += value;


        }



        // Memories

        else if(
            type==="memory"
        ){


            if(
                !player.memories.includes(value)
            ){

                player.memories.push(value);

            }


        }



        // Elias system

        else if(
            type==="elias"
        ){


            Object.keys(value)
            .forEach(stat=>{


                if(
                    elias[stat]
                    !==undefined
                ){

                    elias[stat]
                    += value[stat];

                }


            });


        }


    });


}



// =============================
// REQUIREMENTS
// =============================


function checkRequirements(req){


    if(!req)
    return true;



    for(let key in req){


        let needed =
        req[key];



        // Player stats

        if(
            player.stats[key]
            !==undefined
        ){


            if(
                player.stats[key]
                < needed
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
                < needed
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


    }



    return true;


}



// =============================
// ALIGNMENT
// =============================


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



// =============================
// DEBUG TOOLS
// =============================


function debug(){

    console.log(
        "PLAYER:",
        player
    );


    console.log(
        "ELIAS:",
        elias
    );


    console.log(
        "ALIGNMENT:",
        getAlignment()
    );


}



// =============================
// CLICK SOUND
// =============================


function playClick(){


    let sound =
    new Audio(
        "assets/sounds/click.mp3"
    );


    sound.volume=.3;


    sound.play()
    .catch(()=>{});


}



// =============================
// START
// =============================


window.onload=()=>{


    loadScene(
        currentScene
    );


};
