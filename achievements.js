/*
    THE MEMORY AUCTION

    achievements.js

    Achievement System
*/



let achievements={



// =====================================
// STORY
// =====================================


first_memory:{


name:"The First Fragment",


description:
"Recover your first lost memory.",


unlocked:false


},





truth_seeker:{


name:"Truth Seeker",


description:
"Discover the truth behind the auction.",


unlocked:false


},





creator_revealed:{


name:"The Creator",


description:
"Learn that you built the auction.",


unlocked:false


},







// =====================================
// ELIAS
// =====================================


elias_friend:{


name:"Old Friend",


description:
"Earn Elias' trust.",


unlocked:false


},





elias_enemy:{


name:"Broken Trust",


description:
"Make Elias fear you.",


unlocked:false


},





elias_saved:{


name:"Not Alone",


description:
"Save Elias.",


unlocked:false


},







// =====================================
// MEMORY
// =====================================


memory_collector:{


name:"Memory Collector",


description:
"Collect every lost memory.",


unlocked:false


},





forbidden_memory:{


name:"Forbidden Memory",


description:
"Find the hidden memory.",


unlocked:false


},







// =====================================
// ENDINGS
// =====================================


first_ending:{


name:"A New Beginning",


description:
"Complete the story once.",


unlocked:false


},





hero_path:{


name:"A Better World",


description:
"Reach a hero ending.",


unlocked:false


},





evil_path:{


name:"The Price of Power",


description:
"Reach an evil ending.",


unlocked:false


},





neutral_path:{


name:"The Observer",


description:
"Reach a neutral ending.",


unlocked:false


},







// =====================================
// SECRET
// =====================================


true_ending:{


name:"The Final Truth",


description:
"Unlock the true ending.",


unlocked:false


},





all_endings:{


name:"The Complete Memory",


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







if(
player.memories.length>=1
){


unlockAchievement(
"first_memory"
);


}






if(
sp.discoveredTruth
){


unlockAchievement(
"truth_seeker"
);


}






if(
s.identity>=5
){


unlockAchievement(
"creator_revealed"
);


}







if(
e.trust>=5
){


unlockAchievement(
"elias_friend"
);


}







if(
e.fear>=5
){


unlockAchievement(
"elias_enemy"
);


}







if(
player.memories.length>=10
){


unlockAchievement(
"memory_collector"
);


player.special.collectedAllMemories=true;


}







if(
player.endingsUnlocked.length>=1
){


unlockAchievement(
"first_ending"
);


}







if(

player.endingsUnlocked.some(id=>

id.includes("hero")

)

){


unlockAchievement(
"hero_path"
);


}







if(

player.endingsUnlocked.some(id=>

id.includes("evil")

)

){


unlockAchievement(
"evil_path"
);


}







if(

player.endingsUnlocked.some(id=>

id.includes("neutral")

)

){


unlockAchievement(
"neutral_path"
);


}







if(

player.endingsUnlocked.includes(
"ending_secret_true"
)

){


unlockAchievement(
"true_ending"
);


}







if(

player.endingsUnlocked.length>=40

){


unlockAchievement(
"all_endings"
);


}



}









// =====================================
// UNLOCK
// =====================================


function unlockAchievement(id){



if(
!achievements[id]
)
return;



if(
achievements[id].unlocked
)
return;



achievements[id].unlocked=true;



showAchievementPopup(
achievements[id].name
);



}









// =====================================
// POPUP
// =====================================


function showAchievementPopup(text){



console.log(

"Achievement Unlocked:",
text

);



}
