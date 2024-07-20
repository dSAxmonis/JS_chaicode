// stack(primitive) , heap( non-primitive)
 
let myName = "Monis"
let otherName = myName
otherName = "manish"

console.log(otherName);
console.log(myName);

// primitive mai change nhi hota value copy hoke assign hoti hai 

let user ={
    email: "monis@s.com",
    upi: "monis010"
}

let user2 = user

user2.email = "hites@google.com"  // dono mai reference heap se ata hai to ek jagah change krne pe dono jagah change hoga

console.log(user.email);
console.log(user2.email);