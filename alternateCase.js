Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
  
  function alternateCase(s) {
  let array = s.split('')
  for (let i = 0; i<array.length; i++){
    if (array[i]===array[i].toUpperCase()){
      array[i]=array[i].toLowerCase()
    }
    else{
      array[i]=array[i].toUpperCase()
    }
  }
  return array.join('');
