//every: Did all elements satisfy the callback?
  //The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

  let arr = [10, 20, 30, 40, 50]

  function gfive(e){if
  (e > 5) return true}

  arr.every(gfive) // true

//find: Find the first element that satisfies the callback

arr.find(gfive)
// 10

//findIndex: Find the first element that satisfies the callback's index. **Otherwise, it returns -1, indicating that no element passed the test.

let arr2 = [13, 16, 19, 23]
function lfive(e){
  if (e < 5) return true
}

arr.findIndex(lfive) // -1

//map: Transform every element and create a new array

//reduce: Reduce every element into a new value

//some: Did any element satisfy the callback? The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

let arr2 = [13, 16, 19, 23]
function lfive(e){
  if (e < 5) return true
}

arr.some(lfive) // false
