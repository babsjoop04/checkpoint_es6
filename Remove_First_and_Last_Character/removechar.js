function removeChar(str){
  
    //   convert the string to an array
     let p = [...str];
      
    //   let's check that the string is a size greater than 2
    //   if true then we remove the first and the last character
      
      
       p.length>=2?(p.pop(),p.shift()):(console.log("give a string whose size is greater than 2"));
      
      
    //   returns the array as a string with the join method
       return p.join("")  
    
    };
    
    
    
    