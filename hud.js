/*
    THE MEMORY AUCTION

    hud.js

    Player HUD + Progress Tracking
*/





// =====================================
// UPDATE HUD
// =====================================


function updateHUD(){



let box =
document.getElementById(
    "hud"
);



if(!box)
return;





box.innerHTML=`

<div class="hud-title">

MEMORY STATUS

</div>



<div>

Alignment:

<strong>
${getAlignment()}
</strong>

</div>



<hr>



<div>

Good:

${player.stats.good}

</div>



<div>

Evil:

${player.stats.evil}

</div>



<div>

Truth:

${player.stats.truth}

</div>



<div>

Corruption:

${player.stats.corruption}

</div>



<hr>



<div>

Memories:

${player.memories.length}

</div>



<div>

Endings Found:

${player.endingsUnlocked.length}/40

</div>



<hr>



<div>

Elias Trust:

${elias.trust}

</div>



<div>

Elias Fear:

${elias.fear}

</div>


`;



}









// =====================================
// ALIGNMENT
// =====================================


function getAlignment(){



let good =
player.stats.good;



let evil =
player.stats.evil;



let truth =
player.stats.truth;



if(
good>=evil+3
)
{


return "Hero";


}




if(
evil>=good+3
)
{


return "Evil";


}





if(
truth>=8
)
{


return "Truth Seeker";


}




return "Neutral";



}









// =====================================
// ACHIEVEMENT PAGE
// =====================================


function openAchievements(){



let screen =
document.getElementById(
"achievementScreen"
);



if(!screen)
return;



screen.style.display=
"block";



let list =
document.getElementById(
"achievementList"
);



list.innerHTML="";




Object.keys(achievements)
.forEach(id=>{


let a =
achievements[id];



let div =
document.createElement(
"div"
);



if(a.unlocked){


div.innerHTML=

`

<h3>
${a.name}
</h3>

<p>
${a.description}
</p>

`;


}

else{


div.innerHTML=

`

<h3>
???
</h3>

<p>
Locked Achievement
</p>

`;



}



list.appendChild(div);



});



}









// =====================================
// ENDING GALLERY
// =====================================


function openEndingGallery(){



let screen =
document.getElementById(
"endingScreen"
);



if(!screen)
return;



screen.style.display=
"block";



let list =
document.getElementById(
"endingList"
);



list.innerHTML="";




player.endingsUnlocked
.forEach(id=>{


let div =
document.createElement(
"div"
);



let ending =
endings[id];



if(ending){


div.innerHTML=

`

<h3>
${id}
</h3>

<p>
Discovered
</p>

`;



}



list.appendChild(div);



});



}









// =====================================
// CLOSE MENUS
// =====================================


function closeHUDMenus(){



let a =
document.getElementById(
"achievementScreen"
);



let e =
document.getElementById(
"endingScreen"
);



if(a)
a.style.display="none";



if(e)
e.style.display="none";



}
