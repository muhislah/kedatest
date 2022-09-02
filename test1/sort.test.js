const mySort = require('./sort')

test('mySort function',() => {
  expect(mySort([4,5,3,2,5,1,-9])).toEqual([-9,1,2,3,4,5,5])
  expect(mySort([1,3,2,4,5,-1,0,4])).toEqual([-1,0,1,2,3,4,4,5])
})