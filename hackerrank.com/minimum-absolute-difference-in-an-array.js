// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array

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
  let n = parseInt(readLine());
  let a = readLine().split(' ').map(Number);
  a.sort();
  let diff = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < n; i++) {
    let curDiff = Math.abs(a[i] - a[i - 1]);
    if (curDiff < diff) diff = curDiff;
  }
  console.log(diff);
}