// https://www.hackerrank.com/challenges/ctci-array-left-rotation

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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ').map(Number);
    var result = new Array(n);
    for (var i = 0; i < n; i++) {
        var shift = (i + k) % n;
        result[i] = a[shift];
    }
    console.log(result.join(' '));
}