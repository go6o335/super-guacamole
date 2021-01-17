
const isLegal = (num, country) => {
    if (num < 18 & country === "EU") {
  
      return "Its illeagal 1 "
    } else if (num => 18 & country === "EU") {
      return "Its legal 1 "
      if (num < 21 && country === "US") {
        return "Its illeagal"
      } else if (num > 21, "US") {
       return "Its legal "
  
      }
    }
  
  }
  
  console.log(isLegal(17, "EU")) // => 'illeagal'
  console.log(isLegal(18, "EU")) // => 'legal'
  console.log(isLegal(18, "US")) // => 'illegal'
  console.log(isLegal(21, "US")) // => 'legal'
  isLegal()