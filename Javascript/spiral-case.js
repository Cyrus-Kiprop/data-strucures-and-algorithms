function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var regex = /(\s|_)/g
    var regex1 = /[A-Z]/g
    var regex2 =/-(-)*/g
   let strArr = [...str] // converts the string into an array
   strArr.map(v=>{
       if(regex1.exec(v)){
           strArr.splice(strArr.indexOf(v), 0, '-')
       }
       else if(regex.exec(v)){
        strArr.splice(strArr.indexOf(v), 1, '-')
       }else if(regex2.exec(v)){
           strArr.splice(strArr.indexOf(v))
       }
   })
   let result = strArr.join('').trim().toLocaleLowerCase()
   console.log(result);
   return result;
    
  }
  
spinalCase('this Is Spinal_Tap');
