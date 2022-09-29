let solution = numb =>{
    let arrmult =[],i=1
    while (i<numb) {
        if(i%3==0 || i%5==0){

            if (arrmult.find(element=>{return element==i})==undefined) {
                arrmult.push(i)
            }
            // arrmult.find(element=>{return element==i})==undefined?arrmult.push(i):

        }
        i++
    }


    let sum = arrmult.length>0?arrmult.reduce((acc,element)=>{return acc+=element}):0



    return sum
    
}