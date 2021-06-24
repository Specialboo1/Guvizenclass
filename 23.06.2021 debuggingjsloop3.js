(function(str){
 str1 = str.split("").reverse().join("");
 console.log(str1); 
})("abcd")

var res = function(arr){
    var newArr=[];
    for(var i=0; i < arr.length; i++)
    {
    if(newArr.indexOf(arr[i]) === -1) 
    {
    newArr.push(arr[i]);
    } 
}
    console.log(newArr)
   }
   res(["guvi","geek","guvi","duplicate","geek"])


var array =[[["firstname","vasanth"],["lastname","Raja"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
var final=[];
while(array.length!=0)
{
 var outer_remove = array.shift();
 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0]
 var value =inner_remove[1]
 var new_object = {[key] : value}
 final.push(new_object)
 }
}
 console.log(final);


