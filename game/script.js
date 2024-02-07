window.onload = function() {
  var canvas = document.getElementById('gameCanvas')
  var ctx = canvas.getContext('2d')

  canvas.width = 800
  canvas.height = 600

// Load car image
  var carImage = new Image()
  carImage.src = './car.webp' // Make sure this path is correct

  var car = {
    x: canvas.width / 2,
    y: canvas.height - 70,
    width: 50, // Adjust based on your image size
    height: 70, // Adjust based on your image size
    speed: 5,
    moveLeft: false,
    moveRight: false,
  }

// Load dinosaur image
  var dinosaurImage = new Image()
  dinosaurImage.src = './dino.webp' // Make sure this path is correct

  var dinosaurs = []
  var dinosaurSpeed = 2
  var lastFrameTime = 0

  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') car.moveLeft = true
    if (event.key === 'ArrowRight') car.moveRight = true
  })

  document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowLeft') car.moveLeft = false
    if (event.key === 'ArrowRight') car.moveRight = false
  })

  function addDinosaur() {
    var size = Math.random() * (50 - 30) + 30 // Dinosaurs have random sizes.
    dinosaurs.push({
      x: Math.random() * (canvas.width - size),
      y: -size,
      width: size,
      height: size,
    })
  }

  function update(progress) {
    if (car.moveLeft && car.x > 0) car.x -= car.speed
    if (car.moveRight && car.x < canvas.width - car.width) car.x += car.speed

    dinosaurs.forEach(function(dinosaur, index) {
      dinosaur.y += dinosaurSpeed

      // Collision detection
      if (car.x < dinosaur.x + dinosaur.width &&
        car.x + car.width > dinosaur.x &&
        car.y < dinosaur.y + dinosaur.height &&
        car.y + car.height > dinosaur.y) {
        alert('Game Over! Score: ' + Math.floor(lastFrameTime / 1000))
        document.location.reload()
      }

      if (dinosaur.y > canvas.height) {
        dinosaurs.splice(index, 1)
      }
    })

    if (Math.random() < 0.02) {
      addDinosaur()
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw car with an image
    ctx.drawImage(carImage, car.x, car.y, car.width, car.height);

    // Draw dinosaurs with an image
    dinosaurs.forEach(function(dinosaur) {
      ctx.drawImage(dinosaurImage, dinosaur.x, dinosaur.y, dinosaur.width, dinosaur.height);
    });
  }

  function loop(timestamp) {
    var progress = timestamp - lastFrameTime
    lastFrameTime = timestamp

    update(progress)
    draw()

    requestAnimationFrame(loop)
  }

  requestAnimationFrame(loop)
}