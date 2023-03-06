let answers = document.querySelectorAll(".question-card");

answers.forEach((event) => {
    event.addEventListener("click", () => {
        event.classList.toggle("active");
    });
});
