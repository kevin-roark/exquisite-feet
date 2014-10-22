$(function() {
  var TOTAL_HEIGHT = 760;
  var TOTAL_WIDTH = 600;

  var VERTICAL_SPACE = TOTAL_HEIGHT / 4;
  var START_Y = VERTICAL_SPACE * 3;
  var END_Y = TOTAL_HEIGHT;

  var canvas = document.querySelector('#corpse');
  var context = canvas.getContext('2d');

  context.fillStyle = 'red';
  context.fillRect(0, START_Y, TOTAL_WIDTH, END_Y);
});
