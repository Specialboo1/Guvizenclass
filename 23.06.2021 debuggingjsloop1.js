var numsArr = [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10, 11]];
var newarray =[]
for (var i = 0; i < numsArr.length; i++) 
{
    let len = numsArr[i];
    for (var j=0; j < len.length; j++)
    {
 newarray += numsArr[i][j];
    }
}
console.log(newarray);

var numsArr = [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) 
{
    let len = numsArr[i];
    for (var j=0; j < len.length; j++)
    {
        if (j % 2 === 0)
 numsArr[i][j] = "even";
    }
}
console.log(numsArr);

var numsArr = [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10, 11]];
var newsarr=[];
for (var i = numsArr.length-1; i >=0; i--) 
{
    let len = numsArr[i];
    for (var j= len.length -1; j >=0 ; j--)
    {
        if (j>0)
        newsarr+=numsArr[i][j] + " ";
        else
        newsarr+=numsArr[i][j];
    }
}
console.log(newsarr);


var numsArr = [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10, 11]];
var sumodd =0; sumeven =0;
for (var i = 0; i < numsArr.length; i++) 
{
    let len = numsArr[i];
        for (var j= 0; j < len.length; j++)
    {
        if (numsArr[i][j] % 2 === 0)
        sumeven+=numsArr[i][j]
        else
        sumodd+=numsArr[i][j];
    }
}
console.log(sumodd, sumeven);


aa = (f,s,t) => {    
    if(f>s && f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,3,5);

let n = 123;
console.log(add(n));
function add(n)
{
   let m = n.toString().split('');
let sum = 0;
for(var i=0;i<m.length;i++)
{
 sum+=+m[i]
 }
 return sum;
}


const arr = [9,8,5,6,4,3,2,1];
(function() {
    let sum = 0;
    for (var i = 0; i < arr.length; i++)
    {
    sum+= +arr[i];
    }
    console.log(sum);
   })([arr]);


var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function() 
{
    for (var i = 0; i < arr.length; i++) 
    {
    console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
   }
   ano([arr]);


const newArray = [1,3,2,5,10,11,7];
const myPrime = newArray.filter(num=>{
    if(num>1)
    {
 for(let i=2;i<num;i++){
 if(num % i === 0)
 {
 return false;
 }
 }
 return num;
}});
console.log(myPrime);


const num = [10, 20, 30, 40,50,60,70,80,90,100] ;
var sum = (a, b) =>
 a + b
sum = num.reduce(sum)
console.log(sum);

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function() {
 out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})([arr],k);


var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
    for (var i = 0; i < arr.length; i++) 
    {
    console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
   })([arr]);


