// https://www.hackerrank.com/challenges/kruskalmstrsub

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

let parent = new Array();

function main() {
  let line = readLine().split(' ').map(Number);
  let n = line[0];
  let m = line[1];
  let g = new Array(m);
  for (let i = 0; i < m; i++) g[i] = new Array();
  for (let i = 0; i < m; i++) {
    line = readLine().split(' ').map(Number);
    let v1 = line[0] - 1;
    let v2 = line[1] - 1;
    let r = line[2];
    g[i] = [r, [v1, v2]];
  }
  g.sort((a, b) => a[0] > b[0] ? 1 : -1);
  let result = kruskal(g, n, m);
  console.log(result);
}

function dsuGet(v) {
  return v === parent[v] ? v : parent[v] = dsuGet(parent[v]);
}

function dsuUnite(a, b) {
  a = dsuGet(a);
  b = dsuGet(b);
  if (Math.random() > 0.5) {
    [a, b] = [b, a];
  }
  if (a !== b) {
    parent[a] = b;
  }
}

function kruskal(g, n, m) {
  let res = 0;
  for (let i = 0; i < n; i++) parent[i] = i;
  for (let i = 0; i < m; i++) {
    let a = g[i][1][0];
    let b = g[i][1][1];
    let r = g[i][0];
    if (dsuGet(a) !== dsuGet(b)) {
      res += r;
      dsuUnite(a, b);
    }
  }
  return res;
}
