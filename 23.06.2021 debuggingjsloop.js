var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++)
 {
 new_string += numsArr[i] 
}
console.log(new_string);


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++)
 {
     if (i<10)
     {
 new_string += numsArr[i] + "," ;}
 else
 new_string += numsArr[i]
}
console.log(new_string);

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 10; i >= 0; i--)
 {
     if (i>0)
     {
 new_string += numsArr[i] + " " ;}
 else
 new_string += numsArr[i]
}
console.log(new_string);


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; 
for (var i = 0; i<11; i++)
 {
     if (numsArr[i] % 2 === 0)
     {
        numsArr[i] = "even";
     }
}
console.log(numsArr);

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; 
for (var i = 0; i<11; i++)
 {
     if ( i % 2 === 0)
     {
        numsArr[i] = "even";
     }
}
console.log(numsArr);


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; 
var sum = 0;
for (var i = 0; i<11; i++)
 {
     if ( numsArr[i] % 2 === 0)
     {
        sum+= numsArr[i]
     }
}
console.log(sum);


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; 
var sum = 0;
for (var i = 0; i<11; i++)
 {
     {
        sum+= numsArr[i]
     }
}
console.log(sum);


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; 
var sum = 100;
for (var i = 0; i<11; i++)
 {
     if (numsArr[i] % 2 === 0)
     {
        sum+= numsArr[i]
     }
     else{
         sum-= numsArr[i]
     }
}
console.log(sum);


var numsArr = [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) 
{
 console.log(numsArr[i]);
}

