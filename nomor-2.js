function checkTypeNumber(givenNumber) {
  if (givenNumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(7));
