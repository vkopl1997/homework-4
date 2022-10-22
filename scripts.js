// task 1
// დაწერეთ ფუნქცია რომელსაც გადაეცემა მასივი და ეს ფუნქცია დაგვიბრუნებს
// ამ მასივში ყველაზე ხშირად გამოერებად ელემენტს და გამეორების რაოდენობას
// მაგალითად
// arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// პროგრამამ უნდა დაგვიბრუნოს 'a - 5'
let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let newArray =arr1.slice().sort();
let most = [undefined,0];
let counter = 0;
newArray.reduce(function(acc,val){
   acc == val ? ++counter > most[1] && (most = [val, counter]) : (counter = 1)
   return val 
})
console.log(`${most[0]} - ${most[1]} times `);



// task 2
//  გვაქვს ფუნქცია sumOfDifferences(arr) , რომელიც იღებს მასივს . 
  // პროგრამამ მასივი უნდა დაალაგოს კლებადობით და შემდეგ უნდა დაგვითვალოს
  // მეზობელი ელემენტების სხვაობების ჯამი . 
  // მაგ : [2, 1, 10]  -->  9 , რაც ნიშნავს დავალაგებდით [10,2,1] კლებადად
  // შემდეგ  (10-2) + (2-1) = 8 + 1 = 9

  // სორტირების ფუნქცია დაწეროთ თქვენით ან გამოიყენოთ Array.sort() მეთოდი რომელიც
  // პარამეტრად იღებს compareFn ფუნქციას , შედარების ქოლბექს .
  let exampleArry = [2,10,1]
  function sumOfDifferences(arr){
    arr.sort(function(a, b){return b - a});
    let sum = 0;
    for(let i=1;i<arr.length;i++){
      sum =sum + arr[i-1]-arr[i];
     
    
    }
    return sum;
    
  }
  console.log(sumOfDifferences(exampleArry));
