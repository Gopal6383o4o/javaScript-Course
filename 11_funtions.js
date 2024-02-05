function myfun(num1,num2){
  //  console.log(num1+num2);
}
myfun(3,7)

function yourfun(num3,num4){
   // let result = num3+num4
   //return result
    return num3+num4
}
let result = yourfun(3,7)
//console.log("result : ", result);

function login(username = "gurudev"){
    return `${username} you are login`
}
//console.log(login());// if you not given argument than print undefined
//console.log(login("gopal"));

// Shoping Cart

function calculateprice(...num5){  // using three dot(...num5) rest operator to show all values..
        return num5
}
//console.log(calculateprice(100,200,300,400));


// handle a object using function
let user = {
      username:"gopal",
      email : " gopal@gmail.com"
}

function handleobj(anyobject){
      //console.log(`username is ${anyobject.username} and email is ${anyobject.email} `);
}
//handleobj(user)   // funtion call
handleobj(          // anoyher type to call funtion with arguments..
  {
    username: "gurudev",
    email : "guru@gmail.com"
  }
)


// access array  by function

let myArrya = [100,200,900,500,700,600]

function getvalue(getArray){
      return getArray[1]
}
console.log(getvalue(myArrya));
