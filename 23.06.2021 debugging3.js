let message;
if (null || 2 || undefined )
{
 message = "welcome boss";
}
else
{
 message = "Go away";
}
  console.log(message);
  
let message;
let lock;
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);


let i = 3;
while (i) 
{
    console.log( i--);
  }

for (i=1; i<=10; i++)
console.log(i);

for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }


let countdown = 100;
while (countdown > 1) {
    countdown--;
    if(countdown == 0)
    {
     console.log("bomb triggered");
    }
  }

