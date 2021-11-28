// Sử dụng frequency counter
// Phương pháp tạo object dùng để so sánh giá trị bằng nhau của 2 mảng (2 item)
function validAnagram(string1, string2) {
  // if (string1.length !== string2.length) return;

  const counter = {};
  let mergeString = string1 + string2;
  for (const char of mergeString) {
    counter[char] = ++counter[char] || 1;
  }
  console.log(counter);
  for (const value in counter) {
    if (counter[value] % 2 !== 0) return console.log("false");
  }
  return console.log("true");
}
// Cách 2:
// function validAnagram(string1, string2) {
//   let sorted1 = string1.split("").sort().join("");
//   let sorted2 = string2.split("").sort().join("");
//   return console.log(sorted1 == sorted2);
// }
// Time complexity O(n), Space complexity O(1)
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana");
