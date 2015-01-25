//Coderbyte Question 1
//Reverse First

function FirstReverse(str) { 
  var x = '';
  for (var i = str.length -1; i >= 0; i--){
    x += str[i];
  }
  return x;
}
