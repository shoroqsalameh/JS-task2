let limit =parseFloat(prompt("Enter limit number : "));
let number=1;

for(i=1;i<=limit ;i++)
{
        for(j=1 ;j<=i ;j++)
        {
             document.writeln(number);
             number++;
        }
           document.write("<br>");
}
