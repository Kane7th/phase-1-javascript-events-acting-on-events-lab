const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4"; // Pink color
dodger.style.bottom = "0px";
dodger.style.left = "0px";

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) { // Prevent moving out of left boundary
    dodger.style.left = `${left - 10}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  const dodgerWidth = dodger.offsetWidth; 
  const containerWidth = dodger.parentElement ? dodger.parentElement.clientWidth : window.innerWidth;

  if (left + dodgerWidth < containerWidth) { // Prevent moving out of right boundary
    dodger.style.left = `${left + 10}px`;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
