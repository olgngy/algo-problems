// https://www.hackerrank.com/challenges/separate-the-numbers

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

function allNines(str) {
  for (let c of str) {
    if (c !== '9') return false;
  }
  return true;
}

function increment(str) {
  const n = str.length;
  let d = new Array(n);
  for (let i = 0; i < n; i++) {
    d[i] = str.charCodeAt(i) - '0'.charCodeAt(0);
  }
  let carry = 1;
  let idx = n - 1;
  while (idx >= 0 && carry) {
    d[idx] += carry;
    if (d[idx] === 10) {
      d[idx] = 0;
    } else {
      carry = 0;
    }
    idx--;
  }
  if (carry) {
    d.unshift(1);
  }
  return d.join('');
}

function solve(s) {
  if (s[0] === '0') return null;
  for (let digits = 1; digits <= s.length / 2; digits++) {
    let localDigits = digits;
    let p0 = 0;
    while (p0 + 2 * localDigits <= s.length) {
      let str = s.substr(p0, localDigits);
      let p1 = p0 + localDigits;
      if (allNines(str)) {
        localDigits++;
      }
      if (p1 + localDigits > s.length) break;
      let next = s.substr(p1, localDigits);
      if (next[0] === '0' || increment(str) !== next) break;
      if ((p1 + localDigits) === s.length) {
        return s.substr(0, digits);
      }
      p0 = p1;
    }
  }
  return null;
}

function main() {
  let q = parseInt(readLine());
  for (let i = 0; i < q; i++) {
    let s = readLine();
    let answer = solve(s);
    console.log(answer !== null ? 'YES ' + answer : 'NO');
  }
}