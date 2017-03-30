// https://www.hackerrank.com/challenges/ctci-lonely-integer

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
  var n = parseInt(readLine());
  var a = readLine().split(' ').map(Number);
  var result = 0;
  for (var i = 0; i < n; i++) {
    result ^= a[i];
  }
  console.log(result);
}