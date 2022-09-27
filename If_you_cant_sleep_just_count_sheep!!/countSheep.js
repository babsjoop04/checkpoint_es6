const countSheep = (numb)=>{
    let i=1,str=""
    while (i<=numb) {
        str+=`${i} sheep...`
        i++
    }
    return numb>0?str:"Please give a non-negative integer"
}