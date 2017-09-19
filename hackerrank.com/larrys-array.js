// https://www.hackerrank.com/challenges/larrys-array

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
  const T = parseInt(readLine());
  for (let t = 0; t < T; t++) {
    let n = parseInt(readLine());
    let a = readLine().split(' ').map(Number);
    let result = calcInversion(a, n);
    console.log(result % 2 === 0 ? 'YES' : 'NO');
  }
}

function calcInversion(a, n) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (a[j] > a[i]) res++;
    }
  }
  return res;
}