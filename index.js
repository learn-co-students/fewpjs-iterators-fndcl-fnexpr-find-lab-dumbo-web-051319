const testVar = {}

function testFunc() {
  return "hi"
}

// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
//   //...
// ]

function superbowlWin(arrDeObj) {
  let selection = arrDeObj.find(function(obj) {
    return obj.result === 'W'
  })
  if(selection === undefined) {
    return selection
  } else {
    return selection.year
  }
}
