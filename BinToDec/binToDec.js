let bin = (arr)=>  {

    let dec2=  arr.reduce(
        (bin,element,ind)=>{
            let pui=arr.length -ind-1
            return  bin += element * Math.pow(2,pui)
          },0
        )
        return dec2
  }


//version 2

  const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);