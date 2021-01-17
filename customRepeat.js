const customRepeat = (symbol, count) => {
    let result = ""
     for (let i = 0; i < count; i++) {
     result += symbol
     }
    return result
      
  }
  console.log(customRepeat("*",5))
  customRepeat()