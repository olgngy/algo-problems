// https://www.hackerrank.com/challenges/richie-rich

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
  let s = readLine();
  let number = new Array(n);
  for (let i = 0; i < n; i++) {
    number[i] = parseInt(s[i]);
  }
  let palindrome = new Array(n);
  let changes = 0;
  let l = 0, r = n - 1;
  while (l <= r) {
    if (l === r) {
      palindrome[l] = number[l];
      break;
    }
    if (number[l] !== number[r]) changes++;
    let maxDigit = Math.max(number[l], number[r]);
    palindrome[l] = palindrome[r] = maxDigit;
    l++;
    r--;
  }
  if (changes > k) {
    console.log(-1);
    return;
  }
  l = 0, r = n - 1;
  while (changes <= k && l <= r) {
    if (l === r) {
      if (changes < k && palindrome[l] < 9) {
        palindrome[l] = 9;
        changes++;
      }
    } else if (number[l] !== number[r]) {
      if (changes < k && palindrome[l] < 9) {
        palindrome[l] = palindrome[r] = 9;
        changes++;
      }
    } else if (changes + 2 <= k && palindrome[l] < 9) {
      palindrome[l] = palindrome[r] = 9;
      changes += 2;
    }
    l++;
    r--;
  }
  let result = palindrome.join('');
  console.log(result);
}