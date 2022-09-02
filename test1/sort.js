function mySort(array){
  for (let x = 0 ; x < array.length ; x++){
    for (let y = x+1; y < array.length ; y++){
      if(array[x] > array[y]){
        [array[x], array[y]] = [array[y], array[x]]
      }
    }
  }
  return console.log(array)
}

mySort([-1,2,5,4,1,6,4])