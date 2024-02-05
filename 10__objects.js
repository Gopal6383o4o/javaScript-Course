// singleton
// objects literals
//Object.create()
let mysym = Symbol("@")
let gopal ={
     name : "gopal",
     [mysym] : "guru@",
     age : 23 ,
     email : "gurudevgupta54@gmail.com",
     addres : "mathura"

} 
//console.log(gopal.email);
//console.log(gopal["name"]);
//console.log(gopal["age"]);
//console.log(gopal["email"]);
//console.log(gopal["addres"]);
//console.log(gopal[mysym]);

//Object.freeze(gopal)// freeze your data ,no change in future

gopal.email = "gopal@microsoft.com"
//console.log(gopal);

//function
gopal.greeting = function(){
     //console.log("hello gurudev gupta");
}
//console.log(gopal.greeting());

gopal.RATM = function(){
  //   console.log(`welcome JS user , ${this.name}`);
}
//console.log(gopal.RATM());


//  singleton
let tinder = new Object()  // singleton object
let tinder1 = {}           // non-singleton object
tinder.id = "123@guru"
tinder.name = "gurudev"
tinder.isloggedIn = false
//console.log(tinder);
//console.log(Object.keys(tinder));
//console.log(Object.values(tinder));
//console.log(Object.entries(tinder)); // entries has converted your data in arraya format...
//console.log(tinder.hasOwnProperty('name')); // find your key(output in boolean).
let shiv = {               
     email : "gopal@microsoft.com",
     name : {                        // create nested object{{{}}}
           fullname : {
               firstname: "gopal",
               lastname: "gupta"
          } 
     }
}
//console.log(shiv.name.fullname);

let obj1 ={1:"a",2:"b"}
let obj2 ={3:"c",4:"d"}
//let obj3 = Object.assign({},obj1,obj2) // using assign method  to add multiple object.
let obj4 = {...obj1,...obj2}    // using spread(three dot...) to add multiple object..
//console.log(obj4);

let gg = [
     {
          email:"gopal@microsoft.com",
          password:"pta na"
     },
     {
          firstname:"guru",
          lastname:"gupta"

     }
]
//console.log(gg);


// object distructured

let course= {
     js:"youtube",
     fee:"free"
}
let {fee:price} = course
console.log(price);