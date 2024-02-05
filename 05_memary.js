// Stack (Primitive{copy}), Heap(Non-Primitive{referance})

let myname = "gopalgupta.com"

let anothername = myname
anothername = "gurudev.com"

console.log(myname);
console.log(anothername);


let userone ={
    email: "userone.com",
     upi :  "user@ypl"
    }

let usertwo = userone
usertwo.email = "gopal@google.com"

console.log(userone.email);
console.log(usertwo.email);