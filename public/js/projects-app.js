const scrollable = document.querySelector(".scrollable");
const personalProjects = document.querySelector(".personalProjects");
const header = document.querySelector("header");

let lastPos = 0;
let observerOverride;
let scrollFlag = false;
const options = {
    root: null,
    threshold: 0.25
}

const observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry => {
        // console.log(entry.isIntersecting);
        entry.isIntersecting ? personalProjects.style.opacity = "0" : personalProjects.style.opacity = "1";
        if(entry.isIntersecting){
            observerOverride = false;
            personalProjects.style.opacity = "0";
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