const reversePyramid = (size) => {
    let stars = "*"
    let blank = " "
    for (let i = size; i >=0  ; i -= 2) {
      console.log(blank.repeat((size - i) / 2) + stars.repeat(i) + blank.repeat((size - i) / 2))
  
   
  
     
  
    }
  
  }
  reversePyramid(13)   