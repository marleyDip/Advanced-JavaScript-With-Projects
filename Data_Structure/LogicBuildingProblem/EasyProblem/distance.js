// Program to calculate distance between two points
/* 
    We will use the distance formula derived from Pythagorean theorem. The formula for distance between two point (x1, y1) and (x2, y2) is
        Distance = root over (x2 − x1)^2 + (y2 − y1)^2

*/

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

console.log(distance(3, 4, 4, 3).toFixed(6));
// Function to calculate distance
