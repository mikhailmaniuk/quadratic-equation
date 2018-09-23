module.exports = function solveEquation(equation) {
  var arr = equation.split(' ');
  var k = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'x^2') {
      k.push(arr[i - 2]);
      if(arr[i + 1] === '-') {
        k.push(arr[i + 1] + arr[i + 2]);
      } else {
        k.push(arr[i + 2]);
      }
    }
    if (arr[i] === 'x') {
      if(arr[i + 1] === '-') {
        k.push(arr[i + 1] + arr[i + 2]);
      } else {
        k.push(arr[i + 2]);
      }
    }
  }

  var a = k[0];
  var b = k[1];
  var c = k[2];
  var d = (b*b) - (4 * a * c);
  var x1 = Math.round((-(b) + Math.sqrt(d)) / (2 * a));
  var x2 = Math.round((-(b) - Math.sqrt(d)) / (2 * a));

  var kArr = [x1, x2];
  kArr.sort(function(a , b){
    return a - b;
  })
  
  return kArr;

}
