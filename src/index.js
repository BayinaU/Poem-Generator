function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "a beautiful poem",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#form-generator");
formElement.addEventListener("submit", generatePoem);
