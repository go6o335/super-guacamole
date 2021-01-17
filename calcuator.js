const calculator = (leftOperand, rightOperand, sign) => {
    if (sign === '+') {
      return leftOperand + rightOperand
    }
    if (sign === '/') {
      return leftOperand / rightOperand
    }
    if (sign === '*') {
      return leftOperand * rightOperand
    }
  
  
    if (sign === '-') {
      return leftOperand - rightOperand
    }
  
  
  
  
  }
  console.log(calculator(5, 6, '+')) // => 11
  console.log(calculator(30, 5, '/')) // => 6
  console.log(calculator(5, 6, '*')) // => 30
  console.log(calculator(5, 6, '-')) // => -1
  calculator()