                    // Chapter 21-25 (STRING METHODS)

// Task no 01

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = (firstName + " " + lastName);
alert("Hello" + "," + " " + fullName + "!");

// Task no 02

var mobileName = prompt("Enter your favourite mobile phone model:");
var displayLength = mobileName.length;
document.write("My favourite phone is" + ":" + " " + mobileName);
document.write("<br>")
document.write("Length Of string is" + ":" + " " + displayLength);

// Task no 03

var str = "Pakistani"
var indexNum = str.indexOf("n");
document.write("String" + ":" + " " + str);
document.write("<br>")
document.write("Index of 'n'" + ":" + " " +  indexNum);

// Task no 04

var str_1 = "Hello World";
var indexNum = str_1.lastIndexOf("l")
document.write("String" + ":" + " " + str_1);
document.write("<br>")
document.write("Last index of 'l" + ":" + " " + indexNum);

// Task no 05

var str_2 = "Pakistani"
var char = str_2.charAt(3);
document.write("String" + ":" + " " + str_2);
document.write("<br>")
document.write("Character at index 3" + ":" + " " + char);

// Task no 06

var firstName_1 = prompt("Enter your first name");
var LastName_2 = prompt("Enter your last name");
var fullName_1 = firstName_1.concat(" " + LastName_2)
alert("Hello" + "," + " " + fullName_1 + "!");

// Task no 07

var city = "Hyderabad";
var replacement = city.replace("Hyder", "Islam");
document.write("City" + ":" + " " + city);
document.write("<br>")
document.write("After Replacement" + ":" + " " + replacement);

// Task no 08

var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacement_1 = message.replace(/and/g, "&");
document.write(replacement_1);

// Task no 09

var str_3 = "472";
var type = typeof(str_3);
document.write("Value" + ":" + " " + str_3 + "<br>");
document.write("Type" + ":" + " " + type + "<br>");
var value = Number(str_3);
document.write("Value" + ":" + " " + value + "<br>");
var type_1 = typeof (value);
document.write("Type" + ":" + " " + type_1);

// Task no 10

var inp = prompt("Enter any word:");
var capital = inp.toUpperCase();
document.write("User input" + ":" + " " + inp + "<br>");
document.write("Upper case" + ":" + " " + capital);

// Task no 11

var userInput = prompt("Enter any word ");
var copy = userInput.slice(0, 1);
var other_char = userInput.slice(1);
copy = copy.toUpperCase();
other_char = other_char.toLowerCase();
inp = copy + other_char;
document.write("User input" + ":" + " " + userInput + "<br>")
document.write("Title case" + ":" + " " + inp);

// Task no 12

var num = 35.36;
var withoutDot = num.toString().replace(".", "");
document.write("Number" + ":" + " " + num + "<br>")
document.write("Result" + ":" + " " + withoutDot)

// Task no 13

var userName=prompt("Enter your Input: ");
checkValidName(userName);
function checkValidName(un)
{
    var message;
    var split=[];
    var arr=[];
    for(var i=0;i<un.length;i++)
    {
        split[i]=un.split("&nbsp;");
        arr[i]=un.charCodeAt(i);
        if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
        {
                message="Correct User Name";
        }
        while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
        {
            alert("Please enter a valid Username");                                                                                                                   
            userName=prompt("Enter your Input: ");
            split[i]=un.split("&nbsp;");
            arr[i]=un.charCodeAt(i);
            if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
            {
                message="correct in";
                break;
            }
        }

    }
    alert(message);
}

// Task no 14

var sear = prompt("Enter your Choice");
const A = ["cake", "apple pie", "cookie", "chips", "patties"];

if(A.includes(sear.toLowerCase())){
   const i = A.indexOf(sear.toLowerCase());
   alert(`${sear} is available in our bakery at index ${i}`)
}
else{
   alert("We are sorry Item is not available in our bakery")
}

// Task no 15

var pas = prompt("Enter password");
var passw=  /^[A-Za-z]\w{7,14}$/;
if(pas.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}

// Task no 16

var university = "University of Karachi";
const c = university.split('');
c.forEach(t=> alert(t));

// Task no 17

var inp = prompt("Enter user input");
var lastChar = inp.charAt(inp.length - 1);
document.write("User input" + ":" + " " + inp + "<br>");
document.write("Last character of input" + ":" + " " + lastChar);

// Task no 18

var text = "The quick brown fox jumps over the lazy dog";

function countOcurrences(str, value) {
   var regExp = new RegExp(value, "gi");
   return (str.match(regExp) || []).length;
}

document.write("Text" + ":" + " " + text + "<br>");
document.write("There are" + " " + countOcurrences(text, 'the') + " " + "occurrence(s) of word 'the'");

                    // Chapter 26-30 (MATH METHODS)

// Task no 19

// a
var num = prompt("Enter any positive number");
document.write("number" + ":" + " " + num + "<br>");

// b
document.write("round off value" + ":" + " " + Math.round(num) + "<br>");

// c
document.write("floor value" + ":" + " " + Math.floor(num) + "<br>");

// d
document.write("ciel value" + ":" + " " + Math.ceil(num));

// Task no 20

// a
var num = prompt("Enter any negative number");
document.write("number" + ":" + " " + num + "<br>");

// b
document.write("round off value" + ":" + " " + Math.round(num) + "<br>");

// c
document.write("floor value" + ":" + " " + Math.floor(num) + "<br>");

// d
document.write("ciel value" + ":" + " " + Math.ceil(num));

// Task no 21

var num_1 = prompt("Ente a number");
var abs = Math.abs(num_1);
document.write("The absolute value of" + " " + num_1 + " " + "is" + " " + abs);

// Task no 22

var diceRoll_1 = Math.floor(Math.random() * 6 ) +1;
alert("random dice value" + ":" + " " + diceRoll_1);
var diceRoll_2 = Math.floor(Math.random() * 6 ) +1;
alert("random dice value" + ":" + " " + diceRoll_2);

// Task no 23

var coin_1 = Math.floor(Math.random() * 2) +1;
if(coin_1 == 1){
    alert(coin_1 + "\r\n" + "random coin value" + ":" + " " + "Heads")
}
else{
    alert((coin_1 + "\r\n" + "random coin value" + ":" + " " + "Tails"))
}
var coin_2 = Math.floor(Math.random() * 2) +1;
if(coin_1 == 1){
    alert(coin_2 + "\r\n" + "random coin value" + ":" + " " + "Heads")
}
else{
    alert((coin_2 + "\r\n" + "random coin value" + ":" + " " + "Tails"))
}

// Task no 24

var b = Math.floor((Math.random() * 100) + 1);
document.write("random number between 1 and 100" + ":" + " " + b)

// Task no 25

var weight = prompt("Enter your weight in kilograms");

// a
document.write("Your weight" + ":" + " " + parseInt(weight))

// b

document.write("Your weight" + ":" + " " + weight);

// c ,d
document.write("Your weight" + ":" + " " + parseFloat(weight));

// Task no 26

var secretNum = Math.floor((Math.random() * 10) + 1);
var userNum = +prompt("Enter any number between 1 to 10");
if (userNum === secretNum) {
   alert("Congratulations! You put appropriate number")
} 
else{
    alert("Try again!")
}

                    // Chapter 31-34 (DATE METHODS)

// Task no 27

var a = new Date();
document.write(a);

// Task no 28

var monthNames = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"];

var d = new Date();
alert("Current month" + ":" + " " + monthNames[d.getMonth()]);

// Task no 29

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var d = new Date();
alert("Today is" + " " + dayNames[d.getDay()]);

// Task no 30

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
if (nameOfToday == dayNames[0] || nameOfToday == dayNames[6]) {
   alert("It's Fun day")
} 
else {
    alert("It's working day");
}

// Task no 31

var now = new Date()
var theDate = now.getDate()
if(theDate >= 1 && theDate <= 15){
    alert("First fifteen days of the month")
}
else if (theDate > 15 && theDate <= 31){
    alert("Last days of the month")
}
else{
    alert("You put inappropriate Date")
}

// Task no 32

var startDate = "1970-1-1";
var timeDiff  = (new Date()) - (new Date(startDate));
var days      = timeDiff;
var days_1 = timeDiff / 1000;
document.write("Current date:" + " " + new Date() + "<br>")
document.write("Elapsed milliseconds since January 1, 1970:" + " " + days + "<br>")
document.write("Elapsed minutes since January 1, 1970:" + " " + days_1)

// Task no 33

var today = new Date();
if(today.getHours() == 0 || today.getHours() < 12 ) 
alert("It's AM");
else{
alert("It's PM")
}

// Task no 34

var laterDate = new Date(2020, 11, 31, 10, 33, 30, 0);
document.write("Later date" + ":" + " " + laterDate);

// Task no 35

var startDate = "2020-6-21";
var endDate   = "2020-4-25";
var timeDiff  = (new Date(startDate)) - (new Date(endDate));
var days      = timeDiff / (1000 * 60 * 60 * 24);
document.write(days + " " + "days have passed since 1st Ramadan, 2020");

// Task no 36

var startDate = "2015-1-1";
var timeDiff  = (new Date()) - (new Date(startDate));
var days_1 = timeDiff / 1000;
document.write("On reference date" + " " + new Date() + "," + "<br>" + days_1 + " " + "seconds had passed since begining of 2015")

// Task no 37

var d = new Date();
document.write( "current date" + ":" + " " + d +"<br>");
var b = d.getHours();
 d.setHours(b-1);
document.write( "1 hours ago, it was" + " " + d);

// Task no 38

var d = new Date();
document.write( "current date" + ":" + " " + d + "<br>");
var bd = d.getFullYear();
 d.setFullYear(bd-100);
document.write( "100 years back, it was" + " "  + d);

// Task no 39

var age = prompt("Enter your age:");
var currentYear = 2020;
var birthYear = currentYear - age;
document.write("Your age is" + " " + age + "<br>");
document.write("Your birth year is" + " " + birthYear);

// Task no 40

document.write("K-ELECTRIC BILL" + "<br>" + "<br>")
document.write("Customer name: Manzar" + "<br>");
var d = new Date();
document.write("Month: June" + "<br>");
var nunit = 410;
var cunits = 16;
document.write("Number of units: " + nunit + "<br>");
document.write("Charges per units: " + cunits + "<br>" + "<br>");
var net = 410*16;
var gross= net + 350;
document.write("Net Amount Payable (within Due Date): " + net + "<br>");
document.write("Late payment surcharge: 350 "  + "<br>");
document.write("Gross Amount Payable (after Due Date): " + gross);

                    // Chapter 35-38 (FUNCTION)

// Task no 41

function date(){
    var a = new Date()
    document.write(a)
}
date()

// Task no 42

function name(){
    var firstName = prompt("Enter first Name");
var lastName = prompt("Enter last Name");
var fullName;
fullName = firstName + " " + lastName;
alert("Welcome" + "," + " " + fullName + "!");
}
name();

// Task no 43

function add(a,b){
    var z = a + b
    return z
}
var g = add(5,8)
alert(g)

// Task no 44

function cal(num1,opr,num2){
    if(opr === "+"){
        return num1 + num2
    }
    else if(opr === "-"){
        return num1 - num2
    }
    else if(opr === "*"){
        return num1 * num2
    }
    else if(opr === "/"){
        return num1 / num2
    }
    else{
        return "You Put Inappropriate Operator"
    }
}

var result = cal(5,"+",5)
var result1 = cal(5,"-",5)
var result2 = cal(5,"*",5)
var result3 = cal(5,"/",5)
var result4 = cal(5,"%",5)

document.write("Addition" + ":" + " " + result + "<br>")
document.write("Subraction" + ":" + " " + result1 + "<br>")
document.write("Multuplication" + ":" + " " + result2 + "<br>")
document.write("Division" + ":" + " " + result3 + "<br>")
document.write("Alert!" + ":" + " " + result4)

// Task no 45

function squareIt(number) {
    return Math.pow(number, 2);
 }
 alert("The square of 5 is" + " " + squareIt(5));

// Task no 46

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
 }
 
 alert("The factorial of 5 is" + " " + factorial(5));

// Task no 47

Counting(1,10);
function Counting(num1,num2){
   const ele=  document.getElementById('e');
   for(var i=num1; i<= num2; i++){
      ele.innerHTML += i;
   }
}

// Task no 48

var base = prompt("Enter  Base");
var perp = prompt("Enter Perpendicular");
alert(calculateHypotenuse(base,perp));
function calculateHypotenuse(base,perp){
   return calculateSquare(base)+calculateSquare(perp);
}

function calculateSquare(x){
   return x*x;
}

// Task no 49

const W= 2;
const H= 3;
alert(CalculateArea(W,H));
function CalculateArea(W,H){
    return W*H;
}

// Task no 50

function check_Palindrome(str_entry){
    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
     var ccount = 0;
     if(cstr==="") {
        document.write("Nothing found!");
         return false;
     }
     if ((cstr.length) % 2 === 0) {
         ccount = (cstr.length) / 2;
     } else {
         if (cstr.length === 1) {
            document.write("Entry is a palindrome." + "<br>");
             return true;
         } else {
             ccount = (cstr.length - 1) / 2;
         }
     }
     for (var x = 0; x < ccount; x++) {
         if (cstr[x] != cstr.slice(-1-x)[0]) {
            document.write("Entry is not a palindrome." + "<br>");
             return false;
         }
     }
     document.write("The entry is a palindrome." + "<br>");
     return true;
 }
 check_Palindrome('madam');
 check_Palindrome('nurses run');
 check_Palindrome('fox');

// Task no 51

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));

// Task no 52

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(find_longest_word("Web Development Tutorial"));

// Task no 53

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write("The number occurence of 'o' is:" + " " + char_count("JSResourceS.com", "o"));

// Task no 54

function calcCircumference(radius){
    return 2 * 3.142 * radius
 }
 var circum = calcCircumference(3);
 document.write("The circumference is" + " " + circum);
 
 
 function calcArea(radius){
    return  3.142 * radius * radius
 }
 var calcarea = calcArea(5);
 document.write("The Area is" + " " + calcarea);