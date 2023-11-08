let numberMonth=parseFloat(prompt("Enter your birthday month number  | 2"));
let stringMonth="";
switch(numberMonth){
      case 1:
        stringMonth="January";
        break;
      case 2:
        stringMonth="February";
        break;
      case 3:
        stringMonth="March";
        break;
     case 4:
        stringMonth="April";
        break;
     case 5:
        stringMonth="May";
        break;
     case 6:
         stringMonth="Jun";
         break;
     case 7:
        stringMonth="July";
        break;
    case 8:
        stringMonth="August";
        break;
    case 9:
        stringMonth="September";
        break;
    case 10: 
    stringMonth="October";
    break;
    case 11:
         stringMonth="Novembor";
         break;
    case 12:
        stringMonth="December";
     break;
     default:
        stringMonth=NaN;
}

document.writeln("The input: "+ numberMonth +"<br>");
document.writeln("The Output "+ stringMonth +"<br>");
