const myButton = document.getElementById("_btn");
const myPopover = document.getElementById("_popover");
const closeButton = document.getElementById("_closeBtn");

myButton.addEventListener("click", () => {
    myPopover.classList.add("active");
});

closeButton.addEventListener("click", () => {
    myPopover.classList.remove("active");
});