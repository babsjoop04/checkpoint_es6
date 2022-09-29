 let spinWords = str =>{



    let deb = str.split(" ")
    deb.forEach(
     (element,idx)=>{
       if (element.length>=5){
         deb[idx] = element.split("").reverse().join("")
       }
     }
    )
      

    return deb.join(" ")


  }
