function fishBash(number){
  if (number % 5 === 0 &&  number % 3 === 0){
    return 'fish bash'
  }
  if ( number % 5 === 0 ){
    return 'bash'
  }
  if ( number % 3 === 0){
    return 'fish'
  }
  return number
}

for (let x = 1 ; x <= 30 ; x++ ){
  console.log(x +' =', fishBash(x))
}