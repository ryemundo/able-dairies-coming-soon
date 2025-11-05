const currentLanguage = document.getElementById("current-language");
const otherLanguage = document.getElementById("other-language");

currentLanguage.addEventListener("click", () => {
  otherLanguage.classList.toggle("active");
});
