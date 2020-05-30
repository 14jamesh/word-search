let wordUrl = "https://wordsapiv1.p.rapidapi.com/words/big";
let synonymUrl = "https://wordsapiv1.p.rapidapi.com/words/?/synonyms";

const promise = fetch(wordUrl, {
  method: "GET",
  headers: {
    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    "x-rapidapi-key": "9ed1e5b878msh72180c418a98cadp1f7f27jsnb907153c9f8b",
  },
});

promise
  .then(function (response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function (processedResponse) {
    console.log(processedResponse);
  });
