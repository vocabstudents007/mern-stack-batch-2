let divElement = document.createElement("div");
divElement.innerText="Div here";
divElement.setAttribute("id","div-element");
// divElement.setAttribute("class","div-class container");
divElement.classList.add("div-class","container");
divElement.setAttribute("name","div-name");
// divElement.style.width = "100%";
// divElement.style.height = "100vh";
// divElement.style.display = "flex";
// divElement.style.justifyContent="center";
// divElement.style.alignItems="center";
// divElement.style.backgroundColor="#b15555";
// divElement.style.color="white";
// console.log(divElement);
// console.dir(divElement)

let parentElement = document.querySelector("#parent");
// parentElement.appendChild(divElement)
// parentElement.prepend(divElement)
// parentElement.innerHTML="<h1>hi</h1>"
// console.log(parentElement);

// let elementToBeRemoved = document.querySelector("#remove-id");
// elementToBeRemoved.remove();
// parentElement.removeChild(elementToBeRemoved);

// parentElement.removeChild(parentElement.lastElementChild)
        // <div class="box">Box 3</div>
let box = document.getElementsByClassName("box")[2];
let boxElement = document.createElement("div");
boxElement.setAttribute("class","box");
boxElement.innerText="Box new";

parentElement.replaceChild(boxElement,box);