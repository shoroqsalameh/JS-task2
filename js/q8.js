let firstName = prompt("Enter Your First Name");
let lastName = prompt("Enter Your Last Name");

function fullName(firstName, lastName) {
    let fullname = firstName + " " + lastName
    return fullname;
}


console.log(fullName(firstName,lastName));
