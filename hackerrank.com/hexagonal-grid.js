// https://www.hackerrank.com/challenges/hexagonal-grid

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
    let a = new Array(), b = new Array();
    let lineA = readLine(), lineB = readLine();
    for (let i = 0; i < lineA.length; i++) {
      let cA = lineA[i] !== "0";
      let cB = lineB[i] !== "0";
      a.push(cA);
      b.push(cB);
    }
    let result = solve(a, b, 0);
    console.log(result ? "YES" : "NO");
  }
}

function solve(a, b, pos) {
  if (pos === a.length) return checkBottom(b, pos);
  if (a[pos]) return solve(a, b, pos + 1);
  if (checkHorizontal(a, pos, pos + 1)) {
    a[pos] = a[pos + 1] = true;
    if (solve(a, b, pos + 2)) return true;
    a[pos] = a[pos + 1] = false;
  }
  if (checkLeftRight(a, b, pos)) {
    a[pos] = b[pos] = true;
    if (solve(a, b, pos + 1)) return true;
    a[pos] = b[pos] = false;
  }
  if (checkRightLeft(a, b, pos, pos - 1)) {
    a[pos] = b[pos - 1] = true;
    if (solve(a, b, pos + 1)) return true;
    a[pos] = b[pos - 1] = false;
  }
  return false;
}

function checkBottom(a, i) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]) continue;
    if (i + 1 === a.length || a[i + 1]) return false;
    i++;
  }
  return true;
}

function checkHorizontal(a, i, j) {
  if (i < a.length && j < a.length) {
    if (!a[i] && !a[j]) return true;
  }
  return false;
}

function checkLeftRight(a, b, i) {
  if (i < a.length) {
    if (!a[i] && !b[i]) return true;
  }
  return false;
}

function checkRightLeft(a, b, i, j) {
  if (i < a.length && j >= 0 && j < b.length) {
    if (!a[i] && !b[j]) return true;
  }
  return false;
}