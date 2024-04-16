console.clear()
function squareNumber(n) {
    let squared = n.toString().split('').map(num => Math.pow(parseInt(num), 2))
    return parseInt(squared.join(''))
  }
  
  console.log(squareNumber(12321))
  console.log(squareNumber(99999))