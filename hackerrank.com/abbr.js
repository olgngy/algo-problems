// https://www.hackerrank.com/challenges/abbr

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
  let q = parseInt(readLine());
  for (let i = 0; i < q; i++) {
    let a = readLine();
    let b = readLine();
    let dp = new Array(a.length + 1);
    for (let j = 0; j < a.length + 1; j++) dp[j] = new Array(b.length + 1);
    let success = solve(a, b, 0, 0, dp);
    console.log(success ? 'YES' : 'NO');
  }
}

function solve(str1, str2, pos1, pos2, dp) {
  if (dp[pos1][pos2] !== undefined) return dp[pos1][pos2];
  let result = false;
  if (pos2 === str2.length) result = checkTail(str1, pos1);
  else if (pos1 < str1.length) {
    if (str1[pos1].toUpperCase() === str2[pos2]) {
      result = solve(str1, str2, pos1 + 1, pos2 + 1, dp);
    }
    if (!result && !isUpperCase(str1[pos1])) {
      result = solve(str1, str2, pos1 + 1, pos2, dp);
    }
  }
  return dp[pos1][pos2] = result;
}

function checkTail(str, pos) {
  for (let i = pos; i < str.length; i++) {
    if (isUpperCase(str[i])) return false;
  }
  return true;
}

function isUpperCase(str) {
  return str === str.toUpperCase();
}