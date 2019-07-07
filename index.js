const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const win = arr.find(obj => obj.result === 'W');
  return win ? win.year : undefined;
}
