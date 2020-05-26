


var min =-5;
var max =25;
var temp = (Math.random() * (max -min)) +min;



switch (true) {
   case (temp > -5 && temp < 10):
       title = "The weather is cold";
       document.write("<figure><img src='img/cold.jpg' alt='cold'><figcaption>"+title+"</figcaption></figure>");
       console.log(title);
       break;
   default:
       title = "The weather is moderate";
       document.write("<figure><img src='img/mod.jpg' alt='moderate'><figcaption>"+title+"</figcaption></figure>");
       console.log(title);
       break;
}
console.log(temp);

var number = [1, 7, -3, 9];
console.log(Math.max(...number));