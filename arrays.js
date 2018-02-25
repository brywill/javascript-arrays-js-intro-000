var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(arr, el) {
  return [el, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  return arr.unshift(el)
}

function addElementToEndOfArray(arr, el) {
  return [...arr, el]
}

function destructivelyAddElementToEndOfArray(arr, el) {
  return arr.push(el)
}

function accessElementInArray(arr, i) {
  return arr[i]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.shift
}

function removeElementFromBeginningOfArray(arr) {
  arr = arr.slice(1)
  return arr
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, slice.length - 1)
}