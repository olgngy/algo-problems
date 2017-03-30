// https://www.hackerrank.com/challenges/ctci-big-o

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

const MAX_SQRT_N = Math.ceil(Math.sqrt(2000000000));

function main() {
  var p = parseInt(readLine());
  var primes = calcPrimes(MAX_SQRT_N);
  for (var i = 0; i < p; i++) {
    var n = parseInt(readLine());
    var result = checkPrime(n, primes);
    console.log(result ? "Prime" : "Not prime");
  }
}

function calcPrimes(n) {
  var sieve = new Array(n + 1);
  var primes = new Array();
  for (var i = 2; i <= n; i++) {
    if (sieve[i]) continue;
    primes.push(i);
    for (var j = i + i; j <= n; j += i) {
      sieve[j] = true;
    }
  }
  return primes;
}

function checkPrime(n, primes) {
  if (n === 1) return false;
  if (n === 2) return true;
  var sqrt = Math.ceil(Math.sqrt(n));
  for (var i = 0; i < primes.length; i++) {
    if (primes[i] > sqrt) break;
    if (n % primes[i] === 0) return false;
  }
  return true;
}