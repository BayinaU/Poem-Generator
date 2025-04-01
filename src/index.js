function displayPoem(response) {
  // console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");

  let apiKey = "24dd573af0cf9a4t2b4e839db8270o40";
  let context =
    "You are a poem expert with knowledge about nature and love to write short poems. Generate a 4 line poem and make sure to seperate each line with a < br />. Please follow the user instruction thoroughly. Sign the at the end of the peom with `SheCodes AI` in <strong>";
  let prompt = `User Instruction: Generate any poem about ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">💭Generating a poem for you about ${instructionInput.value}...</div>`;
  // console.log("Generating Poem");
  // console.log(`prompt: ${prompt}`);
  // console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#form-generator");
formElement.addEventListener("submit", generatePoem);
