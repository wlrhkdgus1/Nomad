const body = document.querySelector("body");

function handleSize() {
    let widthValue = window.innerWidth;
    if(widthValue < 600) {
        body.className = "blue";
    } else if (widthValue > 850) {
        body.className = "yellow";
    } else {
        body.className = "gray"
    }
}

window.addEventListener("resize", handleSize);