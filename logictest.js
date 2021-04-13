const words = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];

function string_sort(str) {
  var i = 0,
    j;
  while (i < str.length) {
    j = i + 1;
    while (j < str.length) {
      if (str[j] < str[i]) {
        var temp = str[i];
        str[i] = str[j];
        str[j] = temp;
      }
      j++;
    }
    i++;
  }
  return str;
}
const groupSimilarWords = (arr = []) => {
  if (arr.length === 0) {
    return arr;
  }
  let result = {};
  for (let str of arr) {
    let sorted = [...str];
    sorted = string_sort(sorted).join("");
    if (result[sorted]) {
      result[sorted].push(str);
    } else {
      result[sorted] = [str];
    }
  }
  return Object.values(result);
};
console.log(groupSimilarWords(words));
