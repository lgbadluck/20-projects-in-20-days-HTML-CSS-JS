const cards = document.querySelectorAll(".card");
window.addEventListener("scroll", animateCards);

function animateCards() {
    const checkingBottom = (window.innerHeight / 4) * (125/25);

    cards.forEach((singleCard) => {
        const cardTop = singleCard.getBoundingClientRect().top;
        let toSlideIn = cardTop < checkingBottom;

        if(toSlideIn) {
            singleCard.classList.add("slidingIn");
        } else {
            singleCard.classList.remove("slidingIn");
        }
    });
}