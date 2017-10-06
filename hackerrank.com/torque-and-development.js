// https://www.hackerrank.com/challenges/torque-and-development

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
    let line = readLine().split(' ');
    let n = parseInt(line[0]);
    let m = parseInt(line[1]);
    let costLib = parseInt(line[2]);
    let costRoad = parseInt(line[3]);
    let g = new Array(n);
    for (let i = 0; i < n; i++) g[i] = new Array();
    for (let i = 0; i < m; i++) {
      line = readLine().split(' ');
      let v1 = parseInt(line[0]) - 1;
      let v2 = parseInt(line[1]) - 1;
      g[v1].push(v2);
      g[v2].push(v1);
    }
    let result = 0;
    if (costRoad >= costLib) {
      result = costLib * n;
    } else {
      let used = new Array(n).fill(false);
      for (let i = 0; i < n; i++) {
        if (used[i]) continue;
        let size = dfs(g, used, i);
        result += costLib + (size - 1) * costRoad;
      }
    }
    console.log(result);
  }
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