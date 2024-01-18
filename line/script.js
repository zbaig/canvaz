window.onload = function() {
  const canv = document.querySelector('#canvas')
  const ctx = canv.getContext('2d')

  ctx.beginPath()
  ctx.lineCap = 'round'
  ctx.strokeStyle = 'black'
  ctx.lineJoin = 'round'
  ctx.lineWidth = 10
  ctx.moveTo(10,75)
  ctx.lineTo(200, 75)
  ctx.lineTo(200, 100)
  ctx.lineTo(10, 100)
  ctx.stroke()

  // ctx.beginPath()
  // ctx.strokeStyle = 'red'
  // ctx.lineWidth = 20
  // ctx.moveTo(10,100)
  // ctx.lineTo(200, 100)
  // ctx.stroke()

  ctx.beginPath()
  ctx.strokeStyle = 'blue'
  ctx.lineWidth = 20
  ctx.shadowColor = 'black'
  ctx.shadowOffsetX = 10
  ctx.shadowOffsetY = 10
  ctx.shadowBlur = 5
  ctx.moveTo(50,15)
  ctx.lineTo(200, 15)
  ctx.stroke()
}