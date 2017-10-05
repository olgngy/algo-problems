// https://www.hackerrank.com/challenges/the-quickest-way-up

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

const N = 100;
const DICE_SIDES = 6;

function main() {
  const T = parseInt(readLine());
  for (let t = 0; t < T; t++) {
    let g = new Array(N - 1);
    for (let i = 0; i < N; i++) g[i] = new Array();
    let n = parseInt(readLine());
    for (let i = 0; i < n; i++) {
      let line = readLine().split(' ');
      let v1 = parseInt(line[0]) - 1;
      let v2 = parseInt(line[1]) - 1;
      g[v1].push(v2);
    }
    let m = parseInt(readLine());
    for (let i = 0; i < m; i++) {
      let line = readLine().split(' ');
      let v1 = parseInt(line[0]) - 1;
      let v2 = parseInt(line[1]) - 1;
      g[v1].push(v2);
    }
    for (let i = 0; i < N; i++) {
      if (g[i].length > 0) continue;
      for (let j = 1; j <= DICE_SIDES && i + j < N; j++) {
        g[i].push(i + j);
      }
    }
    let result = bfs(g, N - 1, 0);
    console.log(result);
  }
}

function bfs(g, n, s) {
  let used = new Array(n).fill(false);
  let q = new Array();
  let d = new Array(n).fill(0);
  q.push(s);
  used[s] = true;
  while (q.length > 0) {
    let v = q.shift();
    for (let i = 0; i < g[v].length; i++) {
      let to = g[v][i];
      if (!used[to]) {
        used[to] = true;
        q.push(to);
        d[to] = d[v];
        if (to - v <= DICE_SIDES && to - v > 0) d[to]++;
      }
    }
  }
  return used[n] ? d[n] : -1;
}