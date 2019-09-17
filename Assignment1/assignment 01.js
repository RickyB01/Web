/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: Ricky Badyal Student ID: 020028098 Date: 2018-09-25
*
********************************************************************************//*
/*****************************
* Task 1
*****************************/

var Studentname = 'Ricky Badyal';
var numberofcrouses = 5;
var program = 'Computer Programming and Analysis';
var HavingApartTimeJob = false;
var partTimeJob = (HavingApartTimeJob) ? 'have' :'don\'t have';

console.log ('My name is ' +Studentname+ ' and Im in the ' +program+ ' program.\nIm taking ' +numberofcrouses+ ' courses this semester.\nAnd I '+partTimeJob+ ' a part-time job now.\n');


/*****************************
* Task 2 Birth and Graduate Year
******************************/
var currentYear = (new Date().getFullYear());
var Age = prompt('Please Enter your age:');
var yearBorn = currentYear - parseInt(Age);
var Yearsofstudy = prompt('Enter the number of years you expect you study in the college: \n');
var graduateYear = currentYear + parseInt(Yearsofstudy);

console.log ('You were born in the year of ' +yearBorn+ '.\n');
console.log ('You will graduate from Seneca college in the year of '+graduateYear+ '.\n');


/******************************
* Task 3 Celsius and Fahrenheit temperatures
*****************************/

var  CelsiusTemperature = 34.0;
var  FahrenheitTemperature  = CelsiusTemperature * (9.0/5.0) + 32;

console.log(CelsiusTemperature +'°C '+ FahrenheitTemperature + '°F\n');

var FahrenheitTemperature = 67
var CelsiusTemperature = (FahrenheitTemperature -32) * (5.0/9.0);

console.log( FahrenheitTemperature +'°F '+ CelsiusTemperature + '°C\n');


/*****************************
* Task 4  Even and Odd 
******************************/

var e = 0;

for (e = 0; e<=10; e++)
{

  if (e%2 !=0)
{

 console.log(e+' is odd');

}
}

/*****************************
* Task 5
*****************************/

/* Declaration Approach/Method: */


function largerNum(number1,number2)
{
  if (number1>=number2) {
return number1;
 }
   else
   {

    return number2;
  
   }
}


/* Expression Approach/Method*/

var greaterNum = function(number1,number2)
{

if (number1>=number2)
{
return number1;
} 

else
  {

  return number2;
  
    }
}

var number1 = prompt('Enter first number: ');
var number2 = prompt('Enter second number: ');

Rnum = largerNum(number1,number2);
console.log('\nThe larger number of ' +number1 + ' and ' +number2+ ' is ' +largerNum(number1,number2));

Jnum = greaterNum(number1,number2);
console.log('\nThe greater number of ' +number1 + ' and ' +number2+ ' is ' +greaterNum(number1,number2)); 

var number3 = prompt('Enter a third number: ');
var number4 = prompt('Enter a fourth number: ');

Rnum = largerNum(number3,number4);
console.log('\nThe larger number of ' +number3 + ' and ' +number4+ ' is ' +largerNum(number3,number4));

Jnum = greaterNum(number3,number4);
console.log('\nThe greater number of ' +number3 + ' and ' +number4+ ' is ' +greaterNum(number3,number4)); 


/*****************************
* Task 6
******************************/


function Evaluator (){

var rb= 0;

for (var i =0; i<arguments.length; i++){

  rb +=arguments[i];
}
 rb /= i
if (rb >= 50)
  return true;
  else
  return false;
}

console.log( "\nAverage greater than or equal to 50: "+Evaluator(200,123,44,59));
console.log( "\nAverage gerater than or equal to 50: "+Evaluator(29,31,12,44));
console.log( "\nAverage greater than or equal to 50: "+Evaluator(24,22,192,130));

/*****************************
* Task 7
******************************/
   function grader(g) 
{
 if (g <= 100 && g >= 90)
    var grade = "A+"

else if (g <=89 && g >= 80)
      var grade = "A"
  
else if (g <=79  && g >=75)
      var grade = "B+"

else if (g <=74 && g >=70)
      var grade = "B"

else if (g <=69 && g >=65)
      var grade = "C+"

 else if (g <= 64 && g >=60)         
      var grade = "C"

else if (g <=59 && g >=55)         
      var grade = "D+"     
               

else if (g <=54 && g >=50)         
      var grade = "D"

else  
    var grade =  "F"   

return grade;
}


var ygrade1 = prompt("Enter your first mark: ");
var ygrade2 = prompt("Enter your second mark: ");
var ygrade3 = prompt("Enter your third mark: ");



console.log ("\nYour first grade  is : "+grader(ygrade1));
console.log ("\nYour second grade is : "+grader(ygrade2));
console.log ("\nYour third grade is : "+grader(ygrade3));

/*****************************
* Task 8
*****************************/


function showMultiples (num, numMultiples) {

for (i = 1;  i <=numMultiples; i++ ){

  console.log("\n" +num + " x " + i + " = "+ (num*i));
 }

}

showMultiples(5, 4);
showMultiples(6, 4);
showMultiples(8, 4);

