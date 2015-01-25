//Coderbyte Question 3
//Longest Word

function LongestWord(sen) { 
  var i = sen.split(" ");
    i.sort(function(a, b) { 
      return b.length - a.length; 
    });
  return i[0];
}
