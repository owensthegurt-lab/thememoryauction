/*
    THE MEMORY AUCTION

    hud.js

    Player Interface System
*/



// =====================================
// UPDATE HUD
// =====================================


function updateHUD(){


    const credits =
    document.getElementById("credits");


    const alignment =
    document.getElementById("alignment");



    if(credits){


        credits.innerHTML = `

        ◇ Credits:
        ${player.credits}

        <br>

        ◇ Memories:
        ${player.memories.length}

        `;


    }



    if(alignment){


        alignment.innerHTML = `

        ◇ Alignment:

        ${getAlignment()}

        <br>

        ◇ Elias:

        ${getEliasStatus()}

        `;


    }



}





// =====================================
// ELIAS STATUS
// =====================================


function getEliasStatus(){


    if(
        elias.trust >=5
    ){

        return "Trusted";

    }



    if(
        elias.fear >=5
    ){

        return "Afraid";

    }



    if(
        elias.betrayed
    ){

        return "Betrayed";

    }



    return "Unknown";


}





// =====================================
// MEMORY ARCHIVE PAGE
// =====================================


function openMemoryBook(){



    const storyBox =
    document.getElementById("story");


    const choicesBox =
    document.getElementById("choices");



    storyBox.innerHTML = `

    <h2>
    MEMORY COLLECTION
    </h2>

    `;



    if(
        player.memories.length===0
    ){


        storyBox.innerHTML += `

        <p>
        No memories recovered.
        </p>

        `;


    }





    player.memories.forEach(id=>{


        let memory =
        memoryDatabase[id];



        if(!memory)
        return;



        storyBox.innerHTML += `


        <div class="memoryCard">


        <h3>

        ${memory.name}

        </h3>


        <p>

        ${memory.rarity}

        </p>


        <p>

        ${memory.description}

        </p>


        </div>


        `;


    });





    choicesBox.innerHTML="";



    createReturnButton();



}







// =====================================
// ELIAS PAGE
// =====================================


function openEliasStatus(){



    const storyBox =
    document.getElementById("story");


    const choicesBox =
    document.getElementById("choices");



    storyBox.innerHTML = `


    <h2>
    ELIAS
    </h2>


    <div class="memoryCard">


    <p>

    Trust:

    ${elias.trust}

    </p>


    <p>

    Fear:

    ${elias.fear}

    </p>


    <p>

    Truth Shared:

    ${elias.truth}

    </p>


    <p>

    Status:

    ${getEliasStatus()}

    </p>


    </div>


    `;



    choicesBox.innerHTML="";



    createReturnButton();



}







// =====================================
// DEBUG PAGE
// =====================================


function openMindStatus(){


    const storyBox =
    document.getElementById("story");


    const choicesBox =
    document.getElementById("choices");



    storyBox.innerHTML = `


    <h2>
    INNER STATE
    </h2>


    <p>
    Identity:
    ${player.stats.identity}
    </p>


    <p>
    Truth:
    ${player.stats.truth}
    </p>


    <p>
    Corruption:
    ${player.stats.corruption}
    </p>


    `;



    choicesBox.innerHTML="";



    createReturnButton();


}







// =====================================
// RETURN BUTTON
// =====================================


function createReturnButton(){


    const choicesBox =
    document.getElementById("choices");



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
// AUTO UPDATE
// =====================================


setInterval(()=>{


    updateHUD();


},500);
