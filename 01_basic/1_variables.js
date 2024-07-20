const accId = 1244   
let accEmail = "monis@hgams.com"
var accPass = "010"  // prefer not to use bcoz of issue in block and funtional scope 
accCity = "delhi"
let accState;  //bydefault give undefined

// accId = 123  not allowed 
// console.log(accId);  
accEmail = "alien@mail.com"
accPass = "786"
accCity = "up"


console.table([accId,accEmail,accPass,accCity, accState])