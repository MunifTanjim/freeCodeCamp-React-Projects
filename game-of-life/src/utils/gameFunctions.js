import lifes from '../utils/lifeStatus'
import companionGroups from '../utils/companionGroups'
import { lifeClasses, sizeClasses, speedPhrases, speedValues } from '../utils/gameStatus'

function run() {
  if(!this.isRunning) {
    this.updateInterval = setInterval(() => {
      this.nextGeneration()
    }, speedValues[this.speed] )

    this.isRunning = true
    this.setState({
      isRunning: this.isRunning
    })
  }
}

function pause() {
  clearInterval(this.updateInterval)
  this.isRunning = false
  this.setState({
    isRunning: this.isRunning
  })
}

function togglePause() {
  if(this.isRunning)
    this.pause()
  else
    this.run()
}

function clear() {
  this.lifes = lifes.clear(this.totalCells)
  this.pause()
  this.generation = 0
  this.updateBoard()
}

function random() {
  this.lifes = lifes.random(this.totalCells)
  this.generation = 0
  this.updateBoard()
}

function speed(d,e) {
  e.preventDefault()
  if ((this.speed>0 && +d<0 || +d>0 && this.speed<2)) {
    this.speed += +d
    this.setState({
      speed: this.speed
    })
    this.pause()
    this.run()
  }
}

function updateBoard() {
  setTimeout(() => (
    this.setState({
      lifes: this.lifes
    })
  ), 0)
}

function nextGeneration() {
  this.lifes = lifes.update(this.lifes, this.companions)
  if (this.lifes.some(x=>x)) {
    this.generation++
  } else {
    this.pause()
    this.generation = 0
  }
  this.updateBoard()
}

function handleToggleLife(e) {
  e.preventDefault()
  let index = e.target.getAttribute('id')
  this.lifes[index] = !this.lifes[index]
  this.updateBoard()
}

export const gStatus = {
  life: lifeClasses,
  size: sizeClasses,
  speed: speedValues,
  speedPhrase: speedPhrases
}

export const controls = {
  run: run,
  pause: pause,
  toggle: togglePause,
  clear: clear,
  random: random,
  speed: speed
}

export default {
  updateBoard: updateBoard,
  nextGeneration: nextGeneration,
  handleToggleLife: handleToggleLife,
  companionGroups: companionGroups
}
