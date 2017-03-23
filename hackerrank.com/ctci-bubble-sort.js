// https://www.hackerrank.com/challenges/ctci-bubble-sort

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
  var n = parseInt(readLine());
  var a = readLine().split(' ').map(Number);
  var totalSwaps = 0;
  for (var i = 0; i < n; i++) {
    var numberOfSwaps = 0;
    for (var j = 0; j < n - 1; j++) {
      if (a[j] > a[j + 1]) {
        var temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        numberOfSwaps++;
        totalSwaps++;
      }
    }
    if (numberOfSwaps == 0) {
      break;
    }
  }
  console.log("Array is sorted in " + totalSwaps + " swaps.");
  console.log("First Element: " + a[0]);
  console.log("Last Element: " + a[n - 1]);
}