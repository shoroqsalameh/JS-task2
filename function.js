/*Write a function named tellFortune that:
takes 4 arguments*/
/*function one*/

let name=prompt("Enter your partner name");
let location=prompt("Enter your place");
let child=prompt("Enter the number of your childern");
let job=prompt("Enter your job title");

function tellFortune(job,location,name,job){
       let str="You will be a  " +job + "in " +location +" , and married to "+name +" with " + child +" childern";
       console.log(str);}


/*function two
Write a function named calculateDogAge that:
takes 1 argument 
*/

let age=prompt("Enter number");
function calculateDogAge(age){
          let cal= age*7;
          let mess="Your doggie is" +cal +" years old in dog years!";
          return mess;
}

console.log(calculateDogAge(age));


/*function three  
Write a function named calculateSupply that:
takes 2 arguments
*/

let age2=prompt("Enter yout age");
let amount=prompt("Enter amount");
function calculateSupply(age , amount){
         let cal=(100-age)*365*amount;
         let strr="You will need"+call+" to last you until the ripe old age of 100"

}

console.log(calculateSupply(age2 ,amount));

/*function four 
rite a function called greet that:
takes 1 argument: name.
and it will return hello + name
*/

function greet(name){
    let mess2="hello" + name;
     console.log(mess2);
}

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
x is undfined.

function double(7) {
  return 2 * 7;
}
parameter must be a variable not value .
function double('7') {
  return 2 * 'x';
}
x undifined and parameters must a variable.
*/


/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}
*/ 
function double(x){
   return 2*x;
}
/*
functiondouble2 x)
return 2 * x;
}
*/
function double2(x){
      return 2*x;
}
/*
function (x) double3 {
  return 2 * x;

*/
function double3(x){
    return 2*x;
}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(num){
     let cub=num*num*num;
     return cub;
}


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(num1 , num2){
     let mul=num1*num2;
     return mul;
}

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age){
      var message="";
      if(age>=20)
      {
         message="Yes you can"
      }
      else {
          let x=20-age;
          message="please come back after "+x+" years to get one";
      }
      return message;
}

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(str1,str2){
         if(str1.length==str2.length)
         return true;
        else 
        return false;
}

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/


function largerNubmer(num1,num2){
          if(num1>num2)
          return num1;
        else
        return num2;
}

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNubmer(num1,num2,num3){
         var min=0;
        
               if(num1<=num2 && num1<=num3)
               {
                   min=num1;
               
               }
               else if(num2<=num1 && num2<=num3)
               {
                 min=num2;
               }
               else 
               {
                 min=num3;
               }
               return min;
         
}


/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string
*/



function shorterString(str1,str2,str3,str4,str5){
       
    let setstr=[str1,str2 ,str3,str4,str5];
    let min="";
    for(i=0 ;i<setstr.length;i++)
    {
        for(j=0;j<setstr.length;j++)
        {
          if(setstr[i].length<=setstr[j+1].length)
          {
                min=setstr[i];
                break;
          }
        }
    }

    return min;

   
}


/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string*/

function longerString(str1,str2,str3,str4,str5){
       
       let setstr=[str1,str2 ,str3,str4,str5];
       let max="";
       for(i=0 ;i<setstr.length;i++)
       {
           for(j=0;j<setstr.length;j++)
           {
             if(setstr[i].length>=setstr[j+1].length)
             {
                   max=setstr[i];
                   break;
             }
           }
       }

       return max;

      
}


/*
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd
*/

function isEven(number){
     if(number%2==0)
     return true;
    else 
    return false;
}

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(num){
        if(num%2!=0)
        return true;
    else 
    return false;
}

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(num){
        return Math.abs(num);
}

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(firstName,lastName){
        return firstName+" " +lastName;
}

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(n1,n2,n3,n4,n5){
      let avg=(n1+n2+n3+n4+n5)/5;
      return avg;
}

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
    return Math.random();
  }
  

  /*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversity(score){
    let degree="";
    if (score>=95 && score<=100){
         degree="A";
    } 
    else if (score>=85 && score<95) {
        degree="B";
    } 
    else if (score>=70 && score<85) {
        degree="C";
    } 
    else if (score>= 50 && score<70) {
        degree="D";
    } 
    else if (score>=0 && score<50) {
        degree="F";
    } 
    
    return degree;
  }
  
  /*
  23
  Write a function called counter
  that will returns a number bigger
  than the one that returnd before
  and start from 0
  
  Ex: counter()
  => 1
  
  Ex: counter()
  => 2
  
  Ex: counter()
  => 3
  
  */
  let count=0;
  
  function counter() {
      count++;
      return count;
  }
  