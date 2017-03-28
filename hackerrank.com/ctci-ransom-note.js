// https://www.hackerrank.com/challenges/ctci-ransom-note

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
  var m_temp = readLine().split(' ');
  var m = parseInt(m_temp[0]);
  var n = parseInt(m_temp[1]);
  var magazine = readLine().split(' ');
  var ransom = readLine().split(' ');
  var result = solution(m, n, magazine, ransom);
  console.log(result ? "Yes" : "No");
}

function solution(m, n, magazine, ransom) {
  if (m < n) {
    return false;
  }
  var vocabulary = buildVocabulary(magazine);
  for (var i = 0; i < ransom.length; i++) {
    var cnt = vocabulary.get(ransom[i]);
    if (cnt === undefined || cnt === 0) {
      return false;
    }
    vocabulary.set(ransom[i], cnt - 1);
  }
  return true;
}

function buildVocabulary(a) {
  var vocabulary = new Map();
  for (var i = 0; i < a.length; i++) {
    var cnt = vocabulary.get(a[i]);
    if (cnt === undefined) {
      cnt = 0;
    }
    vocabulary.set(a[i], cnt + 1);
  }
  return vocabulary;
}