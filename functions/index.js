//Functions for modifying the json response.
const listFunctions = {

  alphabet:"abcdefghijklmnopqrstuvwxyz",
  vowels:"aeiou",


  replaceConsonants: function(input){
    var mutated = "";
    var normalizedInput = input.toLowerCase();
    for(var i = 0; i<normalizedInput.length; i++){
      let currentChar = normalizedInput[i];
      if(this.alphabet.indexOf(currentChar) < 0){
        mutated += currentChar;
        continue;
      }
      let newChar = this.vowels.indexOf(currentChar) < 0 ? "_" : input[i];
      mutated += newChar;
    }
    return mutated;
  },

  replaceVowels: function(input){
    var mutated = "";
    var normalizedInput = input.toLowerCase();
    for(var i = 0; i<normalizedInput.length; i++){
      let currentChar = normalizedInput[i];
      if(this.alphabet.indexOf(currentChar) < 0){
        mutated += currentChar;
        continue;
      }
      let newChar = this.vowels.indexOf(currentChar) >= 0 ? "_" : input[i];
      mutated += newChar;
    }
    return mutated;
  },

  replaceMiddle: function(input){
    var mutated = "";
    var inputAsWords = input.split(" ");
    console.log("Input as words: ", inputAsWords);
    let mutatedWordsArray = inputAsWords.map((word)=>{
      let mutatedWord = word.split("").map((letter, index)=>{
        if((this.alphabet.indexOf(letter.toLowerCase()) < 0) || word.length < 3 ){
          return letter;
        } else if (index === 0 || index === word.length-1 ){
          return letter;
        } else {
          return "_";
        }
      })
      let mutatedWordAsString = mutatedWord.join("");
      console.log("mutated as string: ", mutatedWordAsString);
      return mutatedWordAsString;
    })
    mutated = mutatedWordsArray.join(" ");
    return mutated;
  },

  replaceByPercentage: function(input, percent){
    var mutated = "";
    var normalizedInput = input.toLowerCase();
    var inputWithoutSpaces = "";
    for(var i=0; i < normalizedInput.length; i++){
      if(this.alphabet.indexOf(normalizedInput[i]) >=0 ){
        inputWithoutSpaces += normalizedInput[i];
      } else {
        continue;
      }
    }
    var number = Math.ceil(percent/100 * (inputWithoutSpaces.length));
    var indexes = [];
    for(var i = 0; i < number; i++){
      let random = Math.floor((Math.random() * (normalizedInput.length)));
      let randomIndexChar = normalizedInput[random];
      if(indexes.indexOf(random) < 0 && this.alphabet.indexOf(randomIndexChar) >= 0 ) {
        indexes.push(random);
      } else {
        i--;
      }
    }
    for(var i = 0; i<normalizedInput.length; i++){
      let currentChar = normalizedInput[i];
      if(this.alphabet.indexOf(currentChar) < 0){
        mutated += currentChar;
        continue;
      }
      let newChar = indexes.indexOf(i) >= 0 ? currentChar : "_";
      mutated += newChar;
    }
    return mutated
  }



}

module.exports = listFunctions;
