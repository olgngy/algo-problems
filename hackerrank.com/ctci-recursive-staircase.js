// https://www.hackerrank.com/challenges/ctci-recursive-staircase

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

const MAX_N = 36;

function precalculate() {
  var dp = new Array(MAX_N + 1);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  for (var i = 4; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp;
}

function main() {
  var dp = precalculate();
  var s = parseInt(readLine());
  for(var a0 = 0; a0 < s; a0++){
    var n = parseInt(readLine());
    console.log(dp[n]);
  }
}