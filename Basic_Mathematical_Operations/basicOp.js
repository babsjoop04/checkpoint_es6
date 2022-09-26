function basicOp(operation, value1, value2) {

    let result
    
    switch (operation) {
       case "+": result=value1+value2
          
          break;
       case "-": result=value1-value2
          
          break;
       case "*": result=value1*value2
          
          break;
       case "/": result=value1/value2
          
          break;
       default:console.log("please give an operator");
          break;
 
    }
    return result
 }