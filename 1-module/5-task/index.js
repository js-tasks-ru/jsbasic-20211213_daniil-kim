function truncate(str, maxlength) {
  let strLenght = str.length;
  if (strLenght > maxlength) {
    let sliceStr = str.slice(0, maxlength - 1);
    let slicedStr = sliceStr + '…';
    return slicedStr;
  } else {
    return str;
  }
}
