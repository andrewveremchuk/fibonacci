function fib() {
  var x = 1,
    y = 1;
  for (var i = 3; i <= n; i++) {
    var z = x + y;
    x = y;
    y = z;
  }
  return y;
}

var n = Number(prompt('Input n'));
var result = fib();
    document.write(result);