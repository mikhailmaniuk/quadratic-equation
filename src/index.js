module.exports = function solveEquation(equation) {
  const arr = equation.split(' ');
  const k = [];

  for (let i = 0, len = arr.length; i < len; i++) {
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


  
  // можно брать коэф сразу из arr
  let a = k[0],
      b = k[1],
      c = k[2];
      
  let d = (b * b) - (4 * a * c);
  let x1 = Math.round((-(b) + Math.sqrt(d)) / (2 * a));
  let x2 = Math.round((-(b) - Math.sqrt(d)) / (2 * a));

  let kArr = [x1, x2];
  kArr.sort(function(a , b){
    return a - b;
  })
  
  return kArr;

}
