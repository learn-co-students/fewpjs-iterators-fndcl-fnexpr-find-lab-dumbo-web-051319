const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const win = array.find(a => a.result === "W");
  if(win) {
    return win.year
  }
}
