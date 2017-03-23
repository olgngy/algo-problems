// https://www.hackerrank.com/challenges/ctci-making-anagrams

process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputRaw = "";
var inputLines;
var inputLineIdx = 0;

process.stdin.on('data', function(data) {
  inputRaw += data;
});

process.stdin.on('end', function() {
  inputLines = inputRaw.split("\n");
  main();    
});

function readLine() {
  return inputLines[inputLineIdx++];
}

/////////////// ignore above this line ////////////////////

function main() {
  var a = readLine();
  var b = readLine();
  var lettersA = lettersOccurences(a);
  var lettersB = lettersOccurences(b);
  var res = numberOfDifferences(lettersA, lettersB);
  console.log(res);
}

function numberOfDifferences(a, b) {
  var num = 0;
  for (var i = 0; i < a.length; i++) {
    num += Math.abs(a[i] - b[i]);
  }
  return num;
}

function lettersOccurences(str) {
  var table = new Array(26).fill(0);
  for (var i = 0; i < str.length; i++) {
    table[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  return table;
}