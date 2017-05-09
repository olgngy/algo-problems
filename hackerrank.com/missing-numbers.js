// https://www.hackerrank.com/challenges/missing-numbers

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

const MAX_DIFF = 101;

function main() {
  let n = parseInt(readLine());
  let a = readLine().split(' ').map(Number);
  let m = parseInt(readLine());
  let b = readLine().split(' ').map(Number);
  let minValue = Number.MAX_SAFE_INTEGER;
  for (let el of b) {
    if (el < minValue) minValue = el;
  }
  let values = new Array(MAX_DIFF).fill(0);
  for (let el of b) {
    values[el - minValue]++;
  }
  for (let el of a) {
    values[el - minValue]--;
  }
  let lost = new Array();
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== 0) lost.push(i + minValue);
  }
  console.log(lost.join(' '));
}