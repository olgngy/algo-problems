// https://www.hackerrank.com/challenges/luck-balance

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
  let line = readLine().split(' ');
  let n = parseInt(line[0]);
  let k = parseInt(line[1]);
  let important = new Array();
  let result = 0;
  for (let i = 0; i < n; i++) {
    line = readLine().split(' ');
    let luck = parseInt(line[0]);
    let importance = parseInt(line[1]);
    if (importance === 1) important.push(luck);
    else result += luck;
  }
  important.sort((a, b) => a < b ? -1 : (a > b ? 1 : 0));
  for (let i = 0; i < important.length; i++) {
    if (i < important.length - k) result -= important[i];
    else result += important[i];
  }
  console.log(result);
}