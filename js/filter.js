const filterBtn = document.querySelector(".filter");
const filterDiv = document.querySelector(".filter-div");

filterBtn.addEventListener("click", () => {
  if (filterDiv.style.display === "block") filterDiv.style.display = "none";
  else filterDiv.style.display = "block";
});
