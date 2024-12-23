function gray() {
    document.querySelector("#gray");
    document.body.style.backgroundColor = "gray";
    document.body.style.color = "black";
}

function white() {
    document.querySelector("#white");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

function blue() {
    document.querySelector("#blue");
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "black";
}

function yellow() {
    document.querySelector("#yellow");
    document.body.style.backgroundColor = "yellow";
    document.body.style.color = "black";
}


document.querySelector("#gray").addEventListener("click", gray, false);
document.querySelector("#white").addEventListener("click", white, false);
document.querySelector("#blue").addEventListener("click", blue, false);
document.querySelector("#yellow").addEventListener("click", yellow, false);