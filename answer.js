function revrot(str, sz) {
    let result=""
    if(str=="" || sz<=0){
      result =""
    }else{
      let count=Math.floor(str.length/sz)
      let startIndex=0
      for(let i= 1;i<=count;i++){
        let endIndex=sz*i
        let newStr=str.slice(startIndex,endIndex)
        startIndex=endIndex
        let totalSum=newStr.split("").reduce((x,y)=>parseInt(x)+parseInt(y))
        if(totalSum%2==0){
          result+=newStr.split("").reverse().join("")
        }else{
          let firstElement=newStr.split("").shift()
          newStr.split("").slice(1).push(firstElement)
          result+=newStr.split("").slice(1).join("")+firstElement
        }
      }
    }
  return result
}

function revrot(str, sz) {
    if (sz <= 0 || !str || sz > str.length) return '';    
      
    const sumCubes = chunk => chunk.split('').reduce((sum, digit) => sum += digit**3, 0);
    const reverse = chunk => chunk.split('').reverse().join('');
    const rotate = chunk => chunk.slice(1) + chunk.slice(0, 1);
    
    const chunks = [];
    
    for (let i = 0; i < str.length; i += sz) {
      let chunk = str.slice(i, i + sz);
      
      if (chunk.length < sz) continue;
      
      chunk = sumCubes(chunk) % 2 
        ? rotate(chunk)   
        : reverse(chunk);
      
      chunks.push(chunk)
    }
    
    return chunks.join('')
}
