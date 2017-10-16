var convertUnit = function(number1) {
 return ((number1*3.78541));
};

var number1 = parseFloat(prompt("Enter quantity in Gallons"));
var result = convertUnit(number1);

alert(result);
