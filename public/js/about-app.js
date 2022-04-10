function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function clearRadios(){
    radios.forEach(radio => {
        radio.style.backgroundColor = "transparent";
    });
}
function cumulativeOffset(element){
    var top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while(element);

    return {
        top: top,
        left: left
    };
};
const header = document.querySelector("header");
const quote = document.querySelector(".quote")
const butts = document.querySelectorAll(".blue li");
const radios = document.querySelectorAll(".radio");
const downIconBack = document.querySelector(".downIconBack");
const downIcon = document.querySelector(".downIcon");
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const sections = document.querySelectorAll("section");
const list = document.querySelector("nav ul");
const portrait = document.querySelector(".portrait");
const aboutText = document.querySelector(".aboutText");
const blob = document.querySelector(".blob");
const pseudoSection2 = document.querySelector(".pseudoSection2");
const body = document.querySelector("body");
const image = document.querySelector(".portrait img");
const imageCont = document.querySelector(".portrait");



let sectionOneInt = true;
let sectionTwoInt = false;
let stopLoop = false;
let buff = 0;
let buff1;
const quotes = [
    "<i>\“The most dangerous phrase in our language is ‘we have always done it this way.’\”</i><BR/> <b>-Grace Hopper </b>",
    "<i>\“Any man that can drive safely while kissing a pretty girl is simply not giving the kiss the attention it deserves.\”</i><BR/><b>-Albert Einstein</b>",
    "<i>\“Anything worth doing always starts as a bad idea.\”</i><BR/><b>-Leigh Bardugo<b>",
    "<i>\“Scientists dream of doing great things; engineers do them.\”</i><BR/><b>-James A. Michener</b>",
    "<i>\“Have I gone mad? I'm afraid so. You're entirely Bonkers. But I will tell you a secret, All the best people are.\”</i><BR/><b>-Alice in Wonderland</b>",
    "<i>\You can’t help people if you don’t know them, if you don’t know their values.</i>\”<BR/><b>-Lesley Omenge</b>",
    "<i>\“Nerds-we're the best lamest type of people you will ever meet.\”</i><BR/> <b>-Annette Velasco </b>",
    "<i>\“Me am robot man. Me do robot things. Me fix problem.\”</i><BR/><b>-Michael Reeves</b>",
    "<i>\“To believe blindly is to degenerate the human soul.\”</i><BR/><b>-Swami Vivekananda"
];
const pictures = [
    "Portrait1",
    "Portrait2",
    "Portrait3",
    "Portrait4",
    "Portrait5"
]
console.log(quotes.length);

let randQuote = getRandomInt(quotes.length);
let randPic = getRandomInt(pictures.length);
image.src = "images/portraits/"+pictures[randPic]+".jpg";
quote.innerHTML = quotes[randQuote];
function refreshRadios(){
    radios[randQuote].style.backgroundColor = "rgb(1,112,168)";
}
refreshRadios();
gsap.from(".qContainer", {
    opacity: 0,
    y: 100,
    duration: 1
});
gsap.from("nav", {
    opacity: 0,
    duration: 1
});
console.log(pseudoSection2.offsetWidth);
quote.addEventListener("mouseover", () =>{
    stopLoop = true;
});
quote.addEventListener("mouseleave", () =>{
    stopLoop = false;
});
radios.forEach(radio => {
    radio.addEventListener("click", () => {
        console.log(radio.id);
        randQuote = radio.id - 1;
        quote.style.opacity = "0"
        clearRadios();
        setTimeout(function(){
        quote.innerHTML = quotes[randQuote];
        quote.style.opacity = "1"
        refreshRadios();
    }, 250);
    });
});
quote.addEventListener("click", () =>
{
    randQuote = randQuote + 1;
    if(randQuote == (quotes.length)){
        randQuote = 0;
    }
    quote.style.opacity = "0"
    clearRadios();
    setTimeout(function(){
        quote.innerHTML = quotes[randQuote];
        quote.style.opacity = "1"
        refreshRadios();
    }, 250);
});
downIcon.addEventListener("mouseover", () => {
    downIcon.style.opacity = "0.7";
});
downIcon.addEventListener("mouseleave", () => {
    downIcon.style.opacity = "0.4";
});
downIcon.addEventListener("click", () => {
    section2.scrollIntoView({
        behavior: "smooth"
    });
});



const options = {
    root: null,
    threshold: 0.30
};
const observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry =>{
        console.log(entry);
        if (entry.target.className == "section1"){
            sectionOneInt = entry.isIntersecting;
        }
        else if (entry.target.className == "section2"){
            sectionTwoInt = entry.isIntersecting;
        }
        if (sectionOneInt == true && sectionTwoInt == false){
            list.classList.remove("black");
            list.classList.add("blue");
            header.style.opacity = "1";
            header.style.visibility = "visible";
            header.style.background = "rgb(192,246,248)";
        }
        else if (sectionOneInt == false && sectionTwoInt == false || sectionOneInt == true && sectionTwoInt == true){
            header.style.opacity = "0";
            header.style.visibility = "hidden";
            // header.classList.remove("background");
            header.style.background = "transparent";
        }
        else if (sectionTwoInt == true && sectionOneInt == false){
            header.style.background = "rgb(20,20,20)";
            list.classList.remove("blue");
            list.classList.add("black");
            // header.classList.add("background");
            header.style.opacity = "1";
            header.style.visibility = "visible";
            portrait.style.visibility = "visible";
            portrait.style.opacity = "1";
            portrait.style.transform = "none";
            aboutText.style.visibility = "visible";
            aboutText.style.opacity = "1";
        }
    });
}, options);
sections.forEach(section =>{
    observer.observe(section);
});

pseudoSection2.onmousemove = function(element){
    rect = pseudoSection2.getBoundingClientRect();
    blob.style.opacity = "1";
    blob.style.visibility = "visible";
    blob.style.transform = "translate(-50%, -50%) scale(1)";
    let posX = element.clientX;
    posY = element.clientY - rect.top;
    blob.style.top = posY+"px";
    blob.style.left = posX+"px";
}
section1.addEventListener('mouseover',function(){
    blob.style.opacity = "0";
    blob.style.visibility = "hidden";
    blob.style.transform = "translate(-50%, -50%) scale(0)"
    
});
section1.addEventListener('onmouseout',function(){
    blob.style.opacity = "1";
    blob.style.visibility = "visible";
    blob.style.transform = "translate(-50%, -50%) scale(1)";
    
});
portrait.addEventListener('mouseover',function(){
    blob.style.opacity = "0";
    blob.style.visibility = "hidden";
    blob.style.transform = "translate(-50%, -50%) scale(0)";
});
portrait.addEventListener('onmouseout',function(){
    blob.style.opacity = "1";
    blob.style.visibility = "visible";
    blob.style.transform = "translate(-50%, -50%) scale(1)";
});
body.onscroll = function(element){  
    // blob.style.opacity = "0";
    // blob.style.visibility = "hidden";
}

setInterval(function(){
    if(!stopLoop){
        randQuote = randQuote + 1;
        if(randQuote == (quotes.length)){
            randQuote = 0;
        }
        quote.style.opacity = "0"
        clearRadios();
        setTimeout(function(){
            quote.innerHTML = quotes[randQuote];
            quote.style.opacity = "1"
            refreshRadios();
        }, 250);
    }
    randPic = randPic + 1;
    if(randPic == (pictures.length)){
        randPic = 0;
    }
    image.style.opacity = "0";
    console.log(randPic);
    setTimeout(function(){
    image.src = "images/portraits/"+pictures[randPic]+".jpg";
    image.style.opacity = "1";
    }, 500);
    console.log("Quote Switch");
}, 10000);