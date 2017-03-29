window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  
  ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';

  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  
  var max = -1;
  for (var i = 0; i < times.length; i++){
    var time=times[i];
    if (time > max) max = time;
  };
  
  var histogramHeight = 150;
  var step = histogramHeight / max;
  
  function rand(){
    return math.random();
  }
  
  for (i = 0; i < times.length; i++){
    if (names[i]=="Вы") {ctx.fillStyle = 'rgba(255, 0, 0, 1)'} else {ctx.fillStyle = 'rgba( 0, 0, 255, 1)'};
    ctx.fillRect(120+(90*i), 230-(times[i]*step), 40, times[i]*step);
    ctx.fillStyle = 'black';
    ctx.font = '14px PT Mono';
    ctx.fillText(times[i].toFixed(0), 120+(90*i), 220-(times[i]*step));
    ctx.fillText(names[i], 120+(90*i), 245);
  };
    
};

