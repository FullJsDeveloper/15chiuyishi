console.clear()
class Magic {
    constructor() {}
  
    replace(a, b, data) {
      return data.replace(new RegExp(a, 'g'), b)
    }
  
    length(data) {
      return data.length
    }
  
    toUpperCase(str) {
      let obj = {
        "a": "A", "b": "B", "c": "C", "d": "D", "e": "E", "f": "F",
        "g": "G", "h": "H", "i": "I", "j": "J", "k": "K", "l": "L",
        "m": "M", "n": "N", "o": "O", "p": "P", "q": "Q", "r": "R",
        "s": "S", "t": "T", "u": "U", "v": "V", "w": "W", "x": "X",
        "y": "Y", "z": "Z", " ": " "
      }
  
      let result = ""
      for (let char of str) {
        result += obj[char.toLowerCase()] || char
      }
      return result
    }
  
    repeat(data, n) {
      return data.repeat(n)
    }
  
    count(str) {
      let countObj = {}
      for (let char of str) {
        if (countObj[char]) {
          countObj[char]++
        } else {
          countObj[char] = 1
        }
      }
      return countObj
    }
  }
  
  const magic = new Magic();
  console.log(magic.replace('a', 'e', 'salom'))
  console.log(magic.length('hello'))
  console.log(magic.toUpperCase('hello'))
  console.log(magic.repeat('salom', 2))
  console.log(magic.count('hello world'))