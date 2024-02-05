/*let num =prompt("enter a number")
if(num % 5 === 0){
    console.log(num,"number is divisable")
}else{
    console.log(num,"number not divisable")
}*/


 /* write a code which can give grades to stu. according to their scores:
 90-100,A
 70-89,B
 60-69,C
 50-59,D
 0-49,E*/

 let score = prompt("enter your score (0-100)")
 let grades

 if(score>=90 && score<=100){
    grades="A"
 }else if(score>=70 && score<=89){
    grades="B"
 }else if(score>=60 && score<=69){
    grades="C"
 }else if(score>=50 && score<=59){
    grades="D"
 }else if(score>=0 && score<=49){
    grades="E"
 }
 console.log("your garde is:",grades)
    

