let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myDOB = new Date(2001, 5, 11)
console.log(myDOB.toDateString());

let myDOBtime = new Date(2001, 5, 11, 9,45)
console.log(myDOBtime.toLocaleString());

let mydate = new Date("01-16-2024")//
console.log(mydate.toLocaleString());
console.log(mydate.getTime());

let timestamp = Date.now()
console.log(timestamp);

 // divide by 1000 for take outpot in "seconds" and math.floor use for remove decimal numbers..
console.log(Math.floor(Date.now()/1000)); 


let newDate = new Date("02-16-2024")
console.log(newDate.getDay());
console.log(newDate.getTime());
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1); // +1 for start month of 0 to 11 in js

newDate.toLocaleString('default',{
    weekday: "long"
})