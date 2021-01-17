const max = (a, b) => {
    if (a > b) {
      return "its the bigger number"
    } else {
      return "its the smaller number"
    }
  
  }
  console.log(max(5, 6)) // => 6
  console.log(max(0, -5)) // => 0
  max()