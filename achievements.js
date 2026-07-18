/*
    THE MEMORY AUCTION

    achievements.js

    Achievement System
*/





// =====================================
// ACHIEVEMENT DATABASE
// =====================================


const achievements={



// ================================
// STORY
// ================================


firstMemory:{


name:"First Fragment",


description:
"Recover your first lost memory.",


unlocked:false


},





truthFound:{


name:"The Truth Beneath",


description:
"Discover the secret behind the auction.",


unlocked:false


},





rememberYourself:{


name:"Remember Yourself",


description:
"Recover your lost identity.",


unlocked:false


},







// ================================
// ELIAS
// ================================


trustedElias:{


name:"A True Friend",


description:
"Earn Elias' trust.",


unlocked:false


},





betrayedElias:{


name:"Broken Promise",


description:
"Lose Elias' trust.",


unlocked:false


},





savedElias:{


name:"Not Forgotten",


description:
"Protect Elias.",


unlocked:false


},







// ================================
// MEMORY COLLECTION
// ================================


memoryCollector:{


name:"Memory Collector",


description:
"Collect every memory fragment.",


unlocked:false


},





hiddenMemory:{


name:"The Missing Piece",


description:
"Find a hidden memory.",


unlocked:false


},







// ================================
// ENDINGS
// ================================


firstEnding:{


name:"The Story Ends",


description:
"Reach your first ending.",


unlocked:false


},





heroEnding:{


name:"The Light Within",


description:
"Reach a hero ending.",


unlocked:false


},





evilEnding:{


name:"The Dark Choice",


description:
"Reach an evil ending.",


unlocked:false


},





neutralEnding:{


name:"The Observer",


description:
"Reach a neutral ending.",


unlocked:false


},







// ================================
// SECRET
// ================================


trueEnding:{


name:"The Final Memory",


description:
"Unlock the true ending.",


unlocked:false


},





endingMaster:{


name:"Memory Complete",


description:
"Discover every ending.",


unlocked:false


}



};









// =====================================
// CHECK ACHIEVEMENTS
// =====================================


function checkAchievements(){



let s =
player.stats;



let sp =
player.special;



let e =
elias;





// MEMORY



if(

player.memories.length>=1

){


unlockAchievement(
"firstMemory"
);


}






if(

player.memories.length>=10

){


unlockAchievement(
"memoryCollector"
);


player.special.collectedAllMemories=true;


}






// TRUTH



if(

sp.discoveredTruth

){


unlockAchievement(
"truthFound"
);


}






if(

s.identity>=5

){


unlockAchievement(
"rememberYourself"
);


}






// ELIAS



if(

e.trust>=5

){


unlockAchievement(
"trustedElias"
);


}







if(

e.fear>=5

|| e.betrayed

){


unlockAchievement(
"betrayedElias"
);


}







if(

e.saved

){


unlockAchievement(
"savedElias"
);


}








// ENDINGS



if(

player.endingsUnlocked.length>=1

){


unlockAchievement(
"firstEnding"
);


}








if(

player.endingsUnlocked.some(id=>

id.includes("hero")

)

){


unlockAchievement(
"heroEnding"
);


}








if(

player.endingsUnlocked.some(id=>

id.includes("evil")

)

){


unlockAchievement(
"evilEnding"
);


}








if(

player.endingsUnlocked.some(id=>

id.includes("neutral")

)

){


unlockAchievement(
"neutralEnding"
);


}








if(

player.endingsUnlocked.includes(
"ending_secret_true"
)

){


unlockAchievement(
"trueEnding"
);


}








if(

player.endingsUnlocked.length>=40

){


unlockAchievement(
"endingMaster"
);


}



}









// =====================================
// UNLOCK FUNCTION
// =====================================


function unlockAchievement(id){



let achievement =
achievements[id];



if(!achievement)
return;



if(achievement.unlocked)
return;



achievement.unlocked=true;



showAchievementPopup(
achievement.name
);



}









// =====================================
// POPUP
// =====================================


function showAchievementPopup(name){



console.log(

"Achievement Unlocked:",
name

);



}
