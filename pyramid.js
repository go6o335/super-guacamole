const pyramid = (size) => {
    let stars = "*"
    let blank = " "
    for (let i = 1; i < size; i += 2) {
      console.log(blank.repeat((size - i) / 2 ) + stars.repeat(i) + blank.repeat((size - i) / 2 ))
  
   
    }
  
  }
  pyramid(12)
  
  
   
  
     
  
    