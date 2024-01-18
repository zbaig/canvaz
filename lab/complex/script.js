window.onload = function() {
  const canv = document.querySelector('#canvas')
  const ctx = canv.getContext('2d')

  ctx.beginPath()
  ctx.lineCap = 'round' //butt/square
  ctx.strokeStyle = 'black'
  ctx.lineJoin = 'bevel' //round/miter
  ctx.shadowBlur = 10
  ctx.shadowColor = 'brown'
  ctx.shadowOffsetX = 20
  ctx.shadowOffsetY = 20
  ctx.lineWidth = 10
  ctx.moveTo(10,25)
  ctx.lineTo(200, 25)
  ctx.lineTo(10, 125)
  ctx.lineTo(200, 125)
  ctx.stroke()

}