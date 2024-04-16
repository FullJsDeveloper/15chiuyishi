console.clear()
class Circle {
    constructor(radius) {
      this.radius = radius
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2)
    }
  
    getPerimeter() {
      return 2 * Math.PI * this.radius
    }
  }
  
  const circle1 = new Circle(5) // Radiusi 5 bo'lgan aylana
  const circle2 = new Circle(10) // Radiusi 10 bo'lgan aylana
  console.log("Circle 1: Yuzasi =", circle1.getArea(), "Perimetri =", circle1.getPerimeter())
  console.log("Circle 2: Yuzasi =", circle2.getArea(), "Perimetri =", circle2.getPerimeter())