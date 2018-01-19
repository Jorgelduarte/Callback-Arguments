var words = ["ground", "control", "to", "major", "tom"];

function map(arr, callback) {
  var temp = [];
  arr.forEach(function(element){
    temp.push(callback(element));
  });
  console.log(temp);
}
map(words, function(word) {
    return word.length;
});

map(words, function(word) {
    return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
