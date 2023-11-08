let base=parseFloat(prompt("Enter base number"));
let height=parseFloat(prompt("Enter height number"));

function trangileArea(b ,h){
        let area=(b*h)/2;
        return area;
}

console.log(trangileArea(base ,height));

let trangileAreaArrow=(b , h)=>{
            return (b*h)/2;
}

console.log(trangileAreaArrow(base , height))