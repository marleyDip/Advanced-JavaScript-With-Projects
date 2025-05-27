/* 
    Given two rectangles, find if the given two rectangles overlap or not.
    
    Note that a rectangle can be represented by two coordinates, top left and bottom right. So mainly we are given following four coordinates. 

        l1: Top Left coordinate of first rectangle. 
        r1: Bottom Right coordinate of first rectangle. 
        l2: Top Left coordinate of second rectangle. 
        r2: Bottom Right coordinate of second rectangle. */

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// returns true if two rectangles (l1, r1) & (l2, r2) overlap
function doOverlap(l1, r1, l2, r2) {
  // If one rectangle is to the left of the other
  if (l1.x > r2.x || l2.x > r1.x) return false;

  // If one rectangle is above the other
  if (r2.y > l1.y || r1.y > l2.y) return false;
  return true;
}

const l1 = new Point(0, 10);
const r1 = new Point(10, 0); // 0 > 15 || 5 > 10 .. true
const l2 = new Point(5, 5); // 0 > 10 || 0 > 5 .. true
const r2 = new Point(15, 0); // Rectangles Overlap

if (doOverlap(l1, r1, l2, r2)) {
  console.log("Rectangles Overlap");
} else {
  console.log("Rectangles not Overlap");
}

const l3 = new Point(0, 10);
const r3 = new Point(10, 0); // -10 > 10 || 0 > -1 .. false
const l4 = new Point(-10, 5); // 0 > 10 || 0 > 5.. true
const r4 = new Point(-1, 0); // Rectangles Not Overlap

if (doOverlap(l3, r3, l4, r4)) {
  console.log("Rectangles Overlap");
} else {
  console.log("Rectangles not Overlap");
}
