const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  const win = record.find(object => object.result === "W")
  if (win) {
    return win.year
  }
  return win
}
