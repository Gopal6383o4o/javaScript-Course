let myArr = [0,1,2,3,4,5,6,7,8]
let myArr1 =["gopal","harsh","mohit"]
let myArr2 = new Array(1,2,3,4,5)

//console.log(myArr);
//console.log(myArr1[2]);
//console.log(myArr2);

myArr2.push(8)
myArr2.pop() // always remove last element..
myArr1.pop()
//console.log(myArr2);
//console.log(myArr1);

myArr.unshift(5)   // unshift use for add a value for starting of an array..
//console.log(myArr);
myArr.shift()  // same as pop operation for remove first element
//console.log(myArr);
let myArr3 = myArr.join() // join has change array into String...
//console.log(myArr3);
//console.log(typeof myArr3);


let array5 = myArr.slice(3, 7 )
//console.log(myArr);
//console.log("A",array5);
let array6 = myArr.splice(3, 7 )
//console.log(myArr);
//console.log("B",array6);

//ARRAY 2

// merge two array

let marvel_hero = ["ironman","thor","hulk"]
let dc_hero = ["batman","superman","flash"]
let legend_GOD = ["hanuman","mahadev","krishn"]
//marvel_hero.push(dc_hero) // push method has add two array but adding array like [array[array]]...
//console.log(marvel_hero);
let all_hero = marvel_hero.concat(dc_hero) // concat method has add two array in one array like [array,array]..
//console.log(all_hero);
// using spread(three dot...) to add multiple arrays
let allnew_hero = [...marvel_hero, ...dc_hero, ...legend_GOD]
//console.log(allnew_hero);


let number=[1,2,3,[4,5,6],7,[8,[9,10]]]
//console.log(number.flat(Infinity)); // flat use for multiple array in a single array to combine an array..


let find = Array.isArray("GOPAL")
//console.log(find);
//console.log(Array.from("GOPAL"));
let S = 100
let S1 = 200
let S2 = 300
console.log(Array.of(S,S1,S2)); // of has convert values into array...

