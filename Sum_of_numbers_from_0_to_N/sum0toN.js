

// ne convient pas pour le site
const sum0_N=(numb)=>{
    let sum =0,i=1,chaine="0"
  
 
        while (i<=numb) {
 
            sum+=i
          chaine+=`+${i}`
            i++
        }
 
        return numb>=0?`${chaine}=${sum}`:`${numb}<0`
}