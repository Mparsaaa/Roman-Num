const chooseInput = +prompt("1: Roman to Integer\n2: Integer to Roman");

const romanHash = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function romanOrIntGenerate(number) {
  if (number === 1) {
    let resaultNumber = 0;
    const romanNumber = prompt("Please Enter The Roman Number:").toUpperCase();
    for (let i = 0; i < romanNumber.length; i++) {
      //--> If there is a double character in the string that is present in the object
      if (romanHash[romanNumber[i] + romanNumber[i + 1]]) {
        //--> double character
        resaultNumber += romanHash[romanNumber[i] + romanNumber[i + 1]];
        i++;
      } else {
        resaultNumber += romanHash[romanNumber[i]];
      }
    }
    return resaultNumber;
  }
  if (number === 2) {
    let resaultRoman = "";
    let numberInput = +prompt("Please Enter The Number:");
    for (const key in romanHash) {
      while (numberInput >= romanHash[key]) {
        resaultRoman += key;
        numberInput -= romanHash[key];
      }
    }
    return resaultRoman;
  }
  return false;
}

console.log(romanOrIntGenerate(chooseInput));
