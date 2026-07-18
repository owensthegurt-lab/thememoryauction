/*
    THE MEMORY AUCTION
    hud.js

    Player Status Interface
*/


// =====================================
// UPDATE HUD
// =====================================


function updateHUD(){


    const credits =
    document.getElementById("credits");


    const alignment =
    document.getElementById("alignment");



    if(!credits || !alignment)
    return;



    credits.innerHTML = `

    ◇ Credits:
    ${player.credits}

    <br>

    ◇ Memories:
    ${player.memories.length}

    `;



    alignment.innerHTML = `

    ◇ Alignment:

    ${getAlignment()}

    <br>

    ◇ Elias Trust:

    ${elias.trust}

    `;


}



// =====================================
// OPEN PLAYER MEMORY PAGE
// =====================================


function openMemoryBook(){


    const storyBox =
    document.getElementById("story");


    const choicesBox =
    document.getElementById("choices");



    storyBox.innerHTML = `


    <h2>
    MEMORY ARCHIVE
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
// ELIAS STATUS PAGE
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
// AUTO UPDATE LOOP
// =====================================


setInterval(()=>{


    updateHUD();


},500);
