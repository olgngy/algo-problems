// https://www.hackerrank.com/challenges/journey-to-the-moon

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
  let line = readLine().split(' ').map(Number);
  let n = line[0];
  let p = line[1];
  let g = new Array(n);
  for (let i = 0; i < n; i++) g[i] = new Array();
  for (let i = 0; i < p; i++) {
    line = readLine().split(' ').map(Number);
    let v1 = line[0];
    let v2 = line[1];
    g[v1].push(v2);
    g[v2].push(v1);
  }
  let used = new Array(n).fill(false);
  let size = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (used[i]) continue;
    size[i] = dfs(g, used, i);
  }
  let sum = size.reduce((a, b) => a + b);
  let result = 0;
  for (let i = 0; i < n; i++) {
    sum -= size[i];
    result += size[i] * sum;
  }
  console.log(result);
}

function dfs(g, used, s) {
  let res = 1;
  used[s] = true;
  for (let i = 0; i < g[s].length; i++) {
    let to = g[s][i];
    if (used[to]) continue;
    res += dfs(g, used, to);
  }
  return res;
}