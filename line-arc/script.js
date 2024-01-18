window.onload = function() {
  const canv = document.querySelector('#canvas')
  const ctx = canv.getContext('2d')
  const rad = Math.PI / 180

  // ctx.beginPath()
  // ctx.lineCap = 'round'
  // ctx.strokeStyle = 'black'
  // ctx.lineJoin = 'round'
  // ctx.lineWidth = 10
  // ctx.arc(75,75, 50, 45 * rad, 135 * rad, false)
  // ctx.stroke()
  //
  // ctx.beginPath()
  // ctx.lineCap = 'round'
  // ctx.strokeStyle = 'black'
  // ctx.lineJoin = 'round'
  // ctx.lineWidth = 10
  // ctx.arc(175,75, 50, 45 * rad, 135 * rad, true)
  // ctx.stroke()

  ctx.beginPath()
  ctx.lineCap = 'round'
  ctx.strokeStyle = 'red'
  ctx.lineJoin = 'round'
  ctx.lineWidth = 5
  ctx.moveTo(10,15)
  ctx.quadraticCurveTo(20,100, 150, 15)
  ctx.stroke()

  ctx.beginPath()
  ctx.lineCap = 'round'
  ctx.strokeStyle = 'green'
  ctx.lineJoin = 'round'
  ctx.lineWidth = 20
  ctx.moveTo(10,100)

  ctx.bezierCurveTo(30, 50, 130, 50, 200, 100)
  ctx.stroke()
}