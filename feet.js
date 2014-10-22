$(function() {
  var TOTAL_HEIGHT = 760;
  var TOTAL_WIDTH = 600;
  var FOOT_SIZE = 60;

  var VERTICAL_SPACE = TOTAL_HEIGHT / 4; // 190
  var START_Y = VERTICAL_SPACE * 3;
  var END_Y = TOTAL_HEIGHT;

  var images = [
    'boots.jpg',
    'candy.jpg',
    'cow.jpg',
    'dog.jpg',
    'female.jpg',
    'flops.jpg',
    'horse.jpg',
    'kimodo.jpg',
    'kiss.jpg',
    'machine.jpg',
    'male.jpg',
    'military.jpg',
    'penguin.jpg',
    'pig.jpg',
    'robot.png',
    'tapdance.jpg',
    'therapy.jpg'
  ];

  for (var i = 0; i < images.length; i++) {
    var source = 'images/' + images[i];

    images[i] = new Image(TOTAL_WIDTH, VERTICAL_SPACE);
    images[i].src = source;
  }

  var canvas = document.querySelector('#corpse');
  var context = canvas.getContext('2d');

  var humanFoot = movingFoot('images/foot.jpg');
  var cleat = movingFoot('images/cleat.jpg');

  flashFeet();

  function flashFeet() {
    clearFootZone();
    drawRandomImageInFootZone();
    drawFoot(humanFoot);
    drawFoot(cleat);

    moveFoot(humanFoot);
    moveFoot(cleat);

    var minTime = 20;
    var maxTime = 140;
    var timeout = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
    setTimeout(flashFeet, timeout);
  }

  function clearFootZone() {
    context.clearRect(0, START_Y, TOTAL_WIDTH, END_Y);
  }

  function drawRandomImageInFootZone() {
    var image = choice(images);
    context.drawImage(image, 0, START_Y, TOTAL_WIDTH, VERTICAL_SPACE);
  }

  function choice(items) {
    return items[Math.floor(Math.random()*items.length)];
  }

  function movingFoot(imageName) {
    var foot = {};

    foot.image = new Image(FOOT_SIZE, FOOT_SIZE);
    foot.image.src = imageName;

    foot.x = xInBounds();
    foot.y = yInBounds();

    return foot;
  }

  function moveFoot(foot) {
    var x, y;

    var loopCount = 0;
    do {
      x = foot.x + randomPosisitionalDelta();
      y = foot.y + randomPosisitionalDelta();
      loopCount++;
    } while ((!xIsValid(x) || !yIsValid(y)) && loopCount < 10);

    if (loopCount < 10) {
      foot.x = x;
      foot.y = y;
    }
  }

  function drawFoot(foot) {
    context.save();

    context.shadowColor = randomColor();
    context.shadowBlur = Math.random() * 16 + 2;
    context.shadowOffsetX = 4;
    context.shadowOffsetY = 4;

    var size = FOOT_SIZE + footSizeDelta();

    context.drawImage(foot.image, foot.x, foot.y, size, size);

    context.restore();
  }

  function xInBounds() {
    return Math.floor(Math.random() * TOTAL_WIDTH - FOOT_SIZE / 2);
  }

  function yInBounds() {
    return Math.floor(Math.random() * VERTICAL_SPACE - FOOT_SIZE / 2) + START_Y;
  }

  function randomPosisitionalDelta() {
    return (Math.random() - 0.5) * 10;
  }

  function footSizeDelta() {
    return (Math.random() - 0.5) * 30;
  }

  function xIsValid(x) {
    return (x >= 0 && x <= TOTAL_WIDTH);
  }

  function yIsValid(y) {
    return (y >= START_Y && y <= END_Y);
  }

  function randomColor() {
    // lol so dumb that this exists
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
});
