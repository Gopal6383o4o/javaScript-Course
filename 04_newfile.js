let mode = "silver"
let color

if (mode === "dark"){
    color = "black"
}else if (mode === "blue"){
    color = "blue"
}else if (mode === "pink"){
    color = "pink"
}else{
    color = "white"
}
console.log(color)


let age=25
let result = age >= 18 ? "adult" : "not adult" //simpler and compact if else
console.log(result)