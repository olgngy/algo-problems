// https://www.hackerrank.com/challenges/dijkstrashortreach

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

const INF = Number.MAX_SAFE_INTEGER;

function main() {
  const T = parseInt(readLine());
  for (let t = 0; t < T; t++) {
    let line = readLine().split(' ');
    let n = parseInt(line[0]);
    let m = parseInt(line[1]);
    let g = new Array(n);
    for (let i = 0; i < n; i++) g[i] = new Map();
    for (let i = 0; i < m; i++) {
      line = readLine().split(' ');
      let v1 = parseInt(line[0]) - 1;
      let v2 = parseInt(line[1]) - 1;
      let cost = parseInt(line[2]);
      let cur = g[v1].get(v2);
      if (cur === undefined || cost < cur) {
        g[v1].set(v2, cost);
        g[v2].set(v1, cost);
      }
    }
    let s = parseInt(readLine()) - 1;
    let result = dijkstra(g, s);
    console.log(result.join(" "));
  }
}

function dijkstra(g, s) {
  let n = g.length;
  let d = new Array(n).fill(INF);
  let used = new Array(n).fill(false);
  d[s] = 0;
  for (let i = 0; i < n; i++) {
    let v = -1;
    for (let j = 0; j < n; j++) {
      if (!used[j] && (v === -1 || d[j] < d[v])) v = j;
    }
    if (d[v] === INF) break;
    used[v] = true;
    for (let [to, cost] of g[v]) {
      if (d[v] + cost < d[to]) {
        d[to] = d[v] + cost;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (d[i] === INF) d[i] = -1;
  }
  d.splice(s, 1);
  return d;
}