function drawChristmasTree() {
     const height = parseInt(prompt("Write a height of a tree:"));
   
     switch (height) {
       case 0:
         alert("Висота повинна бути позитивним числом.");
         break;
       case 1:
         alert("Висота занадто маленька.");
         break;
       default:
         alert("Ось ваша ялинка:");
   
       
         const christmas_tree = document.getElementById("christmas_tree");
   
         
         for (let i = 1; i <= height; i++) {
           let row = "";
           
           for (let j = 1; j <= height - i; j++) {
             row += "&nbsp;";
           }
           
           for (let k = 1; k <= 2 * i - 1; k++) {
             row += "\/";
           }
           christmas_tree.innerHTML += row + "<br>";
         }
         
         for (let i = 1; i <= height / 3; i++) {
           let row = "";
           for (let j = 1; j <= height - 2; j++) {
             row += "&nbsp;";
           }
           row += "||";
           christmas_tree.innerHTML += row + "<br>";
         }
     }
   }
   
   drawChristmasTree();