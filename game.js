/*
    THE MEMORY AUCTION

    game.js

    Core Engine
*/



// =====================================
// PLAYER DATA
// =====================================


let player = {


    credits:500,


    memories:[],


    stats:{


        good:0,

        evil:0,

        truth:0,

        corruption:0,

        identity:0


    },



    special:{


        destroyedAuction:false,


        controlledAuction:false,


        rebuiltAuction:false,


        acceptedBurden:false,


        savedElias:false,


        lostElias:false,


        discoveredTruth:false,


        collectedAllMemories:false


    },



    endingsUnlocked:[]



};









// =====================================
// ELIAS
// =====================================


let elias={


    trust:0,


    fear:0,


    truth:0,


    betrayed:false



};








// =====================================
// GAME STATE
// =====================================


let currentScene="intro";


let gameStarted=false;









// =====================================
// NEW GAME
// =====================================


function startNewGame(){



    player={


        credits:500,


        memories:[],


        stats:{


            good:0,

            evil:0,

            truth:0,

            corruption:0,

            identity:0


        },



        special:{


            destroyedAuction:false,


            controlledAuction:false,


            rebuiltAuction:false,


            acceptedBurden:false,


            savedElias:false,


            lostElias:false,


            discoveredTruth:false,


            collectedAllMemories:false


        },



        endingsUnlocked:[]


    };



    elias={


        trust:0,


        fear:0,


        truth:0,


        betrayed:false


    };



    currentScene="intro";



    openGame();



    loadScene(currentScene);



    updateHUD();



}









// =====================================
// SCENE LOADING
// =====================================


function loadScene(id){



    let scene=story[id];



    if(!scene){


        console.error(

        "Missing scene:",
        id

        );


        return;


    }



    currentScene=id;



    document.getElementById(
        "story"
    ).innerHTML=
    scene.text;



    let choices=

    document.getElementById(
        "choices"
    );



    choices.innerHTML="";



    scene.choices.forEach(choice=>{


        let button=

        document.createElement(
            "button"
        );



        button.innerHTML=
        choice.text;



        button.onclick=()=>{


            applyEffects(
                choice.effects
            );



            if(choice.next){


                loadScene(
                    choice.next
                );


            }

            else{


                showEnding();


            }


        };



        choices.appendChild(button);



    });



    updateHUD();



}









// =====================================
// EFFECT SYSTEM
// =====================================


function applyEffects(effects){



    if(!effects)
    return;




    Object.keys(effects)
    .forEach(key=>{


        let value=
        effects[key];





        if(key==="elias"){


            Object.keys(value)
            .forEach(stat=>{


                elias[stat]+=value[stat];


            });


            return;


        }





        if(key==="special"){


            Object.keys(value)
            .forEach(flag=>{


                player.special[flag]=value[flag];


            });


            return;


        }






        if(key==="memory"){


            if(
                !player.memories.includes(value)
            ){


                player.memories.push(value);


            }


            return;


        }





        if(
            key==="credits"
        ){


            player.credits+=value;


            return;


        }






        if(
            player.stats[key]
            !==undefined
        ){


            player.stats[key]+=value;


        }



    });



    updateHUD();



}









// =====================================
// ENDING TRACKING
// =====================================


function unlockEnding(id){



    if(
        !player.endingsUnlocked.includes(id)
    ){


        player.endingsUnlocked.push(id);


    }



}









// =====================================
// SAVE SYSTEM
// =====================================


function saveGame(slot=1){



    let data={


        player,


        elias,


        scene:currentScene,


        date:
        new Date().toLocaleString()


    };



    localStorage.setItem(

        "memoryAuction_slot"+slot,

        JSON.stringify(data)

    );



    updateSaveSlots();



}









function loadSlot(slot){



    let raw=

    localStorage.getItem(

    "memoryAuction_slot"+slot

    );



    if(!raw)
    return;



    let data=
    JSON.parse(raw);



    player=data.player;


    elias=data.elias;


    currentScene=data.scene;



    openGame();


    loadScene(
        currentScene
    );



}








function deleteSlot(slot){


    localStorage.removeItem(

    "memoryAuction_slot"+slot

    );


    updateSaveSlots();


}









// =====================================
// MENU
// =====================================


function openSaveSlots(){


    document.getElementById(
        "titleScreen"
    ).style.display="none";


    document.getElementById(
        "game"
    ).style.display="none";


    document.getElementById(
        "saveScreen"
    ).style.display="block";


    updateSaveSlots();


}





function openGame(){


    document.getElementById(
        "titleScreen"
    ).style.display="none";


    document.getElementById(
        "saveScreen"
    ).style.display="none";


    document.getElementById(
        "game"
    ).style.display="block";


}








function updateSaveSlots(){



    for(let i=1;i<=3;i++){


        let box=

        document.getElementById(
            "slot"+i
        );



        if(!box)
        continue;



        let save=

        localStorage.getItem(

        "memoryAuction_slot"+i

        );



        box.innerHTML=

        save ?

        "Memory Found"

        :

        "Empty";


    }


}









window.onload=()=>{


    updateSaveSlots();


};
