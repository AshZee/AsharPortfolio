const scrollable = document.querySelector(".scrollable");
const personalProjects = document.querySelector(".personalProjects");
const header = document.querySelector("header");
const websiteLogoP = document.querySelector(".websiteLogo p");
const Ashar = document.querySelector(".Ashar");
const Alvany = document.querySelector(".Alvany");
const fountainPen = document.querySelector(".websiteLogo svg");

console.log(header.offsetWidth);

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
const options = {
    root: null,
    threshold: 0.25
}
function logoAnimation(){
    for(let i = 0; i < logoP.length; i++){
        if (i < 5){
            setTimeout(() =>{
                buff2 = buff2 + logoP[i];
                Ashar.innerHTML = buff2;
                console.log(buff2)
            }, 500 * i)
        }
        else if (i >= 5){
            setTimeout(() =>{
                buff4 = buff4 + logoP[i];
                Alvany.innerHTML = buff4;
                console.log(buff4)
            }, 500 * i)
            buff3 = i;
        }
    }

    setTimeout(() =>{
        rect = Ashar.getBoundingClientRect();
        rect1 = Alvany.getBoundingClientRect();
        fountainPen.style.left = ((Math.abs(rect.right - rect1.left)/2) + rect.left + Ashar.offsetWidth)+ "px";
        console.log((Math.abs(rect.right - rect1.left) + rect.left + Ashar.offsetWidth)+ "px");
        fountainPen.style.opacity = "1";
    }, 500 * buff3);
}   

const observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry => {
        // console.log(entry.isIntersecting);
        entry.isIntersecting ? personalProjects.style.opacity = "0" : personalProjects.style.opacity = "1";
        if(entry.isIntersecting){
            observerOverride = false;
            personalProjects.style.opacity = "0";
            if (!logoChanged){
            logoAnimation();
            logoChanged = true;
            }
        }
        else{
            observerOverride = true;
            personalProjects.style.opacity = "1";
            header.style.opacity = "1";
            header.style.visbility = "visible";
        }
    });
}, options);
observer.observe(scrollable);

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