const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  const win = array.find(game => game.result === "W");
  if (win){
    return win.year
  } 
}