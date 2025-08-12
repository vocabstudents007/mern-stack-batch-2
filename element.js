let divElement = document.createElement("div");
divElement.innerText="Div here";
divElement.setAttribute("id","div-element");
// divElement.setAttribute("class","div-class container");
divElement.classList.add("div-class","container");
divElement.setAttribute("name","div-name");
divElement.style.width = "100%";
divElement.style.height = "100vh";
divElement.style.display = "flex";
divElement.style.justifyContent="center";
divElement.style.alignItems="center";
divElement.style.backgroundColor="#b15555";
divElement.style.color="white";
console.log(divElement);
console.dir(divElement)

document.body.appendChild(divElement);
