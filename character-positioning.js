function characterPosition(text) {
  text = text.toLowerCase();
  var letterPositions = {};

  for (var i = 0; i < text.length; i++) {
    var currentLetter = text[i];
    if (currentLetter !== " ") {
      if (letterPositions[currentLetter]) {
        letterPositions[currentLetter].push(i);
      } else {letterPositions[currentLetter] = [i];}
    }

  }

  return letterPositions;
}

console.log(characterPosition("lighthouse in the house"));