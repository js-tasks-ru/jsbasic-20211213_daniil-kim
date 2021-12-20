function word(str) {
  let firstLetter = str[0];
  let upperFirstLetter = firstLetter.toUpperCase();
  let restWord = str.slice (1);
  str = upperFirstLetter + restWord;
  return str;
}

function ucFirst (str) {
if (str === '') {
return ''
} else {return word(str)
  }
}