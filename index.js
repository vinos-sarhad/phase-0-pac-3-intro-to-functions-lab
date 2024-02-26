function  shout(string){
    return string.toUpperCase()
}
shout("hi")



function  whisper(string){
    return string.toLowerCase()
}
whisper("HI")

function logShout(string){
    console.log(string.toUpperCase())
}
logShout("string")

function  logWhisper(string){
    console.log( string.toLowerCase())
}
logWhisper("HI")

function sayHiToHeadphonedRoommate(string){
    if(string===string.toLowerCase()){
        return "I can't hear you!"
    }else if(string===string.toUpperCase()){
        return "YES INDEED!"
    }else if(string==="Let's have dinner together!"){
        return "I would love to!"
    }
}