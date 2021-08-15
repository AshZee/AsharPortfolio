let buff = 0;
const aboutBtn = document.querySelector(".aboutBtn");

document.querySelectorAll("nav ul li").forEach(element =>{
    if(buff != 0){
        element.addEventListener("mouseleave", () => {
            element.style.backgroundColor = "transparent";
        });
    }
    if (buff == 1){
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "rgb(28,32,61)";
        });
    }
    else if(buff == 2){
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "rgb(42,43,74)";
        });
    }
    else if(buff == 3){
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "rgb(54,53,85)";
        });
    }
    buff++;
});
document.querySelector(".btnContainer").addEventListener("mouseover", () => {
    aboutBtn.style.opacity = "1";
});
document.querySelector(".btnContainer").addEventListener("mouseleave", () => {
    aboutBtn.style.opacity = "0.5";
});
aboutBtn.addEventListener("mouseover", () =>{
    aboutBtn.style.transform = "translate(-50%, -50%) scale(1.1)";
});
aboutBtn.addEventListener("mouseleave", () =>{
    aboutBtn.style.transform = "translate(-50%, -50%) scale(1)";
});
var tl = gsap.timeline();
tl.from("nav", {opacity: 0, duration: 1});
tl.from(".name", {y: 100, duration: 1, ease: "bounce"}, "<25%");
tl.from(".name", {opacity: 0, duration: 1}, "<");
// tl.from(".titles ul", {y: 100, duration:1, ease: "bounce"}, "<25%");
tl.from(".titles ul li", {opacity: 0, duration: 1, stagger: 0.2}, "<75%");
tl.to(".aboutBtn", {opacity: 0.8, duration: 1}, "<%");
tl.to(".aboutBtn", {display: "flex", duration: 0}, "<0%");