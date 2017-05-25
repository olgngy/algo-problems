// https://www.hackerrank.com/challenges/common-child

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
  let a = readLine();
  let b = readLine();
  const N = a.length;
  let dp = new Array(2);
  dp[0] = new Array(N);
  dp[1] = new Array(N);
  let cur = 0, next = 1;
  for (let i = N - 1; i >= 0; i--) {
    for (let j = N - 1; j >= 0; j--) {
      let result = 0;
      if (i + 1 < N) result = dp[next][j];
      if (j + 1 < N) result = Math.max(result, dp[cur][j + 1]);
      if (a[i] === b[j]) {
        let nextResult = 0;
        if (i + 1 < N && j + 1 < N) nextResult = dp[next][j + 1];
        result = Math.max(result, nextResult + 1);
      }
      dp[cur][j] = result;
    }
    let tmp = cur;
    cur = next;
    next = tmp;
  }
  console.log(dp[next][0]);
}