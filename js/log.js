var counterContainer = document.querySelector(".log");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 21;
  localStorage.setItem("page_view", 21);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 21;
  localStorage.setItem("page_view", 21);
  counterContainer.innerHTML = visitCount;
});
