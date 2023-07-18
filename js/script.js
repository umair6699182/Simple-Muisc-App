let aud = new Audio();
aud.src = "audio/alan.mp3"


let pl = document.querySelector("#play");
let img = document.getElementById("img");
let isplay = false;

pl.addEventListener("click", ()=>{
    if(isplay){
        onpause();
    } else{
        onplay();
    }
})

function onplay(){
    isplay = true;
    aud.play();
    img.classList.add("anime");
    pl.classList.replace("fa-play", "fa-pause")
}
function onpause(){
    isplay = false;
     aud.pause();
    img.classList.remove("anime");
    pl.classList.replace("fa-pause", "fa-play")
}












// hr.addEventListener("click" , function(){
//     aud.play();
//     img.classList.add("anime");
//     hr.classList.replace("fa-play", "fa-pause")
//     // console.log("ready")
    
// })
// hr.addEventListener("dblclick" , function(){
//     aud.pause();
//     img.classList.remove("anime");
//     // hr.classList.replace("fa-pause", "fa-paly")
// })