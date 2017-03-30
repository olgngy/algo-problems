// https://www.hackerrank.com/challenges/ctci-fibonacci-numbers

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

function fibonacci(n) {
  var f1 = 0;
  var f2 = 1;
  for (var i = 2; i <= n; i++) {
    var temp = f1;
    f1 = f2;
    f2 = temp + f1;
  }
  return f2;
}

function main() {
  var n = parseInt(readLine());
  var result = fibonacci(n);
  console.log(result);
}
