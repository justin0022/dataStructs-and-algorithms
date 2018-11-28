let possibilities = 0
const mem = {}

const threePack = n => {
  if (n === 0) return

  else {
    if (n > 3) {
      possibilities = possibilities + 3
      threePack(n - 1)
      threePack(n - 2)
      threePack(n - 3)
    } else if (n === 2) {
      possibilities = possibilities + 2
      threePack(n - 1)
      threePack(n - 2)
    } else if (n === 1) {
      possibilities = possibilities + 1
      threePack(n - 1)
    }
    return possibilities
  }
}

console.log(threePack(35))