/*
    THE MEMORY AUCTION

    hud.js

    Interface + Progress Tracking
*/





// =====================================
// UPDATE HUD
// =====================================


function updateHUD(){



let hud =
document.getElementById(
"hud"
);



if(!hud)
return;





hud.innerHTML=`

<h3>
MEMORY STATUS
</h3>


<p>
Alignment:
<br>
<b>
${getAlignment()}
</b>
</p>


<hr>


<p>
Good:
${player.stats.good}
</p>


<p>
Evil:
${player.stats.evil}
</p>


<p>
Truth:
${player.stats.truth}
</p>


<p>
Corruption:
${player.stats.corruption}
</p>


<hr>


<p>
Memories:
${player.memories.length}
</p>


<p>
Endings:
${player.endingsUnlocked.length}/40
</p>


<hr>


<p>
Elias Trust:
${elias.trust}
</p>


<p>
Elias Fear:
${elias.fear}
</p>

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



if(
good>=evil+5
){


return "Hero";


}



if(
evil>=good+5
){


return "Evil";


}



if(
player.stats.truth>=8
){


return "Truth Seeker";


}



return "Neutral";



}









// =====================================
// ACHIEVEMENT MENU
// =====================================


function openAchievements(){



let screen =
document.getElementById(
"achievementScreen"
);



if(!screen)
return;



screen.style.display="block";



let list =
document.getElementById(
"achievementList"
);



if(!list)
return;



list.innerHTML="";





Object.keys(achievements)
.forEach(id=>{


let achievement =
achievements[id];



let box =
document.createElement(
"div"
);





if(
achievement.unlocked
){


box.innerHTML=`

<h3>
${achievement.name}
</h3>

<p>
${achievement.description}
</p>

`;



}

else{


box.innerHTML=`

<h3>
???
</h3>

<p>
Unknown Memory
</p>

`;



}



list.appendChild(box);



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



screen.style.display="block";



let list =
document.getElementById(
"endingList"
);



if(!list)
return;



list.innerHTML="";





Object.keys(endings)
.forEach(id=>{


let box =
document.createElement(
"div"
);





if(
player.endingsUnlocked.includes(id)
){


box.innerHTML=`

<h3>
${id}
</h3>


<p>
Discovered
</p>

`;



}

else{


box.innerHTML=`

<h3>
???
</h3>


<p>
Unknown Ending
</p>

`;



}



list.appendChild(box);



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
