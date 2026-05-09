'use strict';

let speakToGrandma = function(speak){
    let full_cap = speak.toUpperCase();

    if(speak === full_cap){
        return "NO, NOT SINCE 1938!";
    } else{
        return "HUH?! SPEAK UP, SONNY!";
    }
};



module.exports = speakToGrandma;

