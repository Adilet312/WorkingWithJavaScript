var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

function subtract(n1,n2){
  return(n1-n2);
}
var n1=parseFloat(prompt("Insert Number"));
var n2=parseFloat(prompt("Insert Number"));
alert (subtract(n1,n2));

function multiply(number1,number2)
{
  var result=number1*number2;
  return result;
}

var number1=parseFloat(prompt("Insert Number "));
var number2=parseFloat(prompt("Insert another  Number"));
var result = multiply(number1,number2);
alert(result);
