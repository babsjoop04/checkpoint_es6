let DigitalRoot=numb =>{


    if (numb>9) {
      
      let dr= numb.toString()
      dr = dr.split("")
      
      
      let sum = dr.reduce(
        (acc,element)=>{
          return acc+=parseInt(element)
        },0
        )
        
        
          if (sum>9) {
  
            let p = DigitalRoot(sum);
            return p
          } else {
            return sum
          }
  
  
      }else{
        return numb
      }
        
    }