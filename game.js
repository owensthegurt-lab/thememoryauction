/*
    THE MEMORY AUCTION

    game.js

    Main Game Engine
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


    }


};






// =====================================
// ELIAS DATA
// =====================================


let elias = {


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
// START NEW GAME
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


        }


    };



    elias={


        trust:0,

        fear:0,

        truth:0,

        betrayed:false


    };



    resetAchievements();



    currentScene="intro";



    openGame();



    loadScene(
        currentScene
    );


    updateHUD();



}








// =====================================
// LOAD STORY SCENE
// =====================================


function loadScene(sceneID){



    let scene =
    story[sceneID];



    if(!scene){


        console.error(

        "Scene missing:",

        sceneID

        );


        return;


    }



    currentScene =
    sceneID;



    const storyBox =
    document.getElementById("story");


    const choicesBox =
    document.getElementById("choices");



    storyBox.innerHTML =
    scene.text;



    choicesBox.innerHTML="";



    scene.choices.forEach(choice=>{


        let button =
        document.createElement("button");



        button.innerHTML =
        choice.text;



        button.onclick=()=>{


            applyEffects(
                choice.effects
            );



            if(
                choice.next
            ){


                loadScene(
                    choice.next
                );


            }


        };



        choicesBox.appendChild(button);



    });



    updateHUD();



}








// =====================================
// APPLY CHOICE EFFECTS
// =====================================


function applyEffects(effects){



    if(!effects)
    return;




    for(
        let key in effects
    ){



        let value =
        effects[key];



        if(
            key==="elias"
        ){


            for(
                let stat in value
            ){


                elias[stat]+=value[stat];


            }



            continue;


        }






        if(
            key==="memory"
        ){


            if(
                !player.memories.includes(value)
            ){


                player.memories.push(value);


            }



            continue;


        }






        if(
            player.stats[key]
            !==undefined
        ){


            player.stats[key]+=value;


        }




        if(
            key==="credits"
        ){


            player.credits+=value;


        }



    }



    checkAchievements();



    updateHUD();



}







// =====================================
// ALIGNMENT
// =====================================


function getAlignment(){


    let s =
    player.stats;



    if(
        s.good >
        s.evil
    ){

        return "Hero";

    }



    if(
        s.evil >
        s.good
    ){

        return "Corrupted";

    }



    return "Neutral";


}







// =====================================
// SAVE SYSTEM
// =====================================


function saveGame(slot=1){



    let data={


        player,

        elias,

        achievements,

        currentScene,

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



    let save =

    localStorage.getItem(

        "memoryAuction_slot"+slot

    );



    if(!save)
    return;



    let data =
    JSON.parse(save);



    player=data.player;


    elias=data.elias;


    currentScene=data.currentScene;



    Object.assign(

        achievements,

        data.achievements

    );



    openGame();



    loadScene(
        currentScene
    );



    updateHUD();



}







function deleteSlot(slot){


    localStorage.removeItem(

        "memoryAuction_slot"+slot

    );


    updateSaveSlots();


}







// =====================================
// SAVE MENU
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





function closeSaveSlots(){


    document.getElementById(
        "saveScreen"
    ).style.display="none";


    document.getElementById(
        "titleScreen"
    ).style.display="block";


}






function updateSaveSlots(){



    for(
        let i=1;
        i<=3;
        i++
    ){


        let slot =
        document.getElementById(
            "slot"+i
        );



        if(!slot)
        continue;



        let save =

        localStorage.getItem(

            "memoryAuction_slot"+i

        );



        if(save){


            let data =
            JSON.parse(save);



            slot.innerHTML=`

            Scene:
            ${data.currentScene}

            <br>

            Saved:
            ${data.date}

            `;


        }

        else{


            slot.innerHTML =
            "Empty";


        }


    }


}







// =====================================
// SCREEN CONTROL
// =====================================


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





function openSettings(){


    alert(
    "Settings coming later."
    );


}







// =====================================
// RESET
// =====================================


function resetAchievements(){



    for(
        let id in achievements
    ){


        achievements[id].unlocked=false;


    }


}







// =====================================
// STARTUP
// =====================================


window.onload=()=>{


    updateSaveSlots();


    gameStarted=true;


};
