const Dictionary = {};

function executeCall(userWord) {
  const promise = fetch(
    "https://lingua-robot.p.rapidapi.com/language/v1/entries/en/?".replace(
      "?",
      userWord
    ),
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "lingua-robot.p.rapidapi.com",
        "x-rapidapi-key": "9ed1e5b878msh72180c418a98cadp1f7f27jsnb907153c9f8b",
      },
    }
  );
  promise
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedResponse) {
      const lexemes = processedResponse["entries"][0].lexemes;
      Dictionary.audioUrl =
        processedResponse["entries"][0].pronunciations[1].audio.url; //holds the audio url

      Dictionary.definition = lexemes[0].senses[0].definition; //this holds the first definition coming in from the api

      // Dictionary.synonymArray = lexemes[1].synonymSets; //I need to loop through this and pull out all the synonyms
    });
}

document.querySelector(".submit-button").addEventListener("click", () => {
  const userWord = document.querySelector("#word").value;
  // if (userWord.length > 0) {
  executeCall(userWord.toLowerCase());
  window.setTimeout(handleDictionary, 800);
});

function handleDictionary() {
  displayWord();

  // displayAudioUrl();
}

const displayWord = function displayDefinition() {
  //grab user input and set first letter to uppercase
  userInput = document.querySelector("#word").value.toLowerCase();
  userInput = userInput.substring(0, 1).toUpperCase() + userInput.substring(1);
  //update word header with input value
  document.querySelector(".word-heading").textContent = userInput;
  //update word definition
  document.querySelector(".definition").textContent = Dictionary["definition"];
  document.querySelector(".word-container").style.display = "flex";
};

const init = function () {
  document.querySelector(".word-container").style.display = "none";
};

init();
