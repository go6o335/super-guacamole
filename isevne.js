const isEven = (num) => {
    if (num % 2 === 0) {
      return "Its even"
    } else {
      return "Its odd"
    }
  
  
  }
  console.log(isEven(73)) // => false
  console.log(isEven(0)) // => true
  console.log(isEven(16)) // => true
  isEven()