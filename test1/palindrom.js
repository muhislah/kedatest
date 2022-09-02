function palindrom(string){
  return string.toLowerCase() === string.split('').reverse().join('').toLowerCase()
}

console.log(palindrom('aabbaa'))
console.log(palindrom('Kasur ini Rusak'))
console.log(palindrom('palindrom'))