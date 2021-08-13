const form = document.querySelector(".form");
const fullName = document.querySelector(".name");
const email = document.querySelector(".email");
const subject = document.querySelector(".subject");
const message = document.querySelector(".message");
const submit = document.querySelector(".submit");
const igIcon = document.querySelector(".igIcon");
const igInfo = document.querySelector(".igInfo");
const igInfoP = document.querySelector(".igInfo p");
const inIcon = document.querySelector(".inIcon");
const inInfo = document.querySelector(".inInfo");
const inInfoP = document.querySelector(".inInfo p");
const mailIcon = document.querySelector(".mailIcon");
const mailInfo = document.querySelector(".mailInfo");
const mailInfoP = document.querySelector(".mailInfo p");


var tl = gsap.timeline();
tl.from("nav", {opacity: 0, duration: 1});
tl.to("form",{opacity: 1, duration: 1}, "<25%");
tl.from("form",{y: 100, duration: 1, ease: "pow1"}, "<25%");
tl.to(".submit", {autoAlpha: 1, duration: 1})

igIcon.addEventListener("mouseover", () =>{
    igIcon.style.backgroundColor = "rgb(225,190,170)"
    igInfo.style.opacity = "1";
    igInfo.style.visibility = "visible";
    igInfo.style.width = "150px";
    igInfo.style.marginRight = "5px";
    igInfoP.style.display = "inline";
});
igIcon.addEventListener("mouseleave", () =>{
    igIcon.style.backgroundColor = "transparent"
    igInfo.style.opacity = "0";
    igInfo.style.visibility = "hidden";
    igInfo.style.width = "0";
    igInfo.style.margin = "0";
    igInfoP.style.display = "none";
});


inIcon.addEventListener("mouseover", () =>{
    inIcon.style.backgroundColor = "rgb(225,190,170)"
    inInfo.style.opacity = "1";
    inInfo.style.visibility = "visible";
    inInfo.style.width = "135px";
    inInfo.style.marginRight = "5px";
    inInfoP.style.display = "block";
});
inIcon.addEventListener("mouseleave", () =>{
    inIcon.style.backgroundColor = "transparent"
    inInfo.style.opacity = "0";
    inInfo.style.visibility = "hidden";
    inInfo.style.width = "0";
    inInfo.style.marginRight = "0";
    inInfoP.style.display = "none";
});


mailIcon.addEventListener("mouseover", () =>{
    mailIcon.style.backgroundColor = "rgb(225,190,170)"
    mailInfo.style.opacity = "1";
    mailInfo.style.visibility = "visible";
    mailInfo.style.width = "240px";
    mailInfo.style.marginRight = "5px";
    mailInfoP.style.display = "block";
});
mailIcon.addEventListener("mouseleave", () =>{
    mailIcon.style.backgroundColor = "transparent"
    mailInfo.style.opacity = "0";
    mailInfo.style.visibility = "hidden";
    mailInfo.style.width = "0";
    mailInfo.style.marginRight = "0";
    mailInfoP.style.display = "none";
});


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let formData = {
        fullName: fullName.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/contact');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == "Success"){
            alert("Email Sent");
            fullName.value = "";
            email.value = "";
            subject.value = "";
            message.value = "";
        }
        else{
            alert("OOPSIE WOOPSIE!! Uwu We made a fucky wucky!! A wittle fucko boingo! The code monkeys at our headquarters are working VEWY HAWD to fix this!");
        }
    }
    xhr.send(JSON.stringify(formData));

});