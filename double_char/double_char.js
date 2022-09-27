function doubleChar(str){
    let tab =[...str],tab2=[]
 
    tab.forEach(
       element => {
          
          tab2.push(element,element)
       }
 
    )
    
    return tab2.join("")
 }