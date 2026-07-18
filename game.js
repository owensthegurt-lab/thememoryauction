/*
    THE MEMORY AUCTION

    game.js

    Main Engine
*/



// =====================================
// PLAYER
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
// ELIAS
// =====================================


let elias = {


    trust:0,


    fear:0,


    truth:0,


    betrayed:false


};







// =====================================
// STATE
// =====================================


let currentScene="intro";


let gameStarted=false;







// =====================================
// START GAME
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
// LOAD SCENE
// =====================================


function loadScene(id){



    let scene =
    story[id];



    if(!scene){


        console.error(

        "Missing scene:",

        id

        );


        return;


    }



    currentScene=id;



    let storyBox =
    document.getElementById("story");


    let choicesBox =
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

            else{


                showEnding();


            }



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




    Object.keys(effects)
    .forEach(key=>{


        let value =
        effects[key];





        if(
            key==="elias"
        ){


            Object.keys(value)
            .forEach(stat=>{


                elias[stat]+=value[stat];


            });



            return;


        }





        if(
            key==="memory"
        ){


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





    checkAchievements();


    updateHUD();



}









// =====================================
// ALIGNMENT
// =====================================


function getAlignment(){


    let good =
    player.stats.good;


    let evil =
    player.stats.evil;




    if(
        good>evil
    )
    return "Hero";



    if(
        evil>good
    )
    return "Corrupted";



    return "Neutral";


}









// =====================================
// SAVE SYSTEM
// =====================================


function saveGame(slot=1){



    let save={


        player:player,


        elias:elias,


        achievements:achievements,


        scene:currentScene,


        date:
        new Date().toLocaleString()


    };



    localStorage.setItem(

        "memoryAuction_slot"+slot,

        JSON.stringify(save)

    );



    updateSaveSlots();



}









function loadSlot(slot){



    let raw =

    localStorage.getItem(

    "memoryAuction_slot"+slot

    );



    if(!raw)
    return;



    let save =
    JSON.parse(raw);



    player=save.player;


    elias=save.elias;



    currentScene=
    save.scene;



    Object.assign(

        achievements,

        save.achievements

    );



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


        let element =
        document.getElementById(
            "slot"+i
        );



        if(!element)
        continue;



        let raw =

        localStorage.getItem(

        "memoryAuction_slot"+i

        );



        if(raw){


            let save =
            JSON.parse(raw);



            element.innerHTML=

            `

            Scene:
            ${save.scene}

            <br>

            Saved:
            ${save.date}

            `;


        }

        else{


            element.innerHTML=
            "Empty";


        }



    }


}








// =====================================
// SCREENS
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









window.onload=()=>{


    updateSaveSlots();


    gameStarted=true;


};
