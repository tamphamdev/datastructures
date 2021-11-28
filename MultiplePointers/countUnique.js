function countUniqueValues(array) {
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    let left = array[i];
    let right = array[j];
    if (left !== right) {
      i++;
      array[i] = array[j];
    }
  }
  return console.log("test", i + 1);
}

// countUniqueValues([1, 1, 1, 2]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
