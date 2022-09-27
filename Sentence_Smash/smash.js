let smash = (arr)=>{
    if (arr.length-1>=0) {
       
       return arr.reduce(
          (str,element)=>{
             let str2=arr.indexOf(element)!==arr.length-1?" ":"";
             let str1=words.indexOf(element)!==1?"":" ";
             return str +=`${str1}${element}${str2}`
          }
       )
    }else{
       return ""
    }
 }