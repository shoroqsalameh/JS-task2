let numer=parseInt(prompt("enter number"));
function isPandigital(number){
        let str=number.toString();
        let co=0;
        for(i=0 ;i<str.length ;i++)
        {
                for(j=0 ;j<=9 ;j++)
                {
                    if(str[i]==j)
                    co++;
                }
        }
        return co;
}

function bool(num){
    let con=isPandigital(num);
        if(con>=10)
        return true;
    else return false;
}

console.log(numer);
