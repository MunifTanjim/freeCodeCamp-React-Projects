const neighbors = (id,col,row) => {
  let indices = []

  const pushLeft = (id) =>
    indices.push(id-1<Math.floor(id/col)*col ? id-1+col : id-1)

  const pushRight = (id) =>
    indices.push(id+1==Math.floor(id/col)*col+col ? id+1-col : id+1)

  const pushSelf = (id) =>
    indices.push(id)

  const processUpperRow = (id) => {
    if(Math.floor((id-col)<0)) {
      pushLeft((row-1)*col+(id%col))
      pushSelf((row-1)*col+(id%col))
      pushRight((row-1)*col+(id%col))
    } else {
      pushLeft(id-col)
      pushSelf(id-col)
      pushRight(id-col)
    }
  }

  const processRow = (id) => {
    pushLeft(id)
    pushRight(id)
  }

  const processLowerRow = (id) => {
    if(Math.floor((id+col)/col)==row) {
      pushLeft(id%col)
      pushSelf(id%col)
      pushRight(id%col)
    } else {
      pushLeft(id+col)
      pushSelf(id+col)
      pushRight(id+col)
    }
  }

  processUpperRow(id)
  processRow(id)
  processLowerRow(id)

  return indices
}

const companionGroups = (size) => {
  let groups = [],
      { col, row } = size;
  for(let c=0; c<col; c++) {
    for(let r=0; r<row; r++) {
      let id = c*row+r
      groups.push(neighbors(id,col,row))
    }
  }
  return groups
}

export default companionGroups
