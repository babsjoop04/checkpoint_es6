(arr)=>{
    let nbEven=0
    arr.forEach(element=>{
        if (element%2==0) {
            nbEven++
        }
    })
    return nbEven>1?arr.find(element=>{return element%2!=0}):arr.find(element=>{return element%2==0})
}