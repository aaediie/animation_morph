
const moonPath = 
  "M10.5 23.5C10.5 36.4787 24.8995 47 24.5 47C10.969 47 0 36.4787 0 23.5C0 10.5213 10.969 0 24.5 0C24.5 1.5 10.5 10.5213 10.5 23.5Z";
const sunPath = 
  "M49 23.5C49 36.4787 38.031 47 24.5 47C10.969 47 0 36.4787 0 23.5C0 10.5213 10.969 0 24.5 0C38.031 0 49 10.5213 49 23.5Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

//we need to click onthe sun

darkMode.addEventListener('click', ()=>{
// we need to use anime.js
const timeline = anime.timeline({
    duration : 800,
    easing : "easeOutExpo"
});

//Add different animations to the timeline  
    timeline.add({
        targets:".sun",
        d: [
            {value: toggle ? sunPath : moonPath}
        ]
    })
    .add({
        targets : '#darkMode',
        rotate : 313
    }, "-= 400")
    .add({
        targets: "section",
        backgroundColor : toggle ? 'rgb(255,255,255)' : "rgb(22,22,22)",
        color : toggle ? "rgb(255,255,255)" : "rgb(255,255,255)"
    } , "-=700");
//everytime we click on sun we toggle it
    if(!toggle){
        toggle = true;
    }else{
        toggle = false;
    }
});