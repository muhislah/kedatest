function palindrom(string){
  return string.toLowerCase() === string.split('').reverse().join('').toLowerCase()
}

module.exports = palindrom