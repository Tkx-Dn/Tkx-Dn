const coordX = document.getElementById("coordX");
const coordY = document.getElementById("coordY");

document.addEventListener("mousemove", function(event) {
    coordX.textContent = event.clientX;
    coordY.textContent = event.clientY;
});
