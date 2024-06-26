var counterContainer = document.querySelector(".log");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount =
    Number(visitCount) + Math.floor(Math.random() * (12 - 3 + 1)) + 3;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = Math.floor(Math.random() * (12 - 3 + 1)) + 3;
  localStorage.setItem(
    "page_view",
    Math.floor(Math.random() * (12 - 3 + 1)) + 3
  );
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = Math.floor(Math.random() * (12 - 3 + 1)) + 3;
  localStorage.setItem(
    "page_view",
    Math.floor(Math.random() * (12 - 3 + 1)) + 3
  );
  counterContainer.innerHTML = visitCount;
});
