// Button events
let body = document.body;
let bodyColor = "light"
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",()=>{

    if(bodyColor == "dark"){
        body.classList.add("light");
        body.classList.remove("dark");
        bodyColor="light";
    }else if(bodyColor == "light"){
        body.classList.add("dark");
        body.classList.remove("light");
        bodyColor="dark";
    }
})

// btn1.onclick = () => console.log("Button clicked");
// btn1.ondblclick = () => console.log("Button double-clicked");
// btn1.onmouseover = () => console.log("Mouse over button");
// btn1.onmouseout = () => console.log("Mouse out from button");
// btn1.onmousemove = () => console.log("Mouse move on button");

// Input events
// let input1 = document.querySelector("#input1");

// input1.onkeydown = () => console.log("Key down in input");
// input1.onkeyup = () => console.log("Key up in input");
// input1.onkeypress = () => console.log("Key pressed in input");
// input1.onfocus = () => console.log("Input focused");
// input1.onblur = () => console.log("Input lost focus");
// input1.onchange = () => console.log("Input value changed");
// input1.oninput = () => console.log("Input value inputted");

// // Form events
// let form1 = document.querySelector("#form1");
// form1.onsubmit = (e) => { e.preventDefault(); console.log("Form submitted"); };
// form1.onreset = () => console.log("Form reset");

// // Div events
// let div1 = document.querySelector("#div1");
// div1.onmouseover = () => console.log("Mouse over div");
// div1.onmouseout = () => console.log("Mouse out from div");

// // Window events
// window.onload = () => console.log("Page loaded");
// window.onunload = () => console.log("Page unloaded");
// window.onresize = () => console.log("Window resized");
// window.onscroll = () => console.log("Window scrolled");
