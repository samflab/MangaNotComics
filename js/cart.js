const increaseQuantity = document.querySelector(".increase-quantity");
const decreaseQuantity = document.querySelector(".decrease-quantity");
const quantityDiv = document.querySelector(".quantity-wt");
const priceDiv = document.querySelector(".price");
let count = 1;

const updateDiv = (count) => (quantityDiv.innerText = `${count}`);

increaseQuantity.addEventListener("click", () => {
  count++;
  updateDiv(count);
  decreaseQuantity.disabled = false;
  decreaseQuantity.style.backgroundColor = "black";
});

decreaseQuantity.addEventListener("click", () => {
  if (count <= 1) {
    decreaseQuantity.disabled = true;
    decreaseQuantity.style.backgroundColor = "gray";
  } else {
    count--;
    updateDiv(count);
    decreaseQuantity.disabled = false;
    decreaseQuantity.style.backgroundColor = "black";
  }
});
