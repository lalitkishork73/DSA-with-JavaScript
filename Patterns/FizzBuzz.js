let string = "";
for (let i = 1; i <= 100; i++) {
  let f = false;
  if (!f) {
    string += i;
    string += "\n";
  }
  if (i % 3 == 0) {
    string += "Fizz\n";
    f = true;
  }
  if (i % 5 == 0) {
    string += "Buzz\n";
    f = true;
  }
  if (i % 3 == 0 && i % 5 == 0) {
    string += "FizzBuzz\n";
    f = true;
  }
}
console.log(string);
