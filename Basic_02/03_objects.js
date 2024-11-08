
const mySym = Symbol ("key1")

const jsUser = {
    name: "Abhi",
    "fullName" : "Abhishek Kumar",
    mySym: "myKey1",
    age: 19,
    email: "abhi@google.com",
    location: "Meerut",
    logIn: "True",
    lastLogIn: ["Monday", "Tuesday"]
}

console.log(jsUser.fullName);
console.log(jsUser["fullName"]);
console.log(jsUser.mySym);
console.log(typeof mySym);

jsUser.fullName = "karan kumar"
console.log(jsUser.fullName);


