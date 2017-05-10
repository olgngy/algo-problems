// https://www.hackerrank.com/challenges/grid-challenge

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

function solve() {
  const n = parseInt(readLine());
  let g = new Array(n);
  for (let j = 0; j < n; j++) {
    g[j] = readLine().split('');
    g[j].sort();
  }
  for (let j = 0; j < n; j++) {
    for (let k = 1; k < n; k++) {
      if (g[k - 1][j] > g[k][j]) return false;
    }
  }
  return true;
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let result = solve();
    console.log(result ? 'YES' : 'NO');
  }
}