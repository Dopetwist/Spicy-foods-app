
const form = document.querySelector(".logreg-box");
const loginLink = document.querySelector(".link-in");
const registerLink = document.querySelector(".link-up");


registerLink.addEventListener("click", () => {
    form.classList.add("active");
});

loginLink.addEventListener("click", () => {
    form.classList.remove("active");
});

$(".navbar a").click(() => {
    alert("Please log in or Sign Up!");
});

$(".search button").click(() => {
    alert("Please log in or Sign Up!");
});