$(function() {
  var TOTAL_HEIGHT = 760;
  var TOTAL_WIDTH = 600;

  var VERTICAL_SPACE = TOTAL_HEIGHT / 4; // 190
  var START_Y = VERTICAL_SPACE * 3;
  var END_Y = TOTAL_HEIGHT;

  var imageNames = [
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

  for (var i = 0; i < imageNames.length; i++) {
    var source = 'images/' + imageNames[i];

    imageNames[i] = new Image(TOTAL_WIDTH, VERTICAL_SPACE);
    imageNames[i].src = source;
  }

  var canvas = document.querySelector('#corpse');
  var context = canvas.getContext('2d');

  flashFeet();

  function flashFeet() {
    clearFootZone();
    drawRandomImageInFootZone();

    var minTime = 20;
    var maxTime = 140;
    var timeout = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
    setTimeout(flashFeet, timeout);
  }

  function clearFootZone() {
    context.clearRect(0, START_Y, TOTAL_WIDTH, END_Y);
  }

  function drawRandomImageInFootZone() {
    var image = choice(imageNames);
    context.drawImage(image, 0, START_Y, TOTAL_WIDTH, VERTICAL_SPACE);
  }

  function choice(items) {
    return items[Math.floor(Math.random()*items.length)];
  }
});
