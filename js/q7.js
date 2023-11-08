let drink=prompt("Enter your favorite drink");
switch(drink){
      case drink.toLowerCase =="banana":
        document.writeln("The price of a banana drink is 20 dollars");
        break;
      case drink.toLowerCase=="apple":
        document.writeln("The price of a apple drink is 10 dollars");
        break;
      case drink.toLowerCase=="orange":
        document.writeln("The price of a orange drink is 15 dollars");
        break;
       default:
        document.writeln("non");
}