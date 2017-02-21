const clearLifes = (totalCells) => {
  let lifes = []
  for(let i=0;i<totalCells;i++) {
    lifes.push(false)
  }
  return lifes
}

const randomLifes = (totalCells) => {
  let lifes = []
  for(let i=0;i<totalCells;i++) {
    lifes.push(Boolean(Math.floor(Math.random()*2)))
  }
  return lifes
}

const updateLifes = (lifes, companions) => (
  companions.map((group,i) => {
    let companionsAlive = group.reduce((total, next) => (
        total + +!!lifes[next]
      ), 0)
    if(companionsAlive==3)
      return lifes[i] ? 'old' : true
    else if(companionsAlive==2 && !!lifes[i])
      return 'old'
    else
      return false
  })
)

export default {
  clear: clearLifes,
  random: randomLifes,
  update: updateLifes,
}
