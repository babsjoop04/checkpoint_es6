function peopleWithAgeDrink(old) {
    let str =""
    if(old<14) str="toddy"
    if(old>=14 && old<18) str = "coke"
    if(old>=18 && old<21) str = "beer"
    if(old>=21) str = "whisky"
    
    return `drink ${str}`
  }