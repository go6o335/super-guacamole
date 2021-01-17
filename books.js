let discount = 0.25     
    let sum = " " 
    let book1 = 0
    let book2 = 50
    let book3 = 60
    let book4 = 20
    let book5 = 0
    let book6 = 80
    let book7 = 10
    console.log("Learn You a Haskell", book1)
    console.log("The Healthy Programmer", book2)
    console.log("Code Complete", book3)
    console.log("The Pragmatic Programmer", book4)
    console.log("Pro Git", book5)
    console.log("Introduction to Algorithms", book6)
    console.log("Concrete Mathematics", book7)
   sum =  book1 + book2 + book3  + book4 + book5 + book6 + book7
   discount =   sum * discount - sum 
  console.log("The price of all book is ", sum)
  console.log("The discount will be", discount)