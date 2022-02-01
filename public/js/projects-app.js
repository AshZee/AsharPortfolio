const scrollable = document.querySelector(".scrollable");
const personalProjects = document.querySelector(".personalProjects");
const header = document.querySelector("header");
const websiteLogoP = document.querySelector(".websiteLogo p");
const Ashar = document.querySelector(".Ashar");
const Alvany = document.querySelector(".Alvany");
const fountainPen = document.querySelector(".websiteLogo svg");
const sections = document.querySelectorAll("section");
const section1 = document.querySelector(".section1");
const test = document.querySelector(".testCircle");


var tl = gsap.timeline();
tl.from("nav", {opacity: 0, duration: 1});
tl.from(".sunSet > img", {opacity: 0, duration: 10}, "<50%");

const logoP = "ASHARALVANY";
const space = "&nbsp;";
let buff = "&lt;";
let buff1 = "/&gt;";
let buff2 = "";
let buff3 = 0;
let buff4 = "";
let lastPos = 0;
let observerOverride;
let logoChanged = false;
let scrollFlag = false;
window['value' + '1'] = "";
window[value1 + '2'] = 29;
console.log(452);
const options = {
    root: null,
    threshold: 0.2
}
function logoAnimation(){
    for(let i = 0; i < logoP.length; i++){
        if (i < 5){
            setTimeout(() =>{
                buff2 = buff2 + logoP[i];
                Ashar.innerHTML = buff2;
            }, 500 * i) //500
        }
        else if (i >= 5){
            setTimeout(() =>{
                buff4 = buff4 + logoP[i];
                Alvany.innerHTML = buff4;
            }, 500 * i) //500
            buff3 = i;
        }
    }
    
    setTimeout(() =>{
        rect = Ashar.getBoundingClientRect();
        rect1 = Alvany.getBoundingClientRect();
        fountainPen.style.left = ((Math.abs(rect1.left - rect.right)/2) + rect.right) + "px";
        test.style.left = ((Math.abs(rect1.left - rect.right)/2) + rect.right) + "px";
        fountainPen.style.opacity = "1";
    }, 500 * buff3); //500
}   

const observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry => {
        // entry.isIntersecting ? personalProjects.style.opacity = "0" : personalProjects.style.opacity = "1";
        if(entry.isIntersecting){
            console.log(entry.target.className);
            console.log("intersection");
            observerOverride = false;
            personalProjects.style.opacity = "0";
            eval(entry.target.className).style.opacity = "1";
            // console.log(toString(eval(entry.target.className).style.class = "1"));
            if (!logoChanged){
                logoAnimation();
                logoChanged = true;
            }
        }
        else{
            console.log(entry.target.className);
            console.log("no intersection");
            observerOverride = true;
            personalProjects.style.opacity = "1";
            header.style.opacity = "1";
            header.style.visbility = "visible";
        }
    });
}, options);
observer.observe(scrollable)
// window.addEventListener("scroll", () =>{
    //     let currentPos = window.pageYOffset;
    //     if(lastPos < currentPos && scrollFlag == false){
        //         header.style.opacity = "0";
        //         header.style.visbility = "hidden";
        //         scrollFlag = true;
        //         // console.log(scrollFlag + ' ' + (lastPos - currentPos));
        //     }
        //     else if(lastPos > currentPos && scrollFlag == true){
            //         header.style.opacity = "1";
            //         header.style.visbility = "visible";
            //         scrollFlag = false;
            //         // console.log(scrollFlag + ' ' + (lastPos - currentPos));  
            //     }
            //     lastPos = currentPos;
// });
window.addEventListener("scroll", Scroll, false);
function Scroll(){
    if(!observerOverride){
        let currentPos = window.pageYOffset;
        if(lastPos < currentPos && scrollFlag == false){
            header.style.opacity = "0";
            header.style.visbility = "hidden";
            scrollFlag = true;
            // console.log(scrollFlag + ' ' + (lastPos - currentPos));
        }
        else if(lastPos > currentPos && scrollFlag == true){
            header.style.opacity = "1";
            header.style.visbility = "visible";
            scrollFlag = false;
            // console.log(scrollFlag + ' ' + (lastPos - currentPos));  
        }
        lastPos = currentPos;
    }
}