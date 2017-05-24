// https://www.hackerrank.com/challenges/password-cracker

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
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let n = parseInt(readLine());
    let passwords = readLine().split(' ').map(String);
    let login = readLine();
    let sequence = new Array();
    let visited = new Array(login.length).fill(false);
    let success = solve(0, login, passwords, sequence, visited);
    console.log(success ? sequence.reverse().join(' ') : "WRONG PASSWORD");
  }
}

function solve(k, s, words, sequence, visited) {
  if (k === s.length) return true;
  if (visited[k]) return false;
  for (let word of words) {
    if (isSubstring(s, k, word)) {
      if (solve(k + word.length, s, words, sequence, visited)) {
        sequence.push(word);
        return true;
      }
    }
  }
  visited[k] = true;
  return false;
}

function isSubstring(str1, pos, str2) {
  for (let i = 0; i < str2.length; i++) {
    if (str1[pos + i] !== str2[i]) return false;
  }
  return true;
}