console.clear()
Object.prototype.isNumber = function() {
    return typeof this === 'number' && !isNaN(this)
}

console.log((5).isNumber())
console.log("Hello".isNumber())
console.log(NaN.isNumber())
